import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'
import React, { useEffect, useRef, useState } from 'react'
import ProcjetItem from './project-item'
import { ProjectInfo } from '@/types/common'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

export interface ProjectCardProps {
  info: ProjectInfo
}
const ProjectCard = ({ info }: ProjectCardProps) => {
  return (
    <Card className='flex h-[660px] w-full flex-col gap-4 p-4'>
      <CardTitle className='flex justify-center text-2xl'>
        {info.detail.title}
      </CardTitle>
      <CardDescription className='flex justify-center'>
        <span className='whitespace-nowrap text-xl'>
          {info.detail.dateAndparticipants}
        </span>
      </CardDescription>
      {/* <CardContent className='flex h-full w-full flex-col items-center justify-center gap-20 p-4 lg:flex-row'> */}
      <CardContent className='flex h-full flex-col justify-center gap-20 lg:flex-row'>
        <div className='flex-1 lg:w-1/2'>
          <ProcjetItem images={info.images} />
        </div>
        <div className='flex-1 lg:w-1/2'>
          <div className='flex h-full flex-col justify-between'>
            <div className='flex'>
              <span className='text-lg'>{info.detail.desc}</span>
            </div>
            <div className='flex flex-col gap-4'>
              <Separator className='h-[2px] w-full bg-gray-400' />
              <div className='flex gap-2'>
                <div className='min-w-[80px]'>
                  <span>주요기능</span>
                </div>
                <div>
                  <span>{info.detail.features}</span>
                </div>
              </div>
              {info.detail.url ? (
                <div className='flex gap-2'>
                  <div className='min-w-[80px]'>
                    <span>URL</span>
                  </div>
                  <div>
                    <Link href={info.detail.url}
                    target='_blank'
                    >
                    <span
                    className=' hover:text-blue-400 cursor-pointer'
                    >{info.detail.url}</span>
                    </Link>
                  </div>
                </div>
              ) : (
                ''
              )}
              <div className='flex gap-2'>
                <div className='min-w-[80px]'>
                  <span>기술 스택</span>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {info.detail.stackList.length > 0
                    ? info.detail.stackList.map((item, idx) => (
                        <span
                          className='whitespace-break-spaces rounded-full border p-1 font-normal'
                          key={item + idx}
                        >
                          {item}
                        </span>
                      ))
                    : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex h-full min-w-[390px] max-w-[390px] lg:max-w-[600px]'>
          <ProcjetItem images={info.images} />
        </div>
        <div className='flex h-full flex-col items-start justify-between gap-8'>
          <div className='flex'>
            <span className='text-lg'>{info.detail.desc}
            </span>
          </div>
          <div className='flex flex-col items-start gap-4'>
          <Separator className='w-full h-[2px] bg-gray-400' />
            <div className='flex gap-2'>
              <div className='w-[80px]'>
                <span>주요기능</span>
              </div>
              <div>
                <span>{info.detail.features}</span>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-[80px]'>
                <span>URL</span>
              </div>
              <div>
                <span>{info.detail.url}</span>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='w-[80px]'>
                <span>기술 스택</span>
              </div>
              <div className='flex'>
              {info.detail.stackList.length > 0
                ? info.detail.stackList.map((item,idx) => <span className='text-center text-sm whitespace-break-spaces border rounded-2xl'
                key={item+idx}
                >{item}</span>)
                : ''}
            </div>
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  )
}

export default ProjectCard
