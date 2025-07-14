import { type Registry } from 'shadcn/registry'
import { lib } from './registry-lib'
import { themes } from './registry-themes'
import { ui } from './registry-ui'
import { examples } from './registry-examples'
import { colors } from './style-colors'
import { utilities } from './style-utilities'

import 'dotenv/config'
const URL = String(process.env.APP_URL)

export const registry = {
  name: 'homestuck',
  homepage: URL,
  items: [
    {
      extends: 'none',
      name: 'index',
      type: 'registry:style',
      dependencies: [
        'class-variance-authority',
        'clsx',
        'lucide-react',
        'tailwind-merge',
      ],
      registryDependencies: [
        `${URL}/r/utils.json`,
        `${URL}/r/theme-dirk.json`,
        `${URL}/r/theme-dark.json`,
        `${URL}/r/theme-default.json`,
      ],
      files: [],
      cssVars: {
        theme: {
          'font-sans': "'Verdana', sans-serif",
          'font-serif': "'Adobe Garamond Pro', serif",
          'font-mono': "'Courier New', monospace",
          'font-adobe-garamond-pro': "'Adobe Garamond Pro', serif",
          'font-homestuck': "'Homestuck', monospace",
        },
      },
      css: {
        ':root': {
          ...colors,
        },
        ...utilities,
      },
    },
    ...themes,
    ...lib,
    ...ui,
    ...examples,
  ],
} satisfies Registry
