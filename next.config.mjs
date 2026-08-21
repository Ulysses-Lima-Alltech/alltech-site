/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/shomer', destination: 'https://shomer-amber.vercel.app/shomer' },
      { source: '/shomer/:path*', destination: 'https://shomer-amber.vercel.app/shomer/:path*' },
      ];
  },
};

export default nextConfig;
