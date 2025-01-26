'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

const Section = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'section'>
>(({ className, ...props }, ref) => {
  return <section className={cn(className)} ref={ref} {...props} />
})
Section.displayName = 'Section'

export { Section }
