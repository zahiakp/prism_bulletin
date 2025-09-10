/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "source-map";
    }
    return config;
  },
  images: {
    domains: ["projects.abaqas.in","localhost"], 
  },
};

export default nextConfig;
