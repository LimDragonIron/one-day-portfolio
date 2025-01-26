'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { linkInfo } from '@/types/common'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from '@/app/(app)/components/atoms/Text'
export interface LinkItemProps {
  linkInfo: linkInfo
}

const LinkItem = ({ linkInfo }: LinkItemProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
      <Link
        href={linkInfo?.href ? linkInfo.href : '/'}
        className='flex'
        target='_blank'
      >
        <Card className='flex h-[400px] w-[300px] flex-col items-center justify-center lg:h-[400px]'>
          <CardHeader className='text-center text-2xl font-bold lg:text-4xl'>
            {linkInfo.title}
          </CardHeader>
          <CardContent className='flex w-full items-start justify-center pt-8'>
            <div className='hidden h-full w-full md:flex'>
              <Image
                src={`/images/` + linkInfo.imgPath}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className='flex h-full w-full md:hidden'>
              <Image
                src={`/images/` + linkInfo.imgPath}
                alt=''
                width={300}
                height={200}
              />
            </div>
          </CardContent>
          <CardFooter className='flex w-full flex-col items-center justify-center gap-4 p-4'>
            {linkInfo?.desc ? (
              linkInfo.desc.length > 0 ? (
                linkInfo.desc.map((item, idx) => (
                  <Text className='font-semibold' key={idx}>
                    {item}
                  </Text>
                ))
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

export default LinkItem
