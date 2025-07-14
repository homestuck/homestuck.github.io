import type { NextConfig } from 'next'
import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // assetPrefix: process.env.ASSET_PREFIX,
  // basePath: process.env.BASE_PATH,
}

export default withMDX(nextConfig)
