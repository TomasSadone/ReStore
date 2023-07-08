/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID:
      '526949457450-l4ik6plsg5up6ar09co4lcda0l3j36ff.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_URL_INTERNAL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'dPmTCswUFo6w6Xr0XufjUCq0jU8QuZhBZRktZTVruj8=',
    GITHUB_ID: '9be415a33af95f31745b',
    GITHUB_SECRET: 'e6348e9089477b34763431b3a814089f77661071',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagekit.androidphoria.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 's3.studytonight.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        port: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
