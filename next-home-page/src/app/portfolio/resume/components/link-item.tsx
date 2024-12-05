'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { linkInfo } from '@/types/common'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface LinkItemProps {
  linkInfo: linkInfo
}

const LinkItem = ({ linkInfo }: LinkItemProps) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link
        href={linkInfo?.href ? linkInfo.href : '/'}
        className='flex'
        target='_blank'
      >
        <Card className='flex h-[200px] w-[200px] flex-col gap-0 md:w-[300px]'>
          <CardContent className='relative flex h-full w-full pt-8'>
            <Image
              src={`/images/` + linkInfo.imgPath}
              fill
              alt=''
              style={{
                objectFit: 'contain'
              }}
              sizes='(max-width: 1000px) 500px, 300px'
              priority={true}
            ></Image>
          </CardContent>
          <CardFooter className='flex items-center justify-center p-2'>
            <span className='text-lg'>{linkInfo.desc}</span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

export default LinkItem
