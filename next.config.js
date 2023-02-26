/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZED === 'true' ? true : false,
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;