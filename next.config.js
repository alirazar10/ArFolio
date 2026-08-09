/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable X-Powered-By header for security
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
  },

  // Enable React Compiler for better performance
  reactCompiler: true,
};

module.exports = nextConfig;
