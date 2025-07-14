import { type Registry } from 'shadcn/registry'
import 'dotenv/config'

const URL = String(process.env.APP_URL)

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
