import { groq } from "next-sanity";

export const ABOUT_PAGE_QUERY = groq`
  *[_type == "aboutPage" && _id == "aboutPage"][0]{
    fullBiography,
    image,
    keyHighlights,
    leadershipPhilosophy,
    isMbaCandidate,
    specialization,
    focusAreas,
    seo
  }
`;

export const BOOKS_QUERY = groq`
  *[_type == "book"] | order(featured desc, _createdAt desc){
    _id,
    title,
    slug,
    description,
    "coverImageUrl": coverImage.asset->url,
    "imageAlt": coverImage.alt,
    externalLink,
    featured,
    price,
    "pdfUrl": pdf.asset->url,
    seo
  }
`;

export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(_createdAt desc){
    _id,
    title,
    description,
    iconOrImage,
    ctaText,
    ctaLink,
    seo
  }
`;

export const MENTORSHIP_QUERY = groq`
  *[_type == "mentorshipProgram"] | order(_createdAt desc){
    _id,
    title,
    description,
    type,
    image,
    ctaText,
    ctaLink,
    seo
  }
`;

export const BLOG_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    featuredImage,
    author,
    publishedAt,
    seo
  }
`;

export const BLOG_POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    featuredImage,
    content,
    author,
    publishedAt,
    seo
  }
`;

export const SETTINGS_QUERY = groq`
  {
    "contact": *[_type == "contactSettings" && _id == "contactSettings"][0],
    "site": *[_type == "siteSettings" && _id == "siteSettings"][0]
  }
`;
