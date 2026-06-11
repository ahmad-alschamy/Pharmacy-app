import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  allowedDevOrigins: ['0.0.0.0']  // نحتفظ بهذا
};

export default withNextIntl(nextConfig);
