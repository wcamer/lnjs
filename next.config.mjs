// /** @type {import('next').NextConfig} */

// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
 
const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
  };
   
  module.exports = nextConfig;