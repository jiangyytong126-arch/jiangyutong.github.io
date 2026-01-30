/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  // GitHub Pages 必须用完整 URL 加载静态资源，否则 CSS/JS 会 404
  assetPrefix: isProd ? 'https://jiangyytong126-arch.github.io' : '',
  basePath: '',
};

export default nextConfig;

