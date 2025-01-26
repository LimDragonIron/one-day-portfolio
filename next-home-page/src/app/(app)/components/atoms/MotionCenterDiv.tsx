'use client'
import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

export interface MotionCenterDivProps extends HTMLAttributes<HTMLDivElement> {
  fixed?: boolean
}
const MotionCenterDiv = ({
  children,
  className,
  fixed,
  ...props
}: React.PropsWithChildren<MotionCenterDivProps>) => {
  const baseClasses = cn(
    fixed ? 'fixed max-auto h-full left-0 right-0' : '',
    'flex items-center justify-center',
    className
  )
  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  )
}

export default MotionCenterDiv
