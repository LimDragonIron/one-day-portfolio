'use client'
import React from 'react'
import { Section } from '../atoms/Section'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import SectionTitle from '../organisms/SectionTitle'
import { motion } from 'framer-motion'
import { linkImages } from '@/constants/constants'
import LinkItem from '../organisms/linkItem'

export interface ArchivingSectionProps {}
const ArchivingSection = React.forwardRef<
  HTMLDivElement,
  ArchivingSectionProps
>(({}, ref) => {
  return (
    <Section
      ref={ref}
      className='flex items-start justify-center bg-red-900 px-8 py-24'
    >
      <MotionCenterDiv className='flex flex-col'>
        <SectionTitle title='ARCHIVING' color='text-white' />
        <motion.div
          className='mt-12 flex flex-col gap-16'
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
          <div className='flex w-full flex-col items-center justify-center gap-16 lg:flex-row'>
            {linkImages.length > 0
              ? linkImages.map((item, idx) => (
                  <LinkItem key={idx} linkInfo={item} />
                ))
              : ''}
          </div>
        </motion.div>
      </MotionCenterDiv>
    </Section>
  )
})

ArchivingSection.displayName = 'ArchivingSection'

export default ArchivingSection
