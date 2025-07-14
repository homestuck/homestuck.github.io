'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      enableSystem
      disableTransitionOnChange
      enableColorScheme>
      {children}
    </NextThemesProvider>
  )
}
