import { type Registry } from 'shadcn/registry'

export const lib: Registry['items'] = [
  {
    name: 'utils',
    type: 'registry:lib',
    dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
    files: [{ path: 'lib/utils.ts', type: 'registry:lib' }],
  },
]
