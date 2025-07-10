import { type Registry } from 'shadcn/registry'

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
