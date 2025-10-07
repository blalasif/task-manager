/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true, // keep turbopack
    css: false, // use webpack for css
  },
};
export default nextConfig;
