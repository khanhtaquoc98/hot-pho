'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      img: 'https://content.phocafe.co.uk/wp-content/uploads/2024/10/Dish-3-3.png',
      alt: 'A bowl of Vietnamese pho with rice noodles, cilantro, lime wedge, sliced green onions, and red chili flakes. The soup features a clear broth and chicken pieces, garnished with herbs, adding a pop of color. The bowl is set against a plain background.',
      rotate: '0deg',
      title: '98% Gluten Free',
      subtitle: 'Accredited by Coeliac UK',
    },
    {
      img: 'https://content.phocafe.co.uk/wp-content/uploads/2024/10/Dish-2-2.png',
      alt: 'A bowl of noodle soup with shrimp, beef slices, herbs, green onions, and red chili slices, placed on a round, light gray surface.',
      rotate: '90deg',
      title: 'Nutritious Bone Broths',
      subtitle: 'Simmered for a minimum of 12 hours',
    },
    {
      img: 'https://content.phocafe.co.uk/wp-content/uploads/2024/10/Dish-1-1-2.png',
      alt: 'A bowl of soup featuring sliced mushrooms, enoki mushrooms, red chili slices, and green vegetables in a light broth. The bowl casts a shadow and sits against a white background.',
      rotate: '-180deg',
      title: 'Loads Of Vegan Options',
      subtitle: '',
    },
    {
      img: 'https://content.phocafe.co.uk/wp-content/uploads/2024/10/Dish-4-2.png',
      alt: 'A bowl of noodle soup with chicken, green beans, bok choy, and fresh basil leaves. Garnished with lime slices and red chili. The soup is served on a round, white plate casting a shadow.',
      rotate: '-90deg',
      title: 'Freshly Cooked Food',
      subtitle: 'Nothing is frozen or pre-packaged',
    },
  ]

  return (
    <section className="m__home-slider module module__2 | relative w-screen overflow-hidden pb-10 pt-6 xl:h-screen xl:py-[24px]">
      <div className="m__home-slider-title | u__wrap z-10 xl:sticky xl:top-0 xl:h-0">
        <div className="flex items-center xl:h-screen xl:w-1/3">
          <div className="pointer-events-none">
            <h2 className="aoi aoi__fade aoi__pop-up text-green in-view mb-0 font-title text-[65px] font-extrabold uppercase leading-[52px] xl:mb-4 xl:text-[85px] xl:leading-[68px] xxl:text-[132px] xxl:leading-[105px]">
              Something Pho Everyone
            </h2>
            <p className="aoi aoi__fade aoi__pop-up text-green in-view mb-1 font-copy text-[22px] font-normal leading-loose xl:mb-6 xl:text-[25px] xl:leading-[34px]"></p>
            <a
              href="/nutrition/"
              target=""
              className="c__button astro large-button aoi aoi__fade aoi__pop-up js__handle-click group pointer-events-auto relative inline-block overflow-hidden font-copy text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-[40px] xl:inline-block"
              aria-label=""
            >
              <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                Nutrition Info
              </span>
              <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                Nutrition Info
              </span>
            </a>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Mousewheel]}
        mousewheel={true}
        direction="vertical"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        }}
        className="swiper-container xl:h-screen"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="| flex items-center justify-center">
            <div className="slide-inner | u__wrap w-full items-center justify-end xl:flex xl:h-screen">
              <div className="u__img-contain mx-auto mb-2 h-[220px] w-full max-w-full flex-none md:h-auto md:w-[450px] xl:mx-0 xl:mb-0 xxl:w-[680px]">
                <img
                  src="https://content.phocafe.co.uk/wp-content/uploads/2024/10/Dish-3-3.png"
                  alt="A bowl of Vietnamese pho with rice noodles, cilantro, lime wedge, sliced green onions, and red chili flakes. The soup features a clear broth and chicken pieces, garnished with herbs, adding a pop of color. The bowl is set against a plain background."
                  loading="lazy"
                  className="c__igniteImage"
                  width="907"
                  height="863"
                  decoding="async"
                  style={{
                    transform: `rotate(${(activeIndex - i) * 90}deg)`,
                    transition: 'transform 0.5s',
                  }}
                />
              </div>
              <div className="flex-none origin-top-left text-center xl:w-[300px] xl:rotate-[-5.90deg] xl:text-left">
                <h3 className="text-green font-copy text-[40px] font-medium leading-[40px] xl:mb-2 xl:text-[63.75px] xl:leading-[63.75px]">
                  98% Gluten Free
                </h3>
                <p className="text-green mb-5 font-copy text-lg font-normal leading-[34px] xl:mb-0 xl:text-[25.50px]">
                  Accredited by Coeliac UK
                </p>
                <a
                  href="/nutrition/"
                  target=""
                  className="c__button astro large-button js__handle-click group pointer-events-auto relative inline-block overflow-hidden font-copy text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-[40px] xl:hidden"
                >
                  <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Nutrition Info
                  </span>
                  <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Nutrition Info
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Mobile Nav Buttons */}
        <div className="swiper-button-prev absolute left-3 top-1/4 z-40 w-[21px] rotate-180 cursor-pointer xl:top-1/2 xl:!hidden">
          <img
            src="https://www.phocafe.co.uk/_astro/home-slider-arrow-mobile.BEmC0hXv.svg"
            alt="Previous slide"
            width="21"
            height="23"
          />
        </div>
        <div className="swiper-button-next absolute right-3 top-1/4 z-40 w-[21px] cursor-pointer xl:top-1/2 xl:!hidden">
          <img
            src="https://www.phocafe.co.uk/_astro/home-slider-arrow-mobile.BEmC0hXv.svg"
            alt="Next slide"
            width="21"
            height="23"
          />
        </div>
      </Swiper>
    </section>
  )
}
