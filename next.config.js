/** @type {import('next').NextConfig} */
const NODE_ENV = process.env.NODE_ENV;
const headers = require("./src/lib/headers");
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,

  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
      process.env.NEXT_PUBLIC_BLOG_IMAGES_DOMAIN,
    ],
  },
  // publicRuntimeConfig: {
  //   // Will be available on both server and client
  //   staticFolder: '/static',
  // },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  compiler: {
    removeConsole: NODE_ENV === "production" ? true : false,
  },
  compress: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  env: {
    APP_ENV: NODE_ENV,
  },
  // This is removed because we have used our custom route transition
  // animation which doesn't work with scroll restoration feature
  // of NEXT.JS
  // experimental: {
  // 	scrollRestoration: false
  // }

  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
  // distDir: "build",
};

module.exports = nextConfig;
