import SectionTitle from '@/components/common/section-title'
import React from 'react'
import ProjectCard from './project-card'
import { motion } from 'framer-motion'
import { projectCardList } from '@/constants/constants'

export interface ProjectSectionProps {}
const ProjectSection = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren
>((props, ref) => {
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
      <SectionTitle title='PROJECTS' />
      <div className='flex w-full flex-col items-center justify-center gap-20'>
        {projectCardList.length > 0
          ? projectCardList.map(item => (
              <ProjectCard
                key={item.detail.title}
                info={{
                  images: item.images,
                  detail: item.detail
                }}
              />
            ))
          : ''}
      </div>
    </motion.div>
  )
})

export default ProjectSection
