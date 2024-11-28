'use client'
import React from 'react'
import SkillCard from './skill-card'
import { SkillList } from '@/types/common'
import SectionTitle from '@/components/common/section-title'
import { motion } from 'framer-motion'

const skillList: SkillList[] = [
  {
    title: 'FrontEnd',
    items: [
      { imgPath: 'html5.png' },
      { imgPath: 'css.png' },
      { imgPath: 'js.png' },
      { imgPath: 'ts.png' },
      { imgPath: 'next.png' },
      { imgPath: 'react.png' },
      { imgPath: 'vue.png' },
      { imgPath: 'tailwind.png' }
    ]
  },
  {
    title: 'BackEnd',
    items: [
      { imgPath: 'nest.png' },
      { imgPath: 'mysql.png' },
      { imgPath: 'postgresql.png' },
      { imgPath: 'typeorm.png' },
      { imgPath: 'langchain.png' },
      { imgPath: 'nodejs.png' }
    ]
  },
  {
    title: 'Deployment',
    items: [{ imgPath: 'amazon.png' }, { imgPath: 'docker.png' }]
  },
  {
    title: 'Extra',
    items: [{ imgPath: 'jira-confluence.png' }]
  }
]

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
