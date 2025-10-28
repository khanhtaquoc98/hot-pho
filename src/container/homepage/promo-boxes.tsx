import Link from 'next/link'
import React from 'react'

export default function PromoBoxes() {
  return (
    <>
      <section
        className="m__home-promo-boxes module module__1 | straighten overflow-hidden bg-red pb-8 pt-8 xl:rounded-b-[70px] xl:pb-32 xl:pt-20"
        id="module-1"
      >
        <div className="u__wrap grid grid-cols-2 gap-2 sm:gap-4 xl:gap-16">
          <div className="m__home-promo-box | relative flex flex-col overflow-hidden rounded-[20px] px-4 py-5 text-center xl:px-24 xl:py-16">
            <div className="m__home-promo-box-bg | absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-[20px] bg-[#cb1930]" />
            <h2 className="relative z-20 mb-4 font-copy text-[26px] font-medium leading-[26px] text-white xl:mb-8 xl:text-[55px] xl:leading-[65px]">
              Our Menu
            </h2>
            <p className="relative z-20 mb-4 flex flex-1 items-center justify-center text-pretty font-copy text-[0.8rem] font-normal leading-[17px] text-white sm:text-base xl:mb-8 xl:text-3xl xl:leading-9">
              Everything is made fresh in <br />
              each restaurant, every day.
            </p>
            <div>
              <Link
                href="/menus/"
                target=""
                className="c__button astro large-button-black home-promo-box-button js__handle-click group relative z-20 inline-block overflow-hidden font-copy text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-[40px]"
                aria-label=""
              >
                <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                  View Menu
                </span>
                <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                  View Menu
                </span>
              </Link>
            </div>
          </div>
          <div className="m__home-promo-box | relative flex flex-col overflow-hidden rounded-[20px] px-4 py-5 text-center xl:px-24 xl:py-16">
            <div className="m__home-promo-box-bg | absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-[20px] bg-[#cb1930]" />
            <h2 className="relative z-20 mb-4 font-copy text-[26px] font-medium leading-[26px] text-white xl:mb-8 xl:text-[55px] xl:leading-[65px]">
              Pho To Go
            </h2>
            <p className="relative z-20 mb-4 flex flex-1 items-center justify-center text-pretty font-copy text-[0.8rem] font-normal leading-[17px] text-white sm:text-base xl:mb-8 xl:text-3xl xl:leading-9">
              Order for delivery or
              <br />
              Click &amp; Collect
            </p>
            <div>
              <Link
                href="/pho-to-go/"
                target=""
                className="c__button astro large-button-black home-promo-box-button js__handle-click group relative z-20 inline-block overflow-hidden font-copy text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-[40px]"
                aria-label=""
              >
                <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                  Order Now
                </span>
                <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                  Order Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
