'use client'
import { cn } from '@/lib/utils'
import { icons } from 'lucide-react'
import { HTMLAttributes } from 'react'

export interface LucideIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons
  size?: number
}

const LucideIcon = ({ name, size = 16, ...props }: LucideIconProps) => {
  const SelectLucideIcon = icons[name]
  return (
    <SelectLucideIcon size={size} className={cn(props.className)} {...props} />
  )
}

export default LucideIcon
