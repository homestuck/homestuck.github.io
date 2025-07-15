import { type Registry } from 'shadcn/registry'
import 'dotenv/config'

const URL = String(process.env.APP_URL)

export const components: Registry['items'] = [
  {
    name: 'adventure-log',
    type: 'registry:component',
    title: 'Adventure Log',
    dependencies: ['date-fns'],
    registryDependencies: [`${URL}/r/link.json`],
    files: [
      {
        path: 'components/adventure-log.tsx',
        type: 'registry:component',
      },
    ],
  },
]
