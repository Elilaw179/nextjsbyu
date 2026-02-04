import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Explicitly set turbopack root to this workspace so builds (including Vercel)
  // don't accidentally infer an outer workspace root when multiple lockfiles
  // are present on the system.
  // @ts-ignore - `turbopack` may not be present in the NextConfig type yet.
  turbopack: {
    root: './',
  },
};

export default nextConfig;
