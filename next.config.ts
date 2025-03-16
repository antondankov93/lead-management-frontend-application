import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
