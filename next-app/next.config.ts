import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repoName?.toLowerCase().endsWith(".github.io");

const basePath = isDev
  ? ""
  : (process.env.NEXT_PUBLIC_BASE_PATH ?? ((isGitHubActions && repoName && !isUserSite) ? `/${repoName}` : "/SecurityReviewReady"));

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
