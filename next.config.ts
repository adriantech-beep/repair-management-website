/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swmoajnxellgeuyiwefs.supabase.co",
        pathname: "/storage/v1/object/public/company-logo/**",
      },
    ],
  },
};

export default nextConfig;
