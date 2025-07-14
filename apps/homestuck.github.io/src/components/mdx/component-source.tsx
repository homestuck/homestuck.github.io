import * as React from 'react'
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { Index } from '@/registry/__index__'

export const ComponentSource: React.FC<{ name: string }> = ({ name }) => {
  const value = Index[name]?.files[0].content
  if (!value) {
    return null
  }

  return <DynamicCodeBlock lang='tsx' code={value} />
}
