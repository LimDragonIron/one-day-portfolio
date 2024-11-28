'use client'

import React from 'react'
import Image from 'next/image'
import IntroItem from './intro-Item'
import SectionTitle from '@/components/common/section-title'
import { motion } from 'framer-motion'

const title = 'FullStack 개발자 임용철'
const desc = `학습을 통한 성장을 즐기며, 개발에 대한 열정을 끊임없이 이어가는 개발자입니다.`
const introItems = [
  {
    title: '이름',
    content: '임용철'
  },
  {
    title: '생년월일',
    content: '1990.02.27'
  },
  {
    title: '이메일',
    content: 'ciycigood@gmail.com'
  }
]

const HeroSection = React.forwardRef<HTMLDivElement, React.PropsWithChildren>(
  (props, ref) => {
    return (
      <motion.div
        className='flex w-full flex-col gap-16'
        ref={ref}
        initial={{ translateY: 0, opacity: 0 }}
        whileInView={{
          translate: -20,
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
        <SectionTitle title='ABOUT ME' />
        <div className='flex w-full flex-col justify-center gap-8 rounded-xl lg:flex-row'>
          <div className='flex min-w-[240px] items-center justify-center'>
            <Image
              src='/images/hero.jpeg'
              alt=''
              width={240}
              height={320}
              style={{ width: 240, height: 320 }}
              priority
              className='rounded-lg'
            ></Image>
          </div>
          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <h1 className='font-bold md:text-xl lg:text-2xl xl:text-3xl'>
              {title}
            </h1>
            <span className='font-semibold md:text-base lg:text-xl xl:text-2xl'>
              {desc}
            </span>
            <div className='flex flex-col gap-1'>
              {introItems.map(item => (
                <IntroItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                ></IntroItem>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
)

HeroSection.displayName = 'HereoSection'

export default HeroSection
