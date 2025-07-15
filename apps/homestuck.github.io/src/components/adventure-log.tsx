import * as React from 'react'
import { format as dfnsFormat } from 'date-fns'
import { cn, tw } from '@/lib/utils'
import { Link } from '@/components/ui/link'

const styles = {
  Root: tw`text-foreground`,
  Item: tw`main-foreground text-xs font-bold font-sans`,
  List: tw`list-none`,
  Link: tw`font-bold text-[blue] decoration-[blue] visited:text-[purple] visited:decoration-[purple]`,
}

function AdventureLog({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role='navigation'
      aria-label='adventure-log'
      data-slot='adventure-log'
      className={cn(styles.Root, className)}
      {...props}
    />
  )
}

function AdventureLogList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot='adventure-log-list'
      className={cn(styles.List, className)}
      {...props}
    />
  )
}

function AdventureLogItem({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot='adventure-log-item'
      className={cn(styles.Item, className)}
      {...props}>
      {children}
    </li>
  )
}

function AdventureLogDatetime({
  dateTime,
  format = 'MM/dd/yyyy',
  ...props
}: React.ComponentProps<'time'> & { format?: string }) {
  return (
    <time data-slot='adventure-log-datetime' dateTime={dateTime} {...props}>
      {dfnsFormat(new Date(String(dateTime)), format)}
    </time>
  )
}

function AdventureLogLink({
  className,
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot='adventure-log-link'
      href={href}
      className={cn(styles.Link, className)}
      {...props}
    />
  )
}

export {
  AdventureLog,
  AdventureLogList,
  AdventureLogItem,
  AdventureLogDatetime,
  AdventureLogLink,
}
