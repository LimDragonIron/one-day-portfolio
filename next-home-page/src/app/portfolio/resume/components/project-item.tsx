import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'

const images = [
  '/images/pj-1-1.png',
  '/images/pj-1-2.png',
  '/images/pj-1-3.png'
]

export interface ProcjetItemProps {}
const ProcjetItem = () => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-white'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        loop
        pagination={{ clickable: true }}
        style={{ height: '100%', width: '100%' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              // width="0"
              // height="0"
              fill
              quality={100}
              priority
              sizes='100vw'
              style={{
                objectFit: 'contain' // cover, contain, none
              }}
              // style={{height:"auto", width:"100%"}}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProcjetItem
