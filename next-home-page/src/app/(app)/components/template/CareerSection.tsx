'use client'
import React from 'react'
import { Section } from '../atoms/Section'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import SectionTitle from '../organisms/SectionTitle'
import { careerList } from '@/constants/constants'
import CareerItem from '../organisms/CareerItem'

export interface CareerSectionProps {}
const CareerSection = React.forwardRef<HTMLDivElement, CareerSectionProps>(
  ({}, ref) => {
    return (
      <Section
        className='felx items-start justify-center bg-pink-700 px-8 py-24'
        ref={ref}
      >
        <MotionCenterDiv className='flex flex-1 flex-col'>
          <SectionTitle title='CAREER' color='text-white' />
          <div className='mt-12 flex flex-col items-center gap-20'>
            {careerList.map(item => (
              <CareerItem key={item.companyName} info={item} />
            ))}
          </div>
        </MotionCenterDiv>
      </Section>
    )
  }
)

CareerSection.displayName = 'CareerSection'

export default CareerSection
