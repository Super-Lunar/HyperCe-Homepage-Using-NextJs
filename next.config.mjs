/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["admin.hyperce.io"],
  },
  env: {
    API_URL: process.env.API_URL, // Exposes `API_URL` to both server and client
  },
};

export default nextConfig;
