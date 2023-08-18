/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.ffjr7-1.fna.fbcdn.net",
        port: "",
        pathname: "/v/t51.2885-15/**", // Replace this with the actual pathname
        // pattern for your images
      },
    ],
  },
};

module.exports = nextConfig;
