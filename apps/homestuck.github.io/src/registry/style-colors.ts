import { type Registry } from 'shadcn/registry'
import 'dotenv/config'
const URL = String(process.env.APP_URL)

export const colors: Registry['items'] = [
  {
    name: 'colors/index',
    type: 'registry:item',
    extends: 'none',
    files: [
      {
        path: 'styles/colors.css',
        type: 'registry:file',
        target: 'styles/colors.css',
      },
    ],
  },
]
