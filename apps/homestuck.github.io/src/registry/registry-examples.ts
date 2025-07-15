import { type Registry } from 'shadcn/registry'
import 'dotenv/config'

const URL = String(process.env.APP_URL)

export const examples: Registry['items'] = [
  {
    name: 'examples/adventure-log-demo',
    type: 'registry:example',
    registryDependencies: [`${URL}/r/adventure-log.json`],
    files: [
      {
        path: 'examples/adventure-log-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'examples/button-demo',
    type: 'registry:example',
    registryDependencies: [`${URL}/r/button.json`],
    files: [
      {
        path: 'examples/button-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'examples/button-secondary',
    type: 'registry:example',
    registryDependencies: [`${URL}/r/button.json`],
    files: [
      {
        path: 'examples/button-secondary.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'examples/button-destructive',
    type: 'registry:example',
    registryDependencies: [`${URL}/r/button.json`],
    files: [
      {
        path: 'examples/button-destructive.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'examples/button-outline',
    type: 'registry:example',
    registryDependencies: [`${URL}/r/button.json`],
    files: [
      {
        path: 'examples/button-outline.tsx',
        type: 'registry:example',
      },
    ],
  },
]
