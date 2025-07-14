import * as React from 'react'
import { format } from 'date-fns'
import { Link } from '@/registry/ui/link'
import { cn, tw } from '@/lib/utils'

const styles = {
  Root: '',
  Item: tw`main-foreground text-xs font-bold font-sans`,
  List: tw`list-none`,
}

type LogItem = {
  title: string
  pageNumber: number | string
  date: string
  href: string | URL
}

function AdventureLog({ items }: { items: LogItem[] }) {
  return (
    <AdventureLogList>
      {items.map(({ title, pageNumber, date, href }) => (
        <AdventureLogItem key={String(pageNumber)}>
          <time dateTime={date}>{format(new Date(date), 'MM/dd/yyyy')}</time>
          <span>{' - '}</span>
          <Link
            href={href}
            className={tw`font-bold text-[blue] decoration-[blue] visited:text-[purple] visited:decoration-[purple]`}>
            "{title}"
          </Link>
        </AdventureLogItem>
      ))}
    </AdventureLogList>
  )
}

function AdventureLogList({
  children,
  className,
  ...props
}: React.ComponentProps<'ol'>) {
  return (
    <ol className={cn(styles.List, className)} {...props}>
      {children}
    </ol>
  )
}

function AdventureLogItem({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li className={cn(styles.Item, className)} {...props}>
      {children}
    </li>
  )
}

export { AdventureLog, AdventureLogList, AdventureLogItem }
