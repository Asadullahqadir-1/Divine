export type AdminBookPayload = {
  title?: string;
  slug?: string;
  description?: string;
  externalLink?: string;
  featured?: boolean;
  imageAssetId?: string;
  imageAlt?: string;
  price?: string;
  pdfAssetId?: string;
};

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

export function toPortableText(description: string) {
  return [
    {
      _type: "block",
      style: "normal",
      children: [{ _type: "span", marks: [], text: description.trim() }],
    },
  ];
}

export function toMetaDescription(rawDescription: string) {
  const value = rawDescription.trim();
  if (value.length >= 50) return value.slice(0, 160);
  const suffix = " by Divine Besong Eya. Leadership and resilience insights.";
  return `${value}${suffix}`.slice(0, 160);
}

export function extractPortableTextText(blocks: unknown) {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .flatMap((block: any) => (Array.isArray(block?.children) ? block.children : []))
    .map((child: any) => child?.text || "")
    .join(" ")
    .trim();
}

export function validateBookPayload(payload: AdminBookPayload, options?: { requireImage?: boolean }) {
  const title = payload.title?.trim() || "";
  const description = payload.description?.trim() || "";
  const externalLink = payload.externalLink?.trim() || "";
  const imageAssetId = payload.imageAssetId?.trim() || "";
  const imageAlt = payload.imageAlt?.trim() || "";
  const price = payload.price?.trim() || "";

  if (!title) return "Title is required.";
  if (!description) return "Description is required.";
  if (!externalLink) return "External link is required.";
  if (options?.requireImage && !imageAssetId) return "Cover image is required.";
  if (options?.requireImage && !imageAlt) return "Image alt text is required.";

  if (price) {
    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum < 0) {
      return "Price must be a valid positive number.";
    }
  }

  try {
    new URL(externalLink);
  } catch {
    return "External link must be a valid absolute URL.";
  }

  return null;
}
