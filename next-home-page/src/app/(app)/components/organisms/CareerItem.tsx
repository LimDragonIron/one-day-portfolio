'use client'

import React from 'react'
import Image from 'next/image'
import { CareerInfo } from '@/types/common'
import CareerDetail from '../atoms/CareerDetail'
import { Separator } from '@radix-ui/react-separator'
import { motion } from 'framer-motion'

export interface CareerItemProps {
  info: CareerInfo
}

const CareerItem = ({ info }: CareerItemProps) => {
  return (
    <motion.div
      className='flex w-full max-w-[71.25rem] flex-col items-start justify-center gap-8 lg:flex-row'
      initial={{ translateY: 0, opacity: 0 }}
      whileInView={{
        translateY: -20,
        opacity: 1
      }}
      transition={{
        delay: 0.6,
        x: { duration: 1 },
        default: { ease: 'linear' }
      }}
      viewport={{
        once: true
      }}
    >
      {/* 이미지 */}
      <div className='flex w-full items-end justify-center bg-white lg:items-start'>
        <Image
          src={info.imgPath}
          alt=''
          width={300}
          height={150}
          priority
          style={{ width: 300, height: 150 }}
          className='min-w-[300px]'
        />
      </div>
      <div className='flex w-full flex-col gap-4 border-t-2 border-gray-400 pl-0 pt-8 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0'>
        <div>
          <span className='text-xl font-medium md:text-2xl'>
            {info.companyName}
          </span>
        </div>
        <div>
          <span className='text-lg text-gray-400 md:text-xl'>{info.date}</span>
        </div>
        <div>
          <span className='text-lg md:text-xl'>{info.companyDesc}</span>
        </div>
        <div>
          <span className='text-lg md:text-xl'>{info.role}</span>
        </div>
        <Separator className='h-[2px] w-auto bg-sidebar-border' />
        {info.projectList.map(item => (
          <CareerDetail key={item.title} detail={item} />
        ))}
      </div>
    </motion.div>
  )
}

export default CareerItem
