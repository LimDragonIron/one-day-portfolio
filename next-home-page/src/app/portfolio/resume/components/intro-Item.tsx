'use client'
import { motion } from 'framer-motion'
import React from 'react'

export interface IntroItemProps {
  title: string
  content: string
}

const IntroItem = ({ title, content }: IntroItemProps) => {
  return (
    <motion.div
      className='flex items-center gap-1'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <h1 className='text-base font-medium md:text-xl'>{title}:</h1>
      <p className='text-sm md:text-lg'>{content}</p>
    </motion.div>
  )
}

export default IntroItem
