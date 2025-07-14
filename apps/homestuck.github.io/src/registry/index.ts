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
          'breakpoint-sm': '450px',
          'breakpoint-md': '650px',
          'breakpoint-lg': '950px',
          'breakpoint-xl': '1280px',
          'breakpoint-2xl': '1920px',
          'container-3xs': '200px',
          'container-2xs': '325px',
          'container-xs': '450px',
          'container-sm': '525px',
          'container-md': '575px',
          'container-lg': '650px',
          'container-xl': '775px',
          'container-2xl': '850px',
          'container-3xl': '900px',
          'container-4xl': '950px',
          'container-5xl': '1000px',
          'container-6xl': '1050px',
          'container-7xl': '1080px',
          'container-prose': '65ch',
          'font-sans': "'Verdana', sans-serif",
          'font-serif': "'Adobe Garamond Pro', serif",
          'font-mono': "'Courier New', monospace",
          'font-adobe-garamond-pro': "'Adobe Garamond Pro', serif",
          'font-homestuck': "'Homestuck', monospace",
        },
      },
      css: {
        ...utilities,
      },
    },
    ...themes,
    ...lib,
    ...ui,
    ...examples,
  ],
} satisfies Registry
