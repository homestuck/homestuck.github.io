import * as React from 'react'
import { source } from '@/lib/source'
import { RootProvider } from 'fumadocs-ui/provider'
import { Providers } from '@/components/providers'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className='bg-fd-background flex flex-col w-full min-h-screen'>
      <RootProvider>
        <Providers>
          <DocsLayout tree={source.pageTree}>{children}</DocsLayout>
        </Providers>
      </RootProvider>
    </body>
  )
}
