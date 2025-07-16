import { RootProvider } from 'fumadocs-ui/provider'
import { Providers } from '@/components/providers'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className='bg-main flex flex-col w-full min-h-screen items-center'>
      <RootProvider>
        <Providers>{children}</Providers>
      </RootProvider>
    </body>
  )
}
