import React, { useEffect, useRef, useState } from 'react'

export interface SectionTitleProps {
  title: string
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  )
}

export default SectionTitle
