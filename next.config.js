import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  cleanDistDir: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: true,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(config);
