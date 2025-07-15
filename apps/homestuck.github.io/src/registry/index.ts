import { type Registry } from 'shadcn/registry'
import { lib } from './registry-lib'
import { themes } from './registry-themes'
import { ui } from './registry-ui'
import { examples } from './registry-examples'
import { colors } from './style-colors'
import { utilities } from './style-utilities'
import { components } from './registry-components'

import 'dotenv/config'
const URL = String(process.env.APP_URL)

export const registry = {
  name: 'homestuck',
  homepage: URL,
  items: [
    {
      extends: 'none',
      name: 'index',
      description: '',
      author: 'Kohi <kohi@homestuck.com>',
      type: 'registry:style',
      dependencies: [
        'class-variance-authority',
        'clsx',
        'lucide-react',
        'tailwind-merge',
      ],
      registryDependencies: [
        `${URL}/r/utils.json`,
        `${URL}/r/themes/default.json`,
        // `${URL}/r/themes/dirk.json`,
      ],
      files: [],
      css: {
        ...utilities,
      },
    },
    ...colors,
    ...themes,
    ...lib,
    ...ui,
    ...components,
    ...examples,
  ],
} satisfies Registry
