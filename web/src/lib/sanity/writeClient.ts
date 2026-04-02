import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, hasValidSanityConfig, projectId } from "@/lib/sanity/client";

const writeToken = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN;

export function hasValidSanityWriteConfig() {
  return Boolean(hasValidSanityConfig && writeToken);
}

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: writeToken,
});
