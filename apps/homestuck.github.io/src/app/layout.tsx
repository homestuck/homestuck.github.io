import type { Metadata } from 'next'
import { RootProvider } from 'fumadocs-ui/provider'
import { Providers } from '@/components/providers'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Unofficial Homestuck Collection',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='bg-background flex flex-col w-full min-h-screen items-center'
      suppressHydrationWarning>
      <body>
        <RootProvider>
          <Providers>{children}</Providers>
        </RootProvider>
      </body>
    </html>
  )
}
