import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5555",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
