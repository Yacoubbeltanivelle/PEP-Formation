import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/PEP-Formation" : "",
  assetPrefix: isProd ? "/PEP-Formation/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
