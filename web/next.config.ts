import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/about", destination: "/about.html" },
        { source: "/services", destination: "/services.html" },
        { source: "/workshops", destination: "/workshops.html" },
        { source: "/portfolio", destination: "/portfolio.html" },
        { source: "/mentorship", destination: "/mentorship.html" },
        { source: "/insights", destination: "/insights.html" },
        { source: "/contact", destination: "/contact.html" },
      ],
    };
  },
};

export default nextConfig;
