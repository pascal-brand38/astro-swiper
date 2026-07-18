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
  const slides = swiperContainer.locator(`#test-${name} .swiper-slide`)
  await expect(slides.first()).toBeVisible()

  return slides
}

async function testSwiperAutoplay(swiperSlides: Locator, autoplayDelay: number) {
  await _delay(autoplayDelay + 100) // wait for autoplay delay + 1s to ensure the slide has changed
  await expect(swiperSlides.nth(1)).toBeVisible()
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
