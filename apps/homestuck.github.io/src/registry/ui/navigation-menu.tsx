'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import { cn, cva, tw, type ClassValue } from '@/lib/utils'
import { Link } from '@/registry/ui/link'

const styles = {
  Menu: cva(
    tw`relative z-10 flex max-w-max flex-1 items-center justify-center`
  ),
  List: cva(tw`group flex flex-1 list-none items-center justify-center`),
  Item: cva(tw`px-1`),
  Trigger: cva(
    tw`hover:saturate-95 data-[state=open]:saturate-95 group inline-flex w-max items-center justify-center transition-colors hover:brightness-110 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:brightness-110`
  ),
  TriggerIcon: cva(
    tw`relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180`
  ),
  Content: cva(
    tw`data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 left-0 top-0 w-full md:absolute md:w-auto`
  ),
  ViewportContainer: cva(tw`absolute left-0 top-full flex justify-center`),
  Viewport: cva(
    tw`origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 rounded-base border-border relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border md:w-[var(--radix-navigation-menu-viewport-width)]`
  ),
  Link: ({ className }: { className: ClassValue }) => className,
}

/**
 * NavigationMenu
 */
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: NavigationMenuPrimitive.NavigationMenuProps & {
  ref?: React.RefObject<HTMLElement | null>
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot='navigation-menu'
      data-viewport={viewport}
      className={cn(styles.Menu({ className }))}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

/**
 * NavigationMenu.List
 */
function NavigationMenuList({
  className,
  ...props
}: NavigationMenuPrimitive.NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      data-slot='navigation-menu-list'
      className={cn(styles.List({ className }))}
      {...props}
    />
  )
}

/**
 * NavigationMenu.Item
 */
function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuPrimitive.NavigationMenuItemProps) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot='navigation-menu-item'
      className={cn(styles.Item({ className }))}
      {...props}
    />
  )
}

/**
 * NavigationMenu.TriggerIcon
 */
function NavigationMenuTriggerIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGSVGElement>) {
  return (
    <ChevronDown className={cn(styles.TriggerIcon({ className }))} {...props} />
  )
}

/**
 * NavigationMenu.Trigger
 */
function NavigationMenuTrigger({
  className,
  children,
  icon = <NavigationMenuTriggerIcon />,
  ...props
}: NavigationMenuPrimitive.NavigationMenuTriggerProps & {
  icon?: React.ReactNode
}) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot='navigation-menu-trigger'
      className={cn(styles.Trigger({ className }))}
      {...props}>
      {children} {icon}
    </NavigationMenuPrimitive.Trigger>
  )
}

/**
 * NavigationMenu.Content
 */
function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.NavigationMenuContentProps) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot='navigation-menu-content'
      className={cn(styles.Content({ className }))}
      {...props}
    />
  )
}

/**
 * NavigationMenu.Link
 */
function NavigationMenuLink({
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link> &
  Pick<NavigationMenuPrimitive.NavigationMenuLinkProps, 'asChild'>) {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <NavigationMenuPrimitive.Link asChild active={isActive}>
      <Link href={href} className={cn(styles.Link({ className }))} {...props} />
    </NavigationMenuPrimitive.Link>
  )
}

/**
 * NavigationMenu.Viewport
 */
function NavigationMenuViewport({
  className,
  ...props
}: NavigationMenuPrimitive.NavigationMenuViewportProps) {
  return (
    <div className={cn(styles.ViewportContainer())}>
      <NavigationMenuPrimitive.Viewport
        data-slot='navigation-menu-viewport'
        className={styles.Viewport({ className })}
        {...props}
      />
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuTriggerIcon,
  NavigationMenuLink,
  NavigationMenuViewport,
}
