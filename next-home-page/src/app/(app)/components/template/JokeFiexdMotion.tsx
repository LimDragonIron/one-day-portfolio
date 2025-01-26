'use client'
import { jokes, MOTION_OFFSET } from '@/constants/constants'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import Joke from '../atoms/Joke'

export interface JokeFiexdMotionProps {}
const JokeFiexdMotion = () => {
  const { scrollY } = useScroll()
  const innerHeight = useRef(0)

  const containerTranslateY = useTransform(scrollY, value => {
    const correctionOffset = innerHeight.current / 2 - 350
    return value > MOTION_OFFSET.JOKE_CONTAINER_HOLDUP_Y - correctionOffset
      ? MOTION_OFFSET.JOKE_CONTAINER_HOLDUP_Y - value - correctionOffset
      : 0
  })

  useEffect(() => {
    innerHeight.current = window.innerHeight
    window.addEventListener('resize', () => {
      innerHeight.current = window.innerHeight
      window.scrollBy(0, 0)
    })
  }, [containerTranslateY])

  return (
    <MotionCenterDiv fixed={true}>
      <MotionCenterDiv className='relative flex w-full flex-1 flex-col'>
        <motion.div
          className='absolute h-full w-full'
          style={{
            translateY: containerTranslateY
          }}
        >
          {jokes.map((joke, index) => (
            <Joke key={index} index={index} text={joke} />
          ))}
        </motion.div>
      </MotionCenterDiv>
    </MotionCenterDiv>
  )
}

export default JokeFiexdMotion
