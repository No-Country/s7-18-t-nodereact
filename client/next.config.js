/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'www.gravatar.com',
      'lh3.googleusercontent.com',
      'ik.imagekit.io',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
