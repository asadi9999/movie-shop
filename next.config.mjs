/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost:3000','moviesapi.ir','jsonplaceholder.typicode.com'],
        formats: ['image/avif', 'image/webp'],
      },

};

export default nextConfig;
