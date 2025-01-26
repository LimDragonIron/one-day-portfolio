'use client'
import React from 'react'
import { Section } from '../atoms/Section'
import MotionCenterDiv from '../atoms/MotionCenterDiv'
import SectionTitle from '../organisms/SectionTitle'
import { projectCardList } from '@/constants/constants'
import ProjectCard from '../organisms/ProjectCard'

export interface ProjectsSectionProps {}
const ProjectsSection = React.forwardRef<HTMLDivElement, ProjectsSectionProps>(
  ({}, ref) => {
    return (
      <Section
        ref={ref}
        className='flex items-start justify-center bg-[#4244ff] px-8 py-24'
      >
        <MotionCenterDiv className='flex flex-1 flex-col'>
          <SectionTitle title='PROJECT' color='text-white' />
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
        </MotionCenterDiv>
      </Section>
    )
  }
)

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
