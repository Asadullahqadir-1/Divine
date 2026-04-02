import "server-only";
import { randomUUID } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type LocalBook = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  externalLink?: string;
  featured: boolean;
  coverImageUrl: string;
  imageAlt: string;
  price: number | null;
  pdfUrl: string;
};

type LocalBookStore = {
  books: LocalBook[];
};

let cachedStorePath: string | null = null;
let cachedPublicDir: string | null = null;

export function isVercelRuntime() {
  return Boolean(process.env.VERCEL);
}

async function pathExists(targetPath: string) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveStorePath() {
  if (cachedStorePath) return cachedStorePath;

  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, "src", "data", "local-books.json"),
    path.join(cwd, "web", "src", "data", "local-books.json"),
  ];

  for (const candidate of candidates) {
    if (await pathExists(candidate)) {
      cachedStorePath = candidate;
      return candidate;
    }
  }

  cachedStorePath = candidates[0];
  return cachedStorePath;
}

async function resolvePublicUploadsDir() {
  if (cachedPublicDir) return cachedPublicDir;

  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, "public", "uploads", "books"),
    path.join(cwd, "web", "public", "uploads", "books"),
  ];

  for (const candidate of candidates) {
    const parentDir = path.dirname(path.dirname(candidate));
    if (await pathExists(parentDir)) {
      cachedPublicDir = candidate;
      return candidate;
    }
  }

  cachedPublicDir = candidates[0];
  return cachedPublicDir;
}

async function readStore(): Promise<LocalBookStore> {
  const storePath = await resolveStorePath();

  try {
    const raw = await readFile(storePath, "utf8");
    const parsed = JSON.parse(raw) as LocalBookStore;
    if (!Array.isArray(parsed.books)) {
      return { books: [] };
    }
    return parsed;
  } catch {
    return { books: [] };
  }
}

async function writeStore(store: LocalBookStore) {
  const storePath = await resolveStorePath();
  await mkdir(path.dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify(store, null, 2), "utf8");
}

export async function getLocalBooks() {
  const store = await readStore();
  return [...store.books].sort((a, b) => Number(b.featured) - Number(a.featured));
}

export async function createLocalBook(input: Omit<LocalBook, "_id">) {
  const store = await readStore();
  const book: LocalBook = {
    _id: `local-${randomUUID()}`,
    ...input,
  };
  store.books.unshift(book);
  await writeStore(store);
  return book;
}

export async function updateLocalBook(id: string, patch: Partial<Omit<LocalBook, "_id">>) {
  const store = await readStore();
  const index = store.books.findIndex((book) => book._id === id);
  if (index === -1) {
    return null;
  }

  store.books[index] = {
    ...store.books[index],
    ...patch,
  };
  await writeStore(store);
  return store.books[index];
}

export async function deleteLocalBook(id: string) {
  const store = await readStore();
  const index = store.books.findIndex((book) => book._id === id);
  if (index === -1) {
    return false;
  }

  store.books.splice(index, 1);
  await writeStore(store);
  return true;
}

export async function saveLocalBookUpload(fileName: string, bytes: Uint8Array) {
  const uploadsDir = await resolvePublicUploadsDir();
  await mkdir(uploadsDir, { recursive: true });

  const safeName = fileName.replace(/[^a-zA-Z0-9.-]/g, "-");
  const finalName = `${Date.now()}-${safeName}`;
  const absolutePath = path.join(uploadsDir, finalName);
  await writeFile(absolutePath, bytes);

  return `/uploads/books/${finalName}`;
}
