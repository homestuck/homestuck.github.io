import type { NextConfig } from 'next'
// import { createMDX } from 'fumadocs-mdx/next'

// const withMDX = createMDX()

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // basePath: process.env.BASE_PATH,
  // assetPrefix: process.env.ASSET_PREFIX,
}

export default nextConfig

// export default withMDX(nextConfig)
