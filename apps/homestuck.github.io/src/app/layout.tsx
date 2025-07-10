import type { Metadata } from 'next'
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
    <html lang='en' className='bg-background flex flex-col w-full min-h-screen items-center'>
      <body>{children}</body>
    </html>
  )
}
