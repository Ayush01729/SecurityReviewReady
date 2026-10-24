import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "SecurityReviewReady";
const isUserSite = repoName.toLowerCase().endsWith(".github.io");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (repoName && !isUserSite ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
