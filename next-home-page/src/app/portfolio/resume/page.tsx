'use client'

import React, { useCallback, useMemo, useRef } from 'react'
import HeroSection from './components/hero-section'
import SkillSection from './components/skill-section'
import DownArrow from '@/components/common/down-arrow'
import CareerSection from './components/career-section'
import ProjectSection from './components/project-section'
import { HeaderInfo } from '@/types/common'
import PageHeader from './components/page-header'
import LinkSection from './components/link-section'

const headers: HeaderInfo[] = [
  { title: 'ABOUT ME', scrollIndex: 0 },
  { title: 'SKILLS', scrollIndex: 1 },
  { title: 'PROJECTS', scrollIndex: 2 },
  { title: 'ARCHIVING', scrollIndex: 3 },
  { title: 'CAREER', scrollIndex: 4 }
]

const ResumePage = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const skillSectionRef = useRef<HTMLDivElement>(null)
  const projectSectionRef = useRef<HTMLDivElement>(null)
  const careerSectionRef = useRef<HTMLDivElement>(null)
  const linkSectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((index: number) => {
    const isMobile = window.innerWidth < 800
    switch (index) {
      case 0:
        return window.scrollTo({
          top: heroSectionRef.current
            ? heroSectionRef.current.offsetTop - (!isMobile ? 100 : 0)
            : !isMobile
              ? 100
              : 0,
          behavior: 'smooth'
        })
      case 1:
        return window.scrollTo({
          top: skillSectionRef.current
            ? skillSectionRef.current.offsetTop - (!isMobile ? 100 : 0)
            : !isMobile
              ? 100
              : 0,
          behavior: 'smooth'
        })
      case 2:
        return window.scrollTo({
          top: projectSectionRef.current
            ? projectSectionRef.current.offsetTop - (!isMobile ? 100 : 0)
            : !isMobile
              ? 100
              : 0,
          behavior: 'smooth'
        })
      case 3:
        return window.scrollTo({
          top: linkSectionRef.current
            ? linkSectionRef.current.offsetTop - (!isMobile ? 100 : 0)
            : !isMobile
              ? 100
              : 0,
          behavior: 'smooth'
        })
      case 4:
        return window.scrollTo({
          top: careerSectionRef.current
            ? careerSectionRef.current.offsetTop - (!isMobile ? 100 : 0)
            : !isMobile
              ? 100
              : 0,
          behavior: 'smooth'
        })
    }
  }, [])

  const sectionMethods = useMemo(() => ({ scrollToSection }), [scrollToSection])

  return (
    <section className='flex h-full w-full flex-col items-center justify-center py-6'>
      <PageHeader headerInfo={headers} scrollMethod={sectionMethods} />
      <div className='flex h-full w-full max-w-[84.00rem] flex-col justify-center gap-8 p-4 sm:p-8 md:p-12 lg:gap-24 lg:p-16'>
        <HeroSection ref={heroSectionRef} />
        <div className='flex w-full items-center justify-center md:items-end md:justify-end'>
          <DownArrow />
        </div>
        <SkillSection ref={skillSectionRef} />
        <div className='flex w-full items-center justify-center md:items-end md:justify-end'>
          <DownArrow />
        </div>
        <ProjectSection ref={projectSectionRef} />
        <div className='flex w-full items-center justify-center md:items-end md:justify-end'>
          <DownArrow />
        </div>
        <LinkSection ref={linkSectionRef} />
        <div className='flex w-full items-center justify-center md:items-end md:justify-end'>
          <DownArrow />
        </div>
        <CareerSection ref={careerSectionRef} />
      </div>
    </section>
  )
}

export default ResumePage
