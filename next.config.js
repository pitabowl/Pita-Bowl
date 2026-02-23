/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.BUILD_FOR_GODADDY === "1" && { output: "export" }),
  images: {
    ...(process.env.BUILD_FOR_GODADDY === "1" && { unoptimized: true }),
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.google.com" },
    ],
  },
};

module.exports = nextConfig;
