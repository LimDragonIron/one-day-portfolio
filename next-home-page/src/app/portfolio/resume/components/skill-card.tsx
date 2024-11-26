'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import SkillCardItem from './skill-card-item'
import { Separator } from '@/components/ui/separator'
import { SkillItem } from '@/types/common'

export interface SkillCardProps {
  title: string
  items: SkillItem[]
}

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <Card className='w-[300px] lg:w-[320px] xl:w-[420px] 2xl:w-[600px]'>
      <CardHeader className='flex items-center justify-center gap-2'>
        <CardTitle>{title}</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className='grid grid-cols-2 items-center gap-8'>
        {items.map(item => (
          <SkillCardItem key={item.imgPath} imgPath={item.imgPath} />
        ))}
      </CardContent>
    </Card>
  )
}

export default SkillCard
