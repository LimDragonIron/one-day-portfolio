'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const noTitle = 'No Title'

export interface HomeCardProps {
  title?: string
  url?: string
  children?: React.ReactNode
}

const HomeCard = ({ title, url, children }: HomeCardProps) => {
  return (
    <Card className='w-[320px]'>
      <motion.div
        className='flex h-full w-full flex-col'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link href={url == undefined ? '/' : url} className='flex flex-col'>
          <CardContent className='flex items-center justify-center p-0 pl-4 pr-4 pt-4'>
            {children}
          </CardContent>
          <CardFooter className='justify-center'>
            <span className='text-3xl'>{title ? title : noTitle}</span>
          </CardFooter>
        </Link>
      </motion.div>
    </Card>
  )
}

export default HomeCard
