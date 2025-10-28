'use client'
import React from 'react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function TextFooter() {
  const banners = [
    'Gluten Pho-king Free',
    'Fresh Ingredients',
    'Noodles, Rice & Beer',
    'Simmered for hours',
  ]

  return (
    <>
      <section
        className="m__padding m__padding-medium module module__5 bg-red"
        id="module-5"
      />

      <Swiper
        id="module-6"
        className="m__banner module module__6 swiper pointer-events-none h-[92px] w-full bg-red xl:h-[140px]"
        tag="section"
        modules={[Autoplay, FreeMode]}
        direction="horizontal"
        loop={true}
        spaceBetween={40}
        speed={3500}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        freeMode={true}
        watchSlidesProgress={false}
        preloadImages={false}
        allowTouchMove={false}
        wrapperTag="ul"
      >
        {Array(3)
          .fill(banners)
          .flat()
          .map((text, index) => (
            <SwiperSlide
              key={index}
              tag="li"
              className="m__banner-item | leading-1 inline-block w-auto px-7 font-title text-[55px] font-bold uppercase tracking-[-1px] text-white xl:text-[92px]"
            >
              {text}
            </SwiperSlide>
          ))}
      </Swiper>

      <section
        className="m__padding m__padding-medium module module__7 bg-red"
        id="module-7"
      />
    </>
  )
}

export default TextFooter
