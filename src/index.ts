// Copyright (c) Pascal Brand
// MIT License

import type { Swiper, SwiperOptions } from 'swiper/types'

import type { HTMLAttributes } from 'astro/types'

export interface AstroSwiperType extends HTMLAttributes<"div"> {
  options?: SwiperOptions,
  uniqueClass?: string,
  thumbOf?: string,
}

export { default as Swiper } from './components/Swiper.astro'
export { default as SwiperButtonNext } from './components/SwiperButtonNext.astro'
export { default as SwiperButtonPrev } from './components/SwiperButtonPrev.astro'
export { default as SwiperPagination } from './components/SwiperPagination.astro'
export { default as SwiperScrollbar } from './components/SwiperScrollbar.astro'
export { default as SwiperSlide } from './components/SwiperSlide.astro'
export { default as SwiperWrapper } from './components/SwiperWrapper.astro'

export const useSwiper: { [className: string] : Swiper; } = {};
export const useOptions: { [className: string] : SwiperOptions; } = {};
