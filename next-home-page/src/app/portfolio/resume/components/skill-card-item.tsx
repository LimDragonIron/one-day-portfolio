import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface SkillItemProps {
  imgPath: string
}
const SkillCardItem = ({ imgPath }: SkillItemProps) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Card className='flex h-[120px] w-[120px] items-center justify-center p-4 dark:bg-gray-100 lg:h-[120px] lg:w-[120px] xl:h-[120px] xl:w-[172px] 2xl:h-[128px] 2xl:w-[256px]'>
        <CardContent className='relative flex h-full w-full'>
          <Image
            src={`/images/` + imgPath}
            fill
            className=' '
            alt=''
            style={{
              objectFit: 'contain'
            }}
            sizes='(max-width: 1000px) 500px, 300px'
            priority={true}
          ></Image>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SkillCardItem
