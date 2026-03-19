// Copyright (c) Pascal Brand
// MIT License

import type { Swiper, SwiperOptions } from 'swiper/types';
import type { HTMLAttributes } from 'astro/types';

/** Swiper options for the Astro component.
 * Basically the same as the original SwiperOptions, but extended
 * with new capabilities
*/
export interface AstroSwiperOptions extends SwiperOptions {
  /** options specific to astro-swiper component */
  astro?: {
    /** intersection observer options: an observer can be added to control the swiper when it appears / disappears in the screen.
     * The observer is created using IntersectionObserver
     * The behavior of the observer is controlled by the following properties
     * When observer is not provided, no observer is created.
     */
    intersectionObserver?: {
      /** true to initialize the swiper when the element appears in the screen */
      initSwiper?: boolean;
      /** true to disconnect the observer once the swiper is initialized */
      disconnectOnInit?: boolean;
      /** true to start and stop the autoplay when the swiper appears and disappears from the screen, respectively. */
      controlAutoplay?: boolean;
      /** options for the IntersectionObserver */
      options?: IntersectionObserverInit;
    }
    /** TODO: uniqueClass and linkToThumbUniqueClass may be part of it */
  }
};

/** properties passed to the <Swiper> component
 * It extends a div (that is may have class, style,...), plus other attributes
 * Note that all other components (<SwiperSlide>, <SwiperButtonNext>...) extends a div only
 */
export interface AstroSwiperType extends HTMLAttributes<'div'> {
  /** swiper options, to set autoplay, navigation, thumbnails,...
   * check fullset of options: https://swiperjs.com/swiper-api#parameters
   */
  options?: AstroSwiperOptions;

  /** unique class to be able to retrieve the swiper instance, if required
   * Mandatory on thumbnail for example
   * When undefined, an automatic unique class name is provided
   */
  uniqueClass?: string;

  /** a thumbnail slider is build, this parameter is provided on the main slider
   * (the one with big slides, not the one to track the progress) and equal
   * the unique class of the thumbnail slider
   */
  linkToThumbUniqueClass?: string;

  /** add the default swiper class, true by default */
  addDefaultClass?: boolean;

  /** useCustomElement, if true, the component will be rendered as a custom element, otherwise as a div.
   * This option is true by default to keep legacy.
   * It is there to be as close as possible to the original swiper structure, that is a div with class "swiper"
   * and not a custom element.
   * It is also to avoid issues with some swiper modules that are looking for the "swiper" class on the parent
   * element, and not on the custom element.
   */
  useCustomElement?: boolean;
}

/** Astro components exports, used to create a swiper */
export { default as Swiper } from './components/Swiper.astro';
export { default as SwiperButtonNext } from './components/SwiperButtonNext.astro';
export { default as SwiperButtonPrev } from './components/SwiperButtonPrev.astro';
export { default as SwiperPagination } from './components/SwiperPagination.astro';
export { default as SwiperScrollbar } from './components/SwiperScrollbar.astro';
export { default as SwiperSlide } from './components/SwiperSlide.astro';
export { default as SwiperWrapper } from './components/SwiperWrapper.astro';

/** pointer to the swiper structure that was created using "new", even when not initialized */
declare class AstroSwiper extends HTMLElement {
  astroSwiper: Swiper | undefined;
}

// !TODO Deprecate fully in next major version
/** @deprecated: use getSwiperFromUniqueSelector() instead */
export function getSwiperFromUniqueClass(uniqueClass: string): Swiper | undefined {
  return getSwiperFromUniqueSelector(`.${uniqueClass}`);
}

/** Retrieve the swiper instance from the unique selector provided when creating the swiper
 * @param uniqueSelector the unique selector provided when creating the swiper,
 * @example const swiper = getSwiperFromUniqueSelector('.my-unique-class')
 *          const swiper = getSwiperFromUniqueSelector('#my-unique-id')
 */
export function getSwiperFromUniqueSelector(uniqueSelector: string): Swiper | undefined {
  if (!/^[.#]/.test(uniqueSelector)) {
    console.warn("Used selector doesn't contain class or ID selector sign");
  }

  const element = document.querySelector(uniqueSelector);

  if (!element) {
    console.warn(`astro-swiper: no element found with selector "${uniqueSelector}"`);
    return undefined;
  }

  // Check if element is the customElement with astroSwiper property
  const customElement = element as AstroSwiper;
  if (customElement.astroSwiper) return customElement.astroSwiper;

  // Check if element is a <div/> wrapper with customElement child
  const childElement = element.firstElementChild as AstroSwiper;
  if (childElement?.astroSwiper) return childElement.astroSwiper;

  console.warn(
    `astro-swiper: element found with selector "${uniqueSelector}" but no swiper instance found. ` +
      `Expected either a custom element with astroSwiper property or a <div/> containing such an element.`,
  );

  return undefined;
}
