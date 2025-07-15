import {
  AdventureLog,
  AdventureLogList,
  AdventureLogItem,
  AdventureLogDatetime,
  AdventureLogLink,
} from '@/registry/components/adventure-log'

const date = new Date(Date.now()).toDateString()
const items = [
  {
    title: '==>',
    date,
    href: '#',
  },
  {
    title: '==>',
    date,
    href: '#',
  },
  {
    title: '==>',
    date,
    href: '#',
  },
]

export default function AdventureLogDemo() {
  return (
    <AdventureLog>
      <AdventureLogList>
        {items.map(({ title, date, href }, index) => (
          <AdventureLogItem key={index}>
            <AdventureLogDatetime dateTime={date} />
            {' - '}
            <AdventureLogLink href={href}>"{title}"</AdventureLogLink>
          </AdventureLogItem>
        ))}
      </AdventureLogList>
    </AdventureLog>
  )
}
