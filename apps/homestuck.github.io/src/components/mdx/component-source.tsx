import * as React from 'react'
import fs from 'node:fs/promises'
import path from 'node:path'
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { Index } from '@/registry/__index__'

export const ComponentSource: React.FC<{ name: string }> = async ({ name }) => {
  // const value = Index[name]?.files[0].content
  const value = Index[name]?.files[0].path
  if (!value) {
    return null
  }

  const file = await fs.readFile(path.join(process.cwd(), value), 'utf-8')

  return <DynamicCodeBlock lang='tsx' code={file} />
}
