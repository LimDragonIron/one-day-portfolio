import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

export interface ProcjetItemProps {
  images: string[]
}
const ProcjetItem = ({ images }: ProcjetItemProps) => {
  return (
    <div className='flex h-full min-h-[480px] w-full items-center justify-center bg-white'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        loop
        pagination={{ clickable: true }}
        style={{ height: '100%', width: '100%', minHeight: '480px' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='h-full w-full'>
            <Image
              src={image}
              fill
              quality={100}
              priority
              sizes='(max-width:700px) 300px, 100vw'
              style={{
                objectFit: 'contain', // cover, contain, none
                minHeight: '480px'
              }}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProcjetItem
