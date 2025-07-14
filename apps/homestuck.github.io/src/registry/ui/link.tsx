import * as React from 'react'
import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'
import { cn, cva, tw } from '@/lib/utils'

const linkStyles = cva(
  tw`ring-offset-main focus-visible:outline-hidden focus-visible:ring-primary cursor-pointer hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2  decoration-1`
)

/**
 * Link
 */
function Link({
  href,
  className,
  ...props
}: NextLinkProps & Omit<React.ComponentProps<'a'>, 'href'>) {
  return (
    <NextLink
      data-slot='link'
      href={href}
      className={cn(linkStyles({ className }))}
      {...props}
    />
  )
}
Link.displayName = 'Link'

export { Link, linkStyles }
