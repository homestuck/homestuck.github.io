import { type Registry } from 'shadcn/registry'

const URL = 'https://homestuck.github.io'

export const examples: Registry['items'] = [
  {
    name: 'button-demo',
    type: 'registry:example',
    registryDependencies: [`${URL}/r/button.json`],
    files: [
      {
        path: 'examples/button-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
]
