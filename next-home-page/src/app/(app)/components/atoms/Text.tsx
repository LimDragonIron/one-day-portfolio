import React, { forwardRef } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type TextProps = React.PropsWithChildren<
  {
    bold?: boolean
    className?: string
  } & HTMLMotionProps<'span'>
>

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ children, bold, className, ...props }, ref) => {
    const baseClasses = cn(
      bold ? 'font-bold' : 'font-normal',
      'whitespace-pre-wrap',
      className
    )

    return (
      <motion.span className={baseClasses} ref={ref} {...props}>
        {children}
      </motion.span>
    )
  }
)

Text.displayName = 'MotionText'

export default Text
