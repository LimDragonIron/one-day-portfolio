'use client'
import useGenerateTransformHooks from '@/hooks/useGenerateTransformHook'
import { motion } from 'framer-motion'
import React from 'react'
import Text from '../atoms/Text'

export interface JokeProps {
  index: number
  text: string
}
const Joke = ({ index, text }: JokeProps) => {
  const { opacity, translateY } = useGenerateTransformHooks(index)
  return (
    <motion.div
      key={index}
      className='absolute left-[20%] md:left-[20%] lg:left-[30%]'
      style={{ opacity, translateY }}
    >
      <Text className='text-center text-2xl text-white md:text-5xl lg:text-6xl'>
        {text}
      </Text>
    </motion.div>
  )
}

export default Joke
