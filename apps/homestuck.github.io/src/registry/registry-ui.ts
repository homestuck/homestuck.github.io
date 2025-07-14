import { type Registry } from 'shadcn/registry'
import 'dotenv/config'

const URL = String(process.env.APP_URL)

export const ui: Registry['items'] = [
  {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    dependencies: ['radix-ui'],
    registryDependencies: [],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
]
