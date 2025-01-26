'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Text from '../atoms/Text'
import { cn } from '@/lib/utils'

export interface SectionTitleProps {
  title: string
  color?: string
}
const SectionTitle = ({ title, color }: SectionTitleProps) => {
  return (
    <motion.div
      className='flex items-center'
      initial={{ translateY: 0, opacity: 0 }}
      whileInView={{
        translateY: -20,
        opacity: 1
      }}
      transition={{
        delay: 0.3,
        x: { duration: 1 },
        default: { ease: 'linear' }
      }}
      viewport={{
        once: true
      }}
    >
      <div className=''>
        <Text
          className={cn(
            'whitespace-nowrap border-b-2 border-solid border-gray-400 text-6xl font-bold',
            color
          )}
        >
          {title}
        </Text>
      </div>
    </motion.div>
  )
}

export default SectionTitle
