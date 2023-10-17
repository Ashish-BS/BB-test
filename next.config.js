/** @type {import('next').NextConfig} */
const NODE_ENV = process.env.NODE_ENV;
const headers = require("./src/lib/headers");
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  // sassOptions: {
  // 	includePaths: [path.join(__dirname, 'styles')]
  // },
  async rewrites() {
    return [
      { source: "/careers", destination: "/career" },
      { source: "/solutions", destination: "/" },
      { source: "/product", destination: "/case-study/campusby" },
      { source: "/why-us", destination: "/about-us" },
      { source: "/our-expertise", destination: "/case-study" },
      { source: "/case-study/myc", destination: "/case-study/my-candidature" },
      {
        source: "/case-study/psh",
        destination: "/case-study/planet-superheroes",
      },
      {
        source: "/case-study/australian-tree",
        destination: "/case-study/australian-tree-id",
      },
      {
        source: "/openings/windows-active-directory-bs-58-1",
        destination: "/openings/specialist-windows-active-directory-bs-58-1",
      },
    ];
  },
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
