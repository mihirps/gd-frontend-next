/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // In production, load CSS/JS from www so they work on bare domain (gemstonediamond.com) too
  ...(process.env.NODE_ENV === 'production' && {
    assetPrefix: 'https://www.gemstonediamond.com',
  }),
  trailingSlash: true,
  redirects() {
    const bareHostRedirect = {
      has: [{ type: "host", value: "gemstonediamond.com" }],
      permanent: true,
    };
    return [
      {
        source: "/",
        ...bareHostRedirect,
        destination: "https://www.gemstonediamond.com/",
      },
      {
        source: "/:path*",
        ...bareHostRedirect,
        destination: "https://www.gemstonediamond.com/:path*",
      },
    ];
  },

  async rewrites() {
    const isProd = process.env.NODE_ENV === 'production';
    const backend =
      process.env.BACKEND_URL ||
      (isProd
        ? process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.gemstonediamond.com'
        : 'http://localhost:4000');

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
        source: '/api/request/manufacturing',
        destination: `${backend}/api/request/manufacturing`,
      },
      {
        source: '/api/request/diamond',
        destination: `${backend}/api/request/diamond`,
      },
      {
        source: '/api/request/gemstone',
        destination: `${backend}/api/request/gemstone`,
      },
      {
        source: '/api/request/cutting',
        destination: `${backend}/api/request/cutting`,
      },
      {
        source: '/api/request/design',
        destination: `${backend}/api/request/design`,
      },
      {
        source: '/api/request/retail',
        destination: `${backend}/api/request/retail`,
      },
      
    ];
  },
};

export default nextConfig;
