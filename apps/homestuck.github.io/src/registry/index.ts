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
        `${URL}/r/colors/index.json`,
        `${URL}/r/theme-default.json`,
        `${URL}/r/theme-dark.json`,
        `${URL}/r/theme-dirk.json`,
        `${URL}/r/utils.json`,
      ],
      files: [],
      css: {
        "@import './colors.css'": {},
        ...utilities,
      },
    },
    ...colors,
    ...lib,
    ...themes,
    ...ui,
    ...examples,
  ],
} satisfies Registry
