// Copyright (c) Pascal Brand
// MIT License

import { test, expect, type Page, type Locator, } from '@playwright/test'

async function _delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function testSwiperContainer(page: Page, name: string) {
  const swiperContainer = page.locator(`#test-${name} .swiper`)
  await expect(swiperContainer).toBeVisible()

  return swiperContainer
}

async function testSwiperSlides(swiperContainer: Locator, name: string) {
  const slides = swiperContainer.locator(`.swiper-slide`)
  await expect(slides.first()).toBeVisible()
  await expect(slides.first()).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)

  return slides
}

async function testSwiperAutoplay(swiperSlides: Locator, autoplayDelay: number) {
  const slide2 = swiperSlides.nth(1) // get 2nd slide (index 1)
  await expect(slide2).not.toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)

  await _delay(autoplayDelay) // wait for autoplay delay + 1s to ensure the slide has changed
  await expect(slide2).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)
}

export { testSwiperContainer, testSwiperSlides, testSwiperAutoplay }


// // Assert pagination bullets are rendered
// const pagination = swiperContainer.locator('.swiper-pagination')
// await expect(pagination).toBeVisible()
// const bullets = pagination.locator('.swiper-pagination-bullet')
// await expect(bullets.first()).toBeVisible()

// // Assert next button is present and navigates slides
// const nextBtn = swiperContainer.locator('.swiper-button-next')
// await expect(nextBtn).toBeVisible()
// await nextBtn.click()

// // Verify slide state changes (Swiper updates classes on active slide)
// const activeSlide = swiperContainer.locator('.swiper-slide-active')
// await expect(activeSlide).toBeVisible()
