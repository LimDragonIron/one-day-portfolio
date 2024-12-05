import SectionTitle from '@/components/common/section-title'
import { motion } from 'framer-motion'
import React from 'react'
import { linkImages } from '@/constants/constants'
import LinkItem from './link-item'
const LinkSection = React.forwardRef<HTMLDivElement, React.PropsWithChildren>(
  (props, ref) => {
    return (
      <motion.div
        className='flex w-full flex-col gap-16'
        ref={ref}
        initial={{ translateY: 0, opacity: 0 }}
        whileInView={{
          translate: -20,
          opacity: 1
        }}
        transition={{
          delay: 0.6,
          x: { duration: 1 },
          default: { ease: 'linear' }
        }}
        viewport={{
          once: true
        }}
      >
        <SectionTitle title='ARCHIVING' />
        <div className='flex w-full flex-col items-center justify-center gap-16 md:flex-row'>
          {linkImages.length > 0
            ? linkImages.map(item => (
                <LinkItem key={item.desc} linkInfo={item} />
              ))
            : ''}
        </div>
      </motion.div>
    )
  }
)

LinkSection.displayName = 'LinkSection'

export default LinkSection
