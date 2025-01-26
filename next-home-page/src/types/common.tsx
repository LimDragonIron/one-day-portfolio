import { icons } from 'lucide-react'

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

export type ProjectInfo = {
  images: string[]
  detail: ProjectInfoDetail
}

type ProjectInfoDetail = {
  title: string
  dateAndparticipants: string
  desc: string
  features: string
  url?: string
  stackList: string[]
}

export type HeaderInfo = {
  title: string
  scrollIndex: number
}

export type SectionMethodsType = {
  scrollToSection: (index: number) => void
}

export type linkInfo = {
  imgPath: string
  title: string
  desc?: string[]
  href: string
}
