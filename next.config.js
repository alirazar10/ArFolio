/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // 'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
