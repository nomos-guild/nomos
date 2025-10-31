import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure the project root is this directory to avoid multi-lockfile warnings
    root: __dirname,
  },
};

export default nextConfig;
