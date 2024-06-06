/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
