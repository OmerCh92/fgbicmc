/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables fully static HTML/CSS/JS export
  images: {
    unoptimized: true, // Required for static export
  },
};
export default nextConfig;