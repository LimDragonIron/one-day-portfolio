'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { CareerInfo } from '@/types/common'
import CareerDetail from './career-detail'
import { Separator } from '@radix-ui/react-separator'

export interface CareerItemProps {
  info: CareerInfo
}

const CareerItem = ({ info }: CareerItemProps) => {
  return (
    <div className='flex w-full max-w-[71.25rem] flex-col items-start justify-center gap-8 lg:flex-row'>
      {/* 이미지 */}
      <div className='flex items-end justify-center dark:bg-gray-100 lg:items-start'>
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
          <span className='text-2xl font-medium'>{info.companyName}</span>
        </div>
        <div>
          <span className='text-xl text-gray-400'>{info.date}</span>
        </div>
        <div>
          <span className='text-xl'>{info.companyDesc}</span>
        </div>
        <div>
          <span className='text-xl'>{info.role}</span>
        </div>
        <Separator className='h-[2px] w-auto bg-sidebar-border' />
        {info.projectList.map(item => (
          <CareerDetail key={item.title} detail={item} />
        ))}
      </div>
    </div>
  )
}

export default CareerItem
