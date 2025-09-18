import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        hostname: "unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.pexels.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "localhost",
        protocol: "http",
        port: "3000",
      },
      {
        hostname: "localhost",
        protocol: "https",
        port: "",
      },
      {
        hostname: "cdn.pixabay.com",
        protocol: "https",
        port: "",
      },
      { hostname: "encrypted-tbn0.gstatic.com", protocol: "https", port: "" },
      { hostname: "lh3.googleusercontent.com", protocol: "https", port: "" },
    ],
  },
};

export default nextConfig;
