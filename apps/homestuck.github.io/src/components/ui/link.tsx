import * as React from 'react'
import { cn, tw } from '@/lib/utils'

const styles = tw`ring-offset-main focus-visible:outline-hidden focus-visible:ring-accent cursor-pointer hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 decoration-1`

/**
 * Link
 */
function Link({ href, className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot='link'
      href={href}
      className={cn(styles, className)}
      {...props}
    />
  )
}
Link.displayName = 'Link'

export { Link }
