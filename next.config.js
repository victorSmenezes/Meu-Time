/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-4.api-sports.io',
        port: '',
        pathname: '/football/teams/**',
      },
      {
        protocol: 'https',
        hostname: 'media-4.api-sports.io',
        port: '',
        pathname: '/football/players/**',
      },
    ]
  }
};
