import { ProjectDetail } from '@/types/common'
import React, { useEffect, useRef, useState } from 'react'

export interface CareerDetailProps {
  detail: ProjectDetail
}

const ListItem = ({ items, title }: { items: string[]; title: string }) => {
  return (
    <div>
      <span className='md:text-xl text-lg'>{title}</span>
      <ul className='list-disc pl-4'>
        {items.map((item, idx) => (
          <li className='whitespace-break-spaces md:text-lg text-base' key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const CareerDetail = ({ detail }: CareerDetailProps) => {
  return (
    <div className='flex flex-col gap-4 pt-4'>
      <div>
        <span className='md:text-xl font-semibold text-lg'>▎ {detail.title}</span>
      </div>
      <div>
        <span className='text-base text-gray-400'>{detail.date}</span>
      </div>
      <div>
        <span className='whitespace-break-spaces md:text-lg text-base'>
          {detail.abstract}
        </span>
      </div>
      {detail.stackList.length > 0 ? (
        <ListItem title='기술 스택' items={detail.stackList} />
      ) : (
        ''
      )}
      {detail.features.length > 0 ? (
        <ListItem title='주요 기능' items={detail.features} />
      ) : (
        ''
      )}
      {detail.process.length > 0 ? (
        <ListItem title='개발 과정' items={detail.process} />
      ) : (
        ''
      )}
    </div>
  )
}

export default CareerDetail
