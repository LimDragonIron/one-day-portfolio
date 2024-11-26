import { icons } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export type SideItem = {
  title: string
  url: string
  icon: keyof typeof icons
}

export type SkillItem = {
  imgPath: string
}

export type SkillList = {
  title: string
  items: SkillItem[]
}

export type CareerInfo = {
  imgPath: string
  companyName: string
  companyDesc: string
  date: string
  role: string
  projectList: ProjectDetail[]
}

export type ProjectDetail = {
  title: string
  date: string
  abstract: string
  stackList: string[]
  features: string[]
  process: string[]
}

export type PorjectInfo = {
  images: string[]
  participants: number
  desc: string
  features: string
  stackList: string[]
}

export type PageHeaderInfo = {
  
}

export type HeaderInfo = {
  title: string 
  scrollIndex: number
}

export type SectionToMethods = {
  scrollToSection: (index: number) => void
}