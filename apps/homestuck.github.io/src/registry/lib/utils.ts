import { extendTailwindMerge, validators } from 'tailwind-merge'
import type { ClassValue } from 'clsx'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      shadow: [
        {
          shadow: [
            'none',
            'extrude-sm',
            'extrude-base',
            'extrude-lg',
            'extrude-xl',
            'outline',
          ],
        },
      ],
      'shadow-color': [
        {
          shadow: [validators.isArbitraryVariable, validators.isArbitraryValue],
        },
      ],
      'text-shadow': [
        {
          'text-shadow': [
            'none',
            'extrude-sm',
            'extrude-base',
            'extrude-lg',
            'extrude-xl',
            'outline',
            validators.isArbitraryVariableShadow,
            validators.isArbitraryShadow,
          ],
        },
      ],
      'text-shadow-color': [
        {
          'text-shadow': [validators.isAny],
        },
      ],
    },
  },
})

const tw = (
  template: {
    raw: readonly string[] | ArrayLike<string>
  },
  ...substitutions: any[]
) => String.raw(template, substitutions)

const cn = (...inputs: ClassValue[]) => twMerge(cx(inputs))

export { cva, cx, cn, tw }
export type { ClassValue, VariantProps }
