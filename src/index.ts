// Copyright (c) Pascal Brand
// MIT License

import type { Swiper, SwiperOptions } from 'swiper/types'
import type { HTMLAttributes } from 'astro/types'

/** properties passed to the <Swiper> component
 * It extends a div (that is may have class, style,...), plus other attributes
 * Note that all other components (<SwiperSlide>, <SwiperButtonNext>...) extends a div only
 */
export interface AstroSwiperType extends HTMLAttributes<"div"> {
  /** swiper options, to set autoplay, navigation, thumbnails,...
   * check fullset of options: https://swiperjs.com/swiper-api#parameters
   */
  options?: SwiperOptions,

  /** unique class to be able to retrieve the swiper instance, if required
   * Mandatory on thumbnail for example
   * When undefined, an automatic unique class name is provided
   */
  uniqueClass?: string,

  /** a thumbnail slider is build, this parameter is provided on the main slider
   * (the one with big slides, not the one to track the progress) and equal
   * the unique class of the thumbnail slider
   */
  linkToThumbUniqueClass?: string,
}

/** astro components exported, used to create a swiper */
export { default as Swiper } from './components/Swiper.astro'
export { default as SwiperButtonNext } from './components/SwiperButtonNext.astro'
export { default as SwiperButtonPrev } from './components/SwiperButtonPrev.astro'
export { default as SwiperPagination } from './components/SwiperPagination.astro'
export { default as SwiperScrollbar } from './components/SwiperScrollbar.astro'
export { default as SwiperSlide } from './components/SwiperSlide.astro'
export { default as SwiperWrapper } from './components/SwiperWrapper.astro'

declare class AstroSwiper extends HTMLElement {
  /** pointer to the swiper structure that was created using "new",
   *  even when not initialized */
  astroSwiper: Swiper | undefined
}

export function getSwiperFromUniqueClass(uniqueClass: string): Swiper | undefined {
  return (document.querySelector(`.${uniqueClass}`) as AstroSwiper)?.astroSwiper
}
