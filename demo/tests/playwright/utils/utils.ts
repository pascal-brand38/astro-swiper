// Copyright (c) Pascal Brand
// MIT License

import { test, expect, type Page, type Locator, } from '@playwright/test'

async function testSwiperContainer(page: Page | Locator, name: string) {
  const swiperContainer = page.locator(`#test-${name} .swiper`)
  await expect(swiperContainer).toBeVisible()

  return swiperContainer
}

async function testSwiperSlides(swiperContainer: Page | Locator, name: string) {
  const slides = swiperContainer.locator(`#test-${name} .swiper-slide`)
  await expect(slides.first()).toBeVisible()

  return slides
}

export { testSwiperContainer, testSwiperSlides }
