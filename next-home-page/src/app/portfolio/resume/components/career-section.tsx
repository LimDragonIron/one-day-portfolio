'use client'
import React from 'react'
import CareerItem from './career-item'
import { careerList } from '@/constants/constants'
import SectionTitle from '@/components/common/section-title'

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

CareerSection.displayName = 'CareerSection'

export default CareerSection
