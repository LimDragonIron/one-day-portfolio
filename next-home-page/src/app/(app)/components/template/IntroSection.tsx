'use client'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Section } from '../atoms/Section'
import WelcomFixedMotion from './WelcomFixedMotion'
import JokeFiexdMotion from './JokeFiexdMotion'

export interface IntroSectionProps {}
const IntroSection: ForwardRefRenderFunction<
  HTMLDivElement,
  IntroSectionProps
> = ({}, ref) => {
  return (
    <Section className='relative h-[8000px] bg-black' ref={ref}>
      <WelcomFixedMotion />
      <JokeFiexdMotion />
    </Section>
  )
}

IntroSection.displayName = 'IntroSection'

export default forwardRef(IntroSection)
