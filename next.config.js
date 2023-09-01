/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["zanwwduqspdzzgkgqsmz.supabase.co"],
  },
};

module.exports = nextConfig;
