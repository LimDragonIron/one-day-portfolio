import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'
import React, { useEffect, useRef, useState } from 'react'
import ProcjetItem from './project-item'

export interface ProjectCardProps {}
const ProjectCard = () => {
  return (
    <Card className='flex h-[660px] w-full flex-col gap-4 p-4'>
      <CardTitle className='flex justify-center text-2xl'>
        타이틀 입니다.
      </CardTitle>
      <CardDescription className='flex justify-center'>
        4인 개발 입니다.
      </CardDescription>
      <CardContent className='flex h-full w-full flex-col items-center justify-center gap-20 p-4 lg:flex-row'>
        <div className='flex h-full min-w-[390px] max-w-[390px] lg:max-w-[600px]'>
          <ProcjetItem />
        </div>
        <div className='flex h-full w-full flex-col items-start justify-between'>
          <span>프로젝트 설명</span>
          <div className='flex flex-col items-start'>
            <span>주요기능</span>
            <span>URL</span>
            <span>기술 스택</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
