import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import {
  type AdminBookPayload,
  extractPortableTextText,
  toMetaDescription,
  toPortableText,
  toSlug,
  validateBookPayload,
} from "@/lib/adminBooks";
import { hasValidSanityWriteConfig, sanityWriteClient } from "@/lib/sanity/writeClient";
import { revalidatePath } from "next/cache";
import { createLocalBook, getLocalBooks, isVercelRuntime } from "@/lib/localBooksStore";

const ADMIN_BOOKS_QUERY = `*[_type == "book"] | order(featured desc, _updatedAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  externalLink,
  featured,
  "coverImageUrl": coverImage.asset->url,
  "imageAlt": coverImage.alt,
  price,
  "pdfUrl": pdf.asset->url
}`;

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!hasValidSanityWriteConfig()) {
    const localBooks = await getLocalBooks();
    return NextResponse.json({ books: localBooks });
  }

  const books = await sanityWriteClient.fetch<any[]>(ADMIN_BOOKS_QUERY);
  const normalized = books.map((book) => ({
    _id: book._id,
    title: book.title,
    slug: book.slug,
    description: extractPortableTextText(book.description),
    externalLink: book.externalLink,
    featured: Boolean(book.featured),
    coverImageUrl: book.coverImageUrl || "",
    imageAlt: book.imageAlt || "",
    price: book.price || null,
    pdfUrl: book.pdfUrl || "",
  }));

  return NextResponse.json({ books: normalized });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: AdminBookPayload;
  try {
    body = (await request.json()) as AdminBookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  // Always require cover image for new books
  const validationError = validateBookPayload(body, { requireImage: true });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const title = body.title!.trim();
  const description = body.description!.trim();
  const slug = toSlug(body.slug?.trim() || title);
  const externalLink = body.externalLink?.trim() || "";
  const featured = Boolean(body.featured);
  const imageAlt = body.imageAlt!.trim();
  const priceStr = body.price?.trim() || "";
  const price = priceStr ? parseFloat(priceStr) : null;
  const pdfAsset = body.pdfAssetId?.trim() || "";

  if (!hasValidSanityWriteConfig()) {
    if (isVercelRuntime()) {
      return NextResponse.json(
        { error: "Admin write operations on Vercel require SANITY_API_WRITE_TOKEN (or SANITY_WRITE_TOKEN)." },
        { status: 503 }
      );
    }

    const localImageAsset = body.imageAssetId?.trim() || "";
    const coverImageUrl = localImageAsset.startsWith("local-url:") ? localImageAsset.replace("local-url:", "") : "";
    const pdfUrl = pdfAsset.startsWith("local-url:") ? pdfAsset.replace("local-url:", "") : "";
    const createdLocal = await createLocalBook({
      title,
      slug,
      description,
      externalLink: externalLink || undefined,
      featured,
      coverImageUrl,
      imageAlt,
      price,
      pdfUrl,
    });

    revalidatePath("/");
    revalidatePath("/books");
    return NextResponse.json({ ok: true, id: createdLocal._id }, { status: 201 });
  }

  const metaDescription = toMetaDescription(description);

  const created = await sanityWriteClient.create({
    _type: "book",
    title,
    slug: { _type: "slug", current: slug },
    description: toPortableText(description),
    externalLink: externalLink || undefined,
    featured,
    price: price !== null ? price : undefined,
    pdf: pdfAsset ? {
      _type: "file",
      asset: { _type: "reference", _ref: pdfAsset },
    } : undefined,
    coverImage: {
      _type: "image",
      asset: { _type: "reference", _ref: body.imageAssetId!.trim() },
      alt: imageAlt,
    },
    seo: {
      _type: "seo",
      metaTitle: title.slice(0, 60),
      metaDescription,
    },
  });

  revalidatePath("/");
  revalidatePath("/books");

  return NextResponse.json({ ok: true, id: created._id }, { status: 201 });
}
