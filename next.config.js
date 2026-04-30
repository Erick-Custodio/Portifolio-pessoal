const repo = 'Portifolio-pessoal';
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'api.microlink.io' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'www.setebarbeariaprotesecapilar.com' },
    ],
  },
};

module.exports = nextConfig;
