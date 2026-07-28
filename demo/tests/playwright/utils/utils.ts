// Copyright (c) Pascal Brand
// MIT License

import { fileURLToPath } from 'url';
import path from 'path';
import { test, expect, type Page, type Locator, } from '@playwright/test'

interface Config {
  testName: string;
  autoplayDelay?: number;
  pagination?: boolean;
  navigation?: boolean;
}

async function _delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getTestName(url: string): string {
  const __filename = fileURLToPath(url);
  const currentFile = path.basename(__filename);
  return currentFile.replace('.spec.ts', '')
}

async function _testSwiperContainer(page: Page, testName: string) {
  const swiperContainer = page.locator(`#test-${testName} .swiper`)
  await expect(swiperContainer).toBeVisible()

  return swiperContainer
}

async function _testSwiperSlides(swiperContainer: Locator, testName: string) {
  const slides = swiperContainer.locator(`.swiper-slide`)
  await expect(slides.first()).toBeVisible()
  await expect(slides.first()).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)

  return slides
}

async function _testSwiperAutoplay(swiperSlides: Locator, autoplayDelay: number) {
  const slide2 = swiperSlides.nth(1) // get 2nd slide (index 1)
  await expect(slide2).not.toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)

  await _delay(autoplayDelay) // wait for autoplay delay + 1s to ensure the slide has changed
  await expect(slide2).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)
}

async function _testSwiperPagination(swiperContainer: Locator, swiperSlides: Locator) {
  const pagination = swiperContainer.locator('.swiper-pagination')
  await expect(pagination).toBeVisible()
  const bullets = pagination.locator('.swiper-pagination-bullet')
  await expect(bullets.first()).toBeVisible()

  // check 3rd bullet is visible and click it to navigate to the 3rd slide
  const bullet3 = bullets.nth(2) // get 3rd bullet (index 2)
  await expect(bullet3).toBeVisible()
  await bullet3.click()

  // Verify slide state changes (Swiper updates classes on active slide)
  await expect(bullet3).toHaveClass(/(^|\s)swiper-pagination-bullet-active(\s|$)/)
  const slide3 = swiperSlides.nth(2) // get 3rd slide (index 2)
  await expect(slide3).toBeVisible()
  await expect(slide3).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)
}

async function _testSwiperNavigation(swiperContainer: Locator, swiperSlides: Locator) {
  const prevBtn = swiperContainer.locator('.swiper-button-prev')
  const nextBtn = swiperContainer.locator('.swiper-button-next')
  const slide1 = swiperSlides.nth(0) // get 1st slide (index 0)
  const slide2 = swiperSlides.nth(1) // get 2nd slide (index 1)

  await expect(prevBtn).toBeVisible()
  await expect(nextBtn).toBeVisible()

  await expect(slide1).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)
  await expect(prevBtn).toBeDisabled() // prev button should be disabled on first slide
  await expect(nextBtn).not.toBeDisabled() // next button should be enabled on first slide

  await nextBtn.click()
  await expect(slide2).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)
  await expect(prevBtn).not.toBeDisabled() // prev button should be enabled on second slide
  await expect(nextBtn).not.toBeDisabled() // next button should be enabled on second slide

  await prevBtn.click()
  await expect(slide1).toHaveClass(/(^|\s)swiper-slide-active(\s|$)/)
  await expect(prevBtn).toBeDisabled() // prev button should be disabled on first slide
  await expect(nextBtn).not.toBeDisabled() // next button should be enabled on first slide
}

async function testSwiper(config: Config) {
  test(`Swiper ${config.testName}`, async ({ page }) => {
    await page.goto('/')

    // Assert Swiper container exists
    const swiperContainer = await _testSwiperContainer(page, config.testName)

    // Assert slides are present
    const slides = await _testSwiperSlides(swiperContainer, config.testName)

    // Assert autoplay functionality
    if (config.autoplayDelay) {
      await _testSwiperAutoplay(slides, config.autoplayDelay)
    }

    // Assert pagination functionality
    if (config.pagination) {
      await _testSwiperPagination(swiperContainer, slides)
    }

    // Assert navigation functionality
    if (config.navigation) {
      await _testSwiperNavigation(swiperContainer, slides)
    }
  })
}

export { getTestName, testSwiper, }
export type { Config }


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
