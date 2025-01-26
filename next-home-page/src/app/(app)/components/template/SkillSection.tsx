'use client'
import React from 'react'
import { Section } from '../atoms/Section'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import SectionTitle from '../organisms/SectionTitle'
import { motion } from 'framer-motion'
import { skillList } from '@/constants/constants'
import SkillCard from '../organisms/SkillCard'
export interface SkillSectionProps {}

const SkillSection = React.forwardRef<HTMLDivElement, SkillSectionProps>(
  ({}, ref) => {
    return (
      <Section
        className='flex items-start justify-center bg-yellow-400 px-8 py-24'
        ref={ref}
      >
        <MotionCenterDiv className='flex flex-col'>
          <SectionTitle title='SKILLS' />
          <motion.div
            className='mt-12 flex w-full flex-col justify-center gap-16'
            viewport={{
              once: true
            }}
            initial={{ translateY: 0, opacity: 0 }}
            whileInView={{
              translateY: -20,
              opacity: 1
            }}
            transition={{
              delay: 0.5,
              x: { duration: 1 },
              default: { ease: 'linear' }
            }}
          >
            <div className='flex flex-col gap-8 lg:flex-row'>
              {/* front */}
              <SkillCard
                title={skillList[0].title}
                items={skillList[0].items}
                key={skillList[0].title}
              />
              <div className='flex flex-col gap-8'>
                {/* back */}
                <SkillCard
                  title={skillList[1].title}
                  items={skillList[1].items}
                  key={skillList[1].title}
                />
              </div>
              <div className='flex flex-col gap-8'>
                <SkillCard
                  title={skillList[2].title}
                  items={skillList[2].items}
                  key={skillList[2].title}
                />
                <SkillCard
                  title={skillList[3].title}
                  items={skillList[3].items}
                  key={skillList[3].title}
                />
              </div>
            </div>
          </motion.div>
        </MotionCenterDiv>
      </Section>
    )
  }
)

SkillSection.displayName = 'SkillSection'

export default SkillSection
