import { type Registry } from 'shadcn/registry'
import { lib } from './registry-lib'
import { themes } from './registry-themes'
import { ui } from './registry-ui'
import { examples } from './registry-examples'
import { colors } from './style-colors'
import { utilities } from './style-utilities'

const URL = 'https://homestuck.github.io'

export const registry = {
  name: 'grist',
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
        `${URL}/r/theme-default.json`,
        `${URL}/r/theme-dark.json`,
        `${URL}/r/theme-dirk.json`,
        `${URL}/r/utils.json`,
      ],
      files: [],
      cssVars: {
        theme: {
          'font-sans': "'Verdana', sans-serif",
          'font-serif': "'Adobe Garamond Pro', serif",
          'font-mono': "'Courier New', monospace",
          'font-adobe-garamond-pro': "'Adobe Garamond Pro', serif",
          'font-homestuck': "'Homestuck', monospace",
          ...colors,
        },
      },
      css: {
        ...utilities,
      },
    },
    ...lib,
    ...themes,
    ...ui,
    ...examples,
  ],
} satisfies Registry
