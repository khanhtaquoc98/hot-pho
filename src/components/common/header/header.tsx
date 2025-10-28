/* eslint-disable @next/next/no-img-element */
import { URL } from '@/utils/constants'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="l__header | xxl:pt-10 fixed left-0 right-0 top-0 z-50 h-auto w-screen pt-4 xl:pt-6">
        <div className="u__wrap">
          <div className="l__header-inner | xsm:gap-x-3 relative z-20 flex items-center gap-x-2 rounded-[19px] bg-black px-5 py-2 md:gap-x-5 xl:overflow-hidden xl:px-5 xl:py-4">
            <div className="l__header-logo | xsm:w-[80px] w-[60px] flex-none sm:h-[34px] sm:w-auto xl:h-[49px]">
              <Link href={URL.HOME}>
                <img
                  src="https://www.phocafe.co.uk/_astro/header-logo.Duh7z19x.svg"
                  alt="Pho Logo"
                  width="130"
                  height="54"
                  className="h-full w-full object-contain"
                ></img>
              </Link>
            </div>

            <div className="l__header-nav l__header-nav-mobile | xsm:gap-x-3 flex grow justify-end gap-x-2 md:gap-x-5 xl:hidden">
              <div className="l__header-nav-item | align-center xsm:px-1 js__nav-location-search grid cursor-pointer items-center">
                <Link
                  href="#"
                  className="pointer-events-none block h-[22px] w-[22px]"
                >
                  <img
                    src="https://www.phocafe.co.uk/_astro/nav-mobile-location.CjdUWzK6.svg"
                    className="pointer-events-none h-[22px] w-[22px]"
                    width="22px"
                    height="22px"
                    alt="Locations Icon"
                  />
                </Link>
              </div>
              <div className="l__header-nav-item">
                <button className="c__button astro font-copy button js__open-popup js__open-popup js__open-popup js__handle-click group relative inline-block cursor-pointer overflow-hidden text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-10">
                  <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Book A Table
                  </span>
                  <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Book A Table
                  </span>
                </button>
              </div>
            </div>

            <div className="l__header-nav l__header-nav-desktop | hidden grow flex-wrap justify-end gap-x-2 xl:flex">
              <div className="l__header-nav-item | relative flex-none xl:mr-2">
                <a
                  href="/menus/"
                  target=""
                  className="c__button astro font-copy default js__handle-click group relative inline-block overflow-hidden text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-10"
                >
                  <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                  <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                </a>
                <div className="l__header-nav-item-underline-wrapper | absolute bottom-[15px] left-0 w-full px-2 md:px-3">
                  <div className="relative w-full overflow-hidden">
                    <div className="l__header-nav-item-underline | w-full -translate-x-[-101%] border-b border-white"></div>
                  </div>
                </div>
              </div>
              <div className="l__header-nav-item | relative flex-none xl:mr-2">
                <a
                  href="/menus/"
                  target=""
                  className="c__button astro font-copy default js__handle-click group relative inline-block overflow-hidden text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-10"
                >
                  <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                  <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                </a>
                <div className="l__header-nav-item-underline-wrapper | absolute bottom-[15px] left-0 w-full px-2 md:px-3">
                  <div className="relative w-full overflow-hidden">
                    <div className="l__header-nav-item-underline | w-full -translate-x-[-101%] border-b border-white"></div>
                  </div>
                </div>
              </div>
              <div className="l__header-nav-item | relative flex-none xl:mr-2">
                <a
                  href="/menus/"
                  target=""
                  className="c__button astro font-copy default js__handle-click group relative inline-block overflow-hidden text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-10"
                >
                  <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                  <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                </a>
                <div className="l__header-nav-item-underline-wrapper | absolute bottom-[15px] left-0 w-full px-2 md:px-3">
                  <div className="relative w-full overflow-hidden">
                    <div className="l__header-nav-item-underline | w-full -translate-x-[-101%] border-b border-white"></div>
                  </div>
                </div>
              </div>
              <div className="l__header-nav-item | relative flex-none xl:mr-2">
                <a
                  href="/menus/"
                  target=""
                  className="c__button astro font-copy default js__handle-click group relative inline-block overflow-hidden text-[22px] text-base font-medium leading-[30px] text-white md:text-xl md:leading-10"
                >
                  <span className="l__header-nav-item-initial | duration-450 block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                  <span className="l__header-nav-item-hover | duration-450 absolute top-full block overflow-hidden whitespace-nowrap px-3 py-1 transition-transform group-hover:-translate-y-full xl:py-0">
                    Menus
                  </span>
                </a>
                <div className="l__header-nav-item-underline-wrapper | absolute bottom-[15px] left-0 w-full px-2 md:px-3">
                  <div className="relative w-full overflow-hidden">
                    <div className="l__header-nav-item-underline | w-full -translate-x-[-101%] border-b border-white"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="l__header-hamburger | flex w-[31px] flex-none items-center text-center md:w-14">
              {' '}
              <button
                className="l__header-hamburger-inner l__header-hamburger-open js__open-popup | group relative h-[13px] w-[31px] cursor-pointer md:h-[18px] md:w-14"
                data-popup="main-nav"
                aria-label="Open main navigation"
                aria-expanded="false"
                aria-controls="main-navigation"
              >
                {' '}
                <span className="l__header-hamburger-line l__header-hamburger-line-top | duration-250 absolute left-0 top-0 h-1 w-full rounded-[29px] bg-white transition-transform group-hover:-translate-x-px group-hover:-rotate-6 md:h-[5.87px]" />{' '}
                <span className="l__header-hamburger-line l__header-hamburger-line-bottom | duration-250 absolute left-0 top-[9px] h-1 w-full rounded-[29px] bg-white transition-transform group-hover:translate-y-1.5 group-hover:rotate-12 md:top-[11.74px] md:h-[5.87px]" />{' '}
              </button>{' '}
              <button
                className="l__header-hamburger-inner l__header-hamburger-close js__close-popups | duration-450 relative hidden cursor-pointer transition-transform hover:rotate-180"
                aria-label="Close main navigation"
                aria-expanded="true"
                aria-controls="main-navigation"
              >
                {' '}
                <img
                  src="/_astro/popup-close.HgUNgkJN.svg"
                  alt="Close popup icon"
                />{' '}
              </button>{' '}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
