import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Divine Besong Eya",
    short_name: "Divine",
    description:
      "A purpose-led DEI platform with workshops, learning resources, and community engagements for the AI generation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  };
}
