/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const backend =
      process.env.BACKEND_URL ||
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      'http://localhost:4000';

    return [
      // Proxy uploads so backend can return `/uploads/...` URLs
      {
        source: '/uploads/:path*',
        destination: `${backend}/uploads/:path*`,
      },

      // Proxy API routes that live on the backend
      // (keep `/api/admin/*` for Next.js route handlers)
      {
        source: '/api/requests',
        destination: `${backend}/api/requests`,
      },
      {
        source: '/api/contact',
        destination: `${backend}/api/contact`,
      },
      {
        source: '/api/custom-diamond',
        destination: `${backend}/api/custom-diamond`,
      },
      {
        source: '/api/custom-jewelry',
        destination: `${backend}/api/custom-jewelry`,
      },
      {
        source: '/api/request/:path*',
        destination: `${backend}/api/request/:path*`,
      },

      // Optional health endpoints
      {
        source: '/health',
        destination: `${backend}/health`,
      },
      {
        source: '/ready',
        destination: `${backend}/ready`,
      },
    ];
  },
};

export default nextConfig;
