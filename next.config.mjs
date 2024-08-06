/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "promising-compassion-0fae3cab90.media.strapiapp.com",
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

