import { hasValidSanityConfig, sanityClient } from "@/lib/sanity/client";
import { BLOG_POST_BY_SLUG_QUERY, BLOG_QUERY, BOOKS_QUERY, MENTORSHIP_QUERY, SERVICES_QUERY, SETTINGS_QUERY } from "@/lib/sanity/queries/content";
import { HOME_PAGE_QUERY } from "@/lib/sanity/queries/home";
import { aboutDetails, aboutSummary, blogPosts, books, contact, mentorshipPrograms, mission, services, vision } from "@/data/fallback";
import { getLocalBooks } from "@/lib/localBooksStore";

type SanityBook = {
  title: string;
  slug?: { current?: string };
  externalLink?: string;
  featured?: boolean;
  description?: unknown;
  coverImageUrl?: string;
  imageAlt?: string;
  price?: number;
  pdfUrl?: string;
};

type SanityProgram = {
  title: string;
  type: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

type SanityService = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

type SanityBlog = {
  title: string;
  slug?: { current?: string };
  author?: string;
  publishedAt?: string;
  content?: unknown;
};

type SanityAbout = {
  fullBiography?: unknown;
  keyHighlights?: string[];
  leadershipPhilosophy?: string;
  specialization?: string;
  focusAreas?: string[];
};

function extractText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .flatMap((block: any) => (Array.isArray(block?.children) ? block.children : []))
    .map((child: any) => child?.text || "")
    .join(" ")
    .trim();
}

export async function getHomeData() {
  if (!hasValidSanityConfig) {
    return { mission, vision };
  }

  try {
    const home = await sanityClient.fetch<any>(HOME_PAGE_QUERY);
    if (!home?.sections) throw new Error("No home sections");

    const missionSection = home.sections.find((section: any) => section._type === "missionVisionSection");
    return {
      mission: missionSection?.mission || mission,
      vision: missionSection?.vision || vision,
    };
  } catch {
    return { mission, vision };
  }
}

export async function getAboutData() {
  if (!hasValidSanityConfig) {
    return {
      biography: `${aboutSummary} ${aboutDetails}`,
      keyHighlights: [
        "Strategic foresight and crisis navigation for organizations and individuals.",
        "Building workplaces where every voice leads and every talent thrives.",
        "Four books spanning leadership, resilience, and human transformation.",
      ],
      leadershipPhilosophy:
        "Lead from the inside out with purpose, resilience, and authentic human values.",
      specialization: "Risk Management",
      focusAreas: ["Impact", "Resilience", "Inclusion"],
    };
  }

  try {
    const about = await sanityClient.fetch<SanityAbout>(
      `*[_type == "aboutPage" && _id == "aboutPage"][0]{fullBiography,keyHighlights,leadershipPhilosophy,specialization,focusAreas}`
    );
    if (!about) throw new Error("No about data");

    return {
      biography: extractText(about.fullBiography) || `${aboutSummary} ${aboutDetails}`,
      keyHighlights: about.keyHighlights?.length ? about.keyHighlights : [
        "Strategic foresight and crisis navigation for organizations and individuals.",
        "Building workplaces where every voice leads and every talent thrives.",
        "Four books spanning leadership, resilience, and human transformation.",
      ],
      leadershipPhilosophy:
        about.leadershipPhilosophy ||
        "Lead from the inside out with purpose, resilience, and authentic human values.",
      specialization: about.specialization || "Risk Management",
      focusAreas: about.focusAreas?.length ? about.focusAreas : ["Impact", "Resilience", "Inclusion"],
    };
  } catch {
    return {
      biography: `${aboutSummary} ${aboutDetails}`,
      keyHighlights: [
        "Strategic foresight and crisis navigation for organizations and individuals.",
        "Building workplaces where every voice leads and every talent thrives.",
        "Four books spanning leadership, resilience, and human transformation.",
      ],
      leadershipPhilosophy:
        "Lead from the inside out with purpose, resilience, and authentic human values.",
      specialization: "Risk Management",
      focusAreas: ["Impact", "Resilience", "Inclusion"],
    };
  }
}

export async function getBooks() {
  if (!hasValidSanityConfig) {
    try {
      const localBooks = await getLocalBooks();
      if (localBooks.length > 0) return localBooks;
    } catch {
      // Fall back to bundled static data if local store is unavailable.
    }
    return books;
  }

  try {
    const data = await sanityClient.fetch<SanityBook[]>(BOOKS_QUERY);
    if (!Array.isArray(data) || data.length === 0) throw new Error("No books");

    return data.map((item) => ({
      title: item.title,
      slug: item.slug?.current || item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      description: extractText(item.description) || "Book description to be added.",
      externalLink: item.externalLink || "https://example.com",
      featured: Boolean(item.featured),
      coverImageUrl: item.coverImageUrl || "",
      imageAlt: item.imageAlt || item.title,
      price: item.price || null,
      pdfUrl: item.pdfUrl || "",
    }));
  } catch {
    try {
      const localBooks = await getLocalBooks();
      if (localBooks.length > 0) return localBooks;
    } catch {
      // Fall back to bundled static data if local store is unavailable.
    }
    return books;
  }
}

export async function getServices() {
  if (!hasValidSanityConfig) {
    return services;
  }

  try {
    const data = await sanityClient.fetch<SanityService[]>(SERVICES_QUERY);
    if (!Array.isArray(data) || data.length === 0) throw new Error("No services");
    return data;
  } catch {
    return services;
  }
}

export async function getMentorshipPrograms() {
  if (!hasValidSanityConfig) {
    return mentorshipPrograms;
  }

  try {
    const data = await sanityClient.fetch<SanityProgram[]>(MENTORSHIP_QUERY);
    if (!Array.isArray(data) || data.length === 0) throw new Error("No programs");
    return data;
  } catch {
    return mentorshipPrograms;
  }
}

export async function getBlogPosts() {
  if (!hasValidSanityConfig) {
    return blogPosts;
  }

  try {
    const data = await sanityClient.fetch<SanityBlog[]>(BLOG_QUERY);
    if (!Array.isArray(data) || data.length === 0) throw new Error("No blogs");

    return data.map((post) => ({
      title: post.title,
      slug: post.slug?.current || post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      excerpt: extractText(post.content).slice(0, 160) || "Article excerpt will be available soon.",
      author: post.author || "Divine Besong Eya",
      publishedAt: post.publishedAt || new Date().toISOString().slice(0, 10),
      content: extractText(post.content) || "Article content coming soon.",
    }));
  } catch {
    return blogPosts;
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!hasValidSanityConfig) {
    return blogPosts.find((item) => item.slug === slug) || null;
  }

  try {
    const post = await sanityClient.fetch<SanityBlog>(BLOG_POST_BY_SLUG_QUERY, { slug });
    if (!post?.title) throw new Error("No blog by slug");
    return {
      title: post.title,
      slug: post.slug?.current || slug,
      excerpt: extractText(post.content).slice(0, 160),
      author: post.author || "Divine Besong Eya",
      publishedAt: post.publishedAt || new Date().toISOString().slice(0, 10),
      content: extractText(post.content) || "Article content coming soon.",
    };
  } catch {
    return blogPosts.find((item) => item.slug === slug) || null;
  }
}

export async function getSettingsData() {
  if (!hasValidSanityConfig) {
    return { contact, site: null };
  }

  try {
    const data = await sanityClient.fetch<any>(SETTINGS_QUERY);
    return {
      contact: data?.contact || contact,
      site: data?.site || null,
    };
  } catch {
    return { contact, site: null };
  }
}
