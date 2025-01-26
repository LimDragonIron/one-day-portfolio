'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import SkillCardItem from '../atoms/SkillCardItem'
import { Separator } from '@/components/ui/separator'
import { SkillItem } from '@/types/common'

export interface SkillCardProps {
  title: string
  items: SkillItem[]
}

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <Card className='flex flex-col items-center justify-center'>
      <CardHeader className='flex items-center justify-center gap-2'>
        <CardTitle className='text-3xl'>{title}</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className='grid grid-cols-2 items-center justify-center gap-4'>
        {items.map(item => (
          <SkillCardItem key={item.imgPath} imgPath={item.imgPath} />
        ))}
      </CardContent>
    </Card>
  )
}

export default SkillCard
