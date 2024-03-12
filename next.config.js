// @ts-check
const { i18n } = require('./next-i18next.config.js') // 1.

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n // 2.
};

module.exports = nextConfig // 3.
