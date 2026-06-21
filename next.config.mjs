/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  basePath: isGithubPages ? '/ravipajiyar-portfolio' : '',
  assetPrefix: isGithubPages ? '/ravipajiyar-portfolio/' : '',

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;