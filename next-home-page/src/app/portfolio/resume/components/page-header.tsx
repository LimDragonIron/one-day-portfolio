import { SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'
import { HeaderInfo, PageHeaderInfo, SectionToMethods } from '@/types/common'
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
            <div className='fixed xl:max-w-[80.00rem] lg:max-w-[54.00rem] md:max-w-[40.00rem] w-full top-0 z-50 flex h-[72px] justify-center items-center gap-20  opacity-90 shadow-2xl'>
            <SidebarTrigger/>
            {headerInfo.map(item => (
                <div
                className='flex cursor-pointer xl:text-3xl md:text-sm transition duration-200 ease-in-out dark:text-white hover:text-blue-500'
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
