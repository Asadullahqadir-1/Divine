import { createClient } from "next-sanity";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-23";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const hasValidSanityConfig = Boolean(envProjectId && envProjectId !== "YOUR_PROJECT_ID");
export const projectId = envProjectId || "demo123";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

export const previewSanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "previewDrafts",
  token: process.env.SANITY_API_READ_TOKEN,
});
