import { SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'
import { HeaderInfo, SectionToMethods } from '@/types/common'
import React, { useEffect, useRef, useState } from 'react'

export interface PageHeaderProps {
  headerInfo: HeaderInfo[]
  scrollMethod: SectionToMethods
}

const PageHeader = ({ headerInfo, scrollMethod }: PageHeaderProps) => {
  const isMobile = useIsMobile()
  return (
    <React.Fragment>
      {isMobile ? (
        <></>
      ) : (
        <div className='fixed top-0 z-50 flex h-[72px] w-full items-center justify-center gap-20 bg-white opacity-90 shadow-2xl dark:bg-black'>
          {headerInfo.map(item => (
            <div
              className='flex cursor-pointer transition duration-200 ease-in-out hover:text-blue-500 dark:text-white md:text-sm xl:text-3xl'
              onClick={() => scrollMethod.scrollToSection(item.scrollIndex)}
              key={item.title}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default PageHeader
