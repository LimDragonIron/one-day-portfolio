import { INTRO_SECTION_PAGE_HEIGHT } from '@/constants/constants'
import { HeaderInfo, SectionMethodsType } from '@/types/common'
import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import Text from '../atoms/Text'

export interface PageHeaderProps {
  headerInfo: HeaderInfo[]
  scrollMethod: SectionMethodsType
}

const PageHeader = ({ headerInfo, scrollMethod }: PageHeaderProps) => {
  const { scrollY } = useScroll()

  const headerBackgroundColor = useTransform(scrollY, value => {
    return value > INTRO_SECTION_PAGE_HEIGHT ? 'white' : 'black'
  })

  const headerTextBackgroundColor = useTransform(scrollY, value => {
    return value > INTRO_SECTION_PAGE_HEIGHT ? 'black' : 'white'
  })

  return (
    <div className='hidden md:block'>
      <motion.header
        className={`fixed top-0 z-50 flex h-[74px] w-full items-center justify-center px-8 opacity-90 shadow-[0_1px_0.3rem_hsl(0deg_0%_80%_/_80%)]`}
        style={{ backgroundColor: headerBackgroundColor }}
      >
        <div className='flex w-full max-w-[71.25rem] justify-between'>
          <Text
            bold
            className='cursor-pointer whitespace-break-spaces text-xl transition duration-200 ease-in-out hover:!text-blue-500 lg:text-2xl'
            style={{
              color: headerTextBackgroundColor
            }}
            onClick={() => scrollMethod.scrollToSection(0)}
          >
            {"LimD's Portfolio"}
          </Text>
          <div className='flex items-center gap-8'>
            {headerInfo.map(item => (
              <Text
                className='cursor-pointer text-base transition duration-200 ease-in-out hover:!text-blue-500 lg:text-xl'
                key={item.title}
                style={{
                  color: headerTextBackgroundColor
                }}
                onClick={() => scrollMethod.scrollToSection(item.scrollIndex)}
              >
                {item.title}
              </Text>
            ))}
          </div>
        </div>
      </motion.header>
    </div>
  )
}

export default PageHeader
