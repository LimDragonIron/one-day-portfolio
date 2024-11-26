import SectionTitle from '@/components/common/section-title'
import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from './project-card'

export interface ProjectSectionProps {}
const ProjectSection = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren
>((props, ref) => {
  return (
    <div className='flex w-full flex-col gap-16' ref={ref}>
      <SectionTitle title='PROJECTS' />
      <div className='flex w-full flex-col items-center justify-center gap-20'>
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
})

export default ProjectSection
