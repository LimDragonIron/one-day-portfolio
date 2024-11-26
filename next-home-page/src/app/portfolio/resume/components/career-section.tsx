'use client'
import React, { useEffect, useRef, useState } from 'react'
import CareerItem from './career-item'
import { careerList } from '@/constants/constants'
import SectionTitle from '@/components/common/section-title'

export interface CareerSectionProps {}

const CareerSection = React.forwardRef<HTMLDivElement, React.PropsWithChildren>(
  (props, ref) => {
    return (
      <div className='flex w-full flex-col gap-16' ref={ref}>
        <SectionTitle title='CAREER' />
        <div className='flex w-full flex-col items-center gap-20'>
          {careerList.map(item => (
            <CareerItem key={item.companyName} info={item} />
          ))}
        </div>
      </div>
    )
  }
)

export default CareerSection
