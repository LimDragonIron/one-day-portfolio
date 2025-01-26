'use client'
import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'
import { cn } from '@/lib/utils'

export interface MotionTextProps extends HTMLMotionProps<'span'> {}
const MotionText = ({ children, className, ...props }: MotionTextProps) => {
  return (
    <motion.span
      className={cn(
        'whitespace-break-spaces font-normal text-black',
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  )
}

export default MotionText
