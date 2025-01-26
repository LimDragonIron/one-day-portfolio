'use client'
import React from 'react'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import { motion, useScroll, useTransform } from 'framer-motion'

import Text from '../atoms/Text'
import { MOTION_OFFSET } from '@/constants/constants'

export interface WelcomFixedMotionProps {}

const WelcomFixedMotion = () => {
  const { scrollY } = useScroll()
  const scrollNavOpacity = useTransform(scrollY, value =>
    value > MOTION_OFFSET.JOKE_CONTAINER_HOLDUP_Y ? 0 : 1
  )

  const containerScale = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
    [1, 1.2]
  )

  const mainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
    [1, 0]
  )

  const subTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
    [1, 0]
  )

  return (
    <MotionCenterDiv fixed={true}>
      <MotionCenterDiv className='flex flex-1 flex-col gap-4 md:gap-8'>
        <motion.div
          className='absolute top-20 m-4 md:top-40'
          initial={{ translateY: 0 }}
          whileInView={{
            translateY: '10px'
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1,
            repeatDelay: 1
          }}
          style={{ opacity: scrollNavOpacity }}
        >
          <Text className='text-white'>↓ 스크롤하여 진행해주세요!</Text>
        </motion.div>
        <motion.div style={{ scale: containerScale }}>
          <motion.div
            className='flex justify-center'
            style={{ opacity: mainTitleOpacity }}
          >
            <Text className='text-center text-6xl text-white md:text-9xl'>
              안녕하세요
            </Text>
          </motion.div>
          <motion.div
            className='mt-6 flex justify-center text-2xl text-white md:text-4xl'
            style={{ opacity: subTitleOpacity }}
          >
            임용철입니다
          </motion.div>
        </motion.div>
      </MotionCenterDiv>
    </MotionCenterDiv>
  )
}

export default WelcomFixedMotion
