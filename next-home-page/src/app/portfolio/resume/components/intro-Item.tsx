import React, { useEffect, useRef, useState } from 'react'

export interface IntroItemProps {
  title: string
  content: string
}

const IntroItem = ({ title, content }: IntroItemProps) => {
  return (
    <div className='flex items-center gap-1'>
      <h1 className='text-base font-medium md:text-xl'>{title}:</h1>
      <p className='text-sm md:text-lg'>{content}</p>
    </div>
  )
}

export default IntroItem
