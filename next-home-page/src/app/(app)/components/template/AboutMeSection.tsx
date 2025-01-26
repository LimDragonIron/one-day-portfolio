'use client'
import React from 'react'
import { Section } from '../atoms/Section'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import SectionTitle from '../organisms/SectionTitle'
import { motion } from 'framer-motion'
import Text from '../atoms/Text'
import Image from 'next/image'
import { aboutMeContentDesc, aboutMeVisionDesc } from '@/constants/constants'
export interface AboutMeSectionProps {}
const AboutMeSection = React.forwardRef<HTMLDivElement, AboutMeSectionProps>(
  ({}, ref) => {
    return (
      <Section
        className='flex w-screen items-start justify-center bg-white px-8 py-24'
        ref={ref}
      >
        <MotionCenterDiv className='flex flex-1 flex-col'>
          <SectionTitle title='ABOUT ME' color='text-black' />
          <motion.div
            className='mt-28 flex w-full flex-col justify-around gap-12 md:flex-row'
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
            <div className='flex flex-col items-center justify-center gap-5'>
              <Image
                src='/images/hero.jpeg'
                alt=''
                width={240}
                height={320}
                style={{ width: 240, height: 320 }}
                priority
                className='rounded-lg'
              />
              <Text className='text-4xl text-black'>임용철</Text>
            </div>
            <div className='flex flex-col items-start justify-start gap-4'>
              <Text className='border-b-2 border-solid border-gray-400 text-4xl font-normal text-black'>
                비전
              </Text>
              {aboutMeVisionDesc.length > 0
                ? aboutMeVisionDesc.map((item, idx) => (
                    <Text
                      key={idx}
                      className='text-black md:text-base lg:text-lg xl:text-xl'
                    >
                      {item}
                    </Text>
                  ))
                : ''}
            </div>
            <div className='flex flex-col items-start justify-start gap-4'>
              <Text className='border-b-2 border-solid border-gray-400 text-4xl font-normal text-black'>
                연락처
              </Text>
              {aboutMeContentDesc.length > 0
                ? aboutMeContentDesc.map((item, idx) => (
                    <Text
                      key={idx}
                      className='text-black md:text-base lg:text-lg xl:text-xl'
                    >
                      {item}
                    </Text>
                  ))
                : ''}
            </div>
          </motion.div>
        </MotionCenterDiv>
      </Section>
    )
  }
)

AboutMeSection.displayName = 'AboutMeSection'

export default AboutMeSection
