'use client'

import React, { useCallback, useMemo, useRef } from 'react'

import { HeaderInfo } from '@/types/common'
import PageHeader from './components/organisms/PageHeader'
import IntroSection from './components/template/IntroSection'
import AboutMeSection from './components/template/AboutMeSection'
import SkillSection from './components/template/SkillSection'
import ArchivingSection from './components/template/ArchivingSection'
import ProjectsSection from './components/template/ProjectsSection'
import CareerSection from './components/template/CareerSection'
import { HEADER_HEIGHT } from '@/constants/constants'

const headers: HeaderInfo[] = [
  { title: 'ABOUT ME', scrollIndex: 1 },
  { title: 'SKILLS', scrollIndex: 2 },
  { title: 'ARCHIVING', scrollIndex: 3 },
  { title: 'PROJECTS', scrollIndex: 4 },
  { title: 'CAREER', scrollIndex: 5 }
]

const Page = () => {
  const introSectionRef = useRef<HTMLDivElement>(null)
  const aboutMeSectionRef = useRef<HTMLDivElement>(null)
  const archivingSectionRef = useRef<HTMLDivElement>(null)
  const skillSectionRef = useRef<HTMLDivElement>(null)
  const projectSectionRef = useRef<HTMLDivElement>(null)
  const careerSectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((index: number) => {
    const isMobile = window.innerWidth < 800
    switch (index) {
      case 0:
        return window.scrollTo({
          top: introSectionRef.current
            ? introSectionRef.current.offsetTop -
              (!isMobile ? HEADER_HEIGHT : 0)
            : !isMobile
              ? HEADER_HEIGHT
              : 0,
          behavior: 'smooth'
        })
      case 1:
        return window.scrollTo({
          top: aboutMeSectionRef.current
            ? aboutMeSectionRef.current.offsetTop -
              (!isMobile ? HEADER_HEIGHT : 0)
            : !isMobile
              ? HEADER_HEIGHT
              : 0,
          behavior: 'smooth'
        })
      case 2:
        return window.scrollTo({
          top: skillSectionRef.current
            ? skillSectionRef.current.offsetTop -
              (!isMobile ? HEADER_HEIGHT : 0)
            : !isMobile
              ? HEADER_HEIGHT
              : 0,
          behavior: 'smooth'
        })
      case 3:
        return window.scrollTo({
          top: archivingSectionRef.current
            ? archivingSectionRef.current.offsetTop -
              (!isMobile ? HEADER_HEIGHT : 0)
            : !isMobile
              ? HEADER_HEIGHT
              : 0,
          behavior: 'smooth'
        })
      case 4:
        return window.scrollTo({
          top: projectSectionRef.current
            ? projectSectionRef.current.offsetTop -
              (!isMobile ? HEADER_HEIGHT : 0)
            : !isMobile
              ? HEADER_HEIGHT
              : 0,
          behavior: 'smooth'
        })
      case 5:
        return window.scrollTo({
          top: careerSectionRef.current
            ? careerSectionRef.current.offsetTop -
              (!isMobile ? HEADER_HEIGHT : 0)
            : !isMobile
              ? HEADER_HEIGHT
              : 0,
          behavior: 'smooth'
        })
    }
  }, [])

  const sectionMethods = useMemo(() => ({ scrollToSection }), [scrollToSection])

  return (
    <main className='flex min-h-screen flex-col px-0 py-16'>
      <PageHeader headerInfo={headers} scrollMethod={sectionMethods} />
      <IntroSection ref={introSectionRef} />
      <AboutMeSection ref={aboutMeSectionRef} />
      <SkillSection ref={skillSectionRef} />
      <ArchivingSection ref={archivingSectionRef} />
      <ProjectsSection ref={projectSectionRef} />
      <CareerSection ref={careerSectionRef} />
    </main>
  )
}

export default Page
