import { groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage" && _id == "homePage"][0]{
    sections[]{
      ...,
      _type == "servicesSection" => {
        ...,
        services[]->{
          _id,
          title,
          description,
          ctaText,
          ctaLink,
          iconOrImage
        }
      },
      _type == "booksPreviewSection" => {
        ...,
        books[]->{
          _id,
          title,
          slug,
          coverImage,
          featured,
          externalLink
        }
      }
    },
    seo
  }
`;
