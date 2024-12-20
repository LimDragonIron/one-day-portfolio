'use client'
import React from 'react'
import SkillCard from './skill-card'
import SectionTitle from '@/components/common/section-title'
import { motion } from 'framer-motion'
import { skillList } from '@/constants/constants'

const SkillSection = React.forwardRef<HTMLDivElement, React.PropsWithChildren>(
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
        <SectionTitle title='SKILLS' />
        <div className='grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2'>
          {skillList.map(item => (
            <SkillCard title={item.title} items={item.items} key={item.title} />
          ))}
        </div>
      </motion.div>
    )
  }
)

SkillSection.displayName = 'SkillSection'

export default SkillSection
