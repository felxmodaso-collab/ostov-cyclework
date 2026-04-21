/** @type {import('next').NextConfig} */
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  output: isGhPages ? 'export' : undefined,
  basePath: isGhPages ? '/ostov-cyclework' : '',
  assetPrefix: isGhPages ? '/ostov-cyclework/' : '',
  trailingSlash: isGhPages,
  images: { unoptimized: isGhPages },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? '/ostov-cyclework' : ''
  },
  experimental: {
    optimizePackageImports: ['gsap', 'three']
  }
};

export default nextConfig;
