import * as React from 'react'
import { Slot } from 'radix-ui'
import { tw, cva, type VariantProps, cn } from '@/lib/utils'

const buttonStyles = cva(
  tw`rounded-base font-homestuck focus-visible:outline-hidden focus-visible:ring-primary hover:not-disabled:cursor-pointer hover:not-disabled:saturate-95 hover:not-disabled:brightness-110 ring-offset-main inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 text-base uppercase antialiased transition-all will-change-auto focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: tw`border-primary-border border-t-primary-border/50 border-l-primary-border/50 bg-primary text-primary-foreground text-shadow-primary-border active:not-disabled:border-primary-border/50 active:not-disabled:border-t-primary-border active:not-disabled:border-l-primary-border shadow-primary-border`,
        secondary: tw`border-secondary-border border-t-secondary-border/50 border-l-secondary-border/50 bg-secondary text-secondary-foreground text-shadow-secondary-border active:not-disabled:border-secondary-border/50 active:not-disabled:border-t-secondary-border active:not-disabled:border-l-secondary-border shadow-secondary-border`,
        destructive: tw`border-destructive-border border-t-destructive-border/50 border-l-destructive-border/50 bg-destructive text-destructive-foreground text-shadow-destructive-border active:not-disabled:border-destructive-border/50 active:not-disabled:border-t-destructive-border active:not-disabled:border-l-destructive-border shadow-destructive-border`,
        outline: tw`text-foreground border-border border-t-border/50 border-l-border/50 text-shadow-background active:not-disabled:border-border/50 active:not-disabled:border-t-border active:not-disabled:border-l-border shadow-border bg-transparent`,
      },
      size: {
        default: tw`h-10 px-3 py-2`,
        sm: tw`h-8 p-2`,
        lg: tw`h-12 p-4`,
        icon: tw`aspect-square`,
      },
      extrude: {
        true: tw`hover:not-disabled:not-active:not-focus-visible:shadow-extrude-base text-shadow-extrude-base hover:not-disabled:not-active:not-focus-visible:-translate-[2px] shadow-none`,
        false: null,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      extrude: true,
    },
  }
)

/**
 * Button
 */
function Button({
  className,
  variant,
  size,
  extrude,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot='button'
      className={cn(buttonStyles({ variant, size, extrude, className }))}
      {...props}
    />
  )
}
Button.displayName = 'Button'

export { Button, buttonStyles }
