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
import { motion } from 'framer-motion'

export interface ProjectCardProps {
  info: ProjectInfo
}
const ProjectCard = ({ info }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex w-full h-full flex-col gap-4 p-4"
      initial={{ translateY: 0, opacity: 0 }}
      whileInView={{
        translateY: -20,
        opacity: 1,
      }}
      transition={{
        delay: 0.6,
        x: { duration: 1 },
        default: { ease: 'linear' },
      }}
      viewport={{
        once: true,
      }}
      >
    <Card className='flex lg:h-[660px] h-[1080] w-full flex-col gap-4 p-4'>
      <CardTitle className='flex justify-center md:text-2xl text-lg items-center'>
        {info.detail.title}
      </CardTitle>
      <CardDescription className='flex justify-center'>
        <span className='whitespace-nowrap md:text-xl text-sm'>
          {info.detail.dateAndparticipants}
        </span>
      </CardDescription>
      {/* <CardContent className='flex h-full w-full flex-col items-center justify-center gap-20 p-4 lg:flex-row'> */}
      <CardContent className='flex h-full flex-col justify-center lg:gap-20 gap-2 lg:flex-row'>
        <div className='flex-1 lg:w-1/2 justify-center items-center'>
          <ProcjetItem images={info.images} />
        </div>
        <div className='flex-1 lg:w-1/2'>
          <div className='flex h-full flex-col justify-between'>
            <div className='flex'>
              <span className='md:text-lg text-base'>{info.detail.desc}</span>
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
                  <div className=''>
                    <Link href={info.detail.url}
                    target='_blank'
                    className=''
                    >
                    <p
                    className='hover:text-blue-400 cursor-pointer break-words break-all'
                    >{info.detail.url}</p>
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
                          className='whitespace-break-spaces rounded-full border p-1 md:text-base text-sm font-normal'
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
      </CardContent>
    </Card>
      </motion.div>
  )
}

export default ProjectCard
