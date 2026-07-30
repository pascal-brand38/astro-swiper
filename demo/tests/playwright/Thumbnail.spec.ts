// Copyright (c) Pascal Brand
// MIT License

import { test, expect, } from '@playwright/test'
import { getTestName, testSwiperContainer, testSwiperSlides, getActiveSlideIndex, delay } from './utils/utils'

const _testName = getTestName(import.meta.url)

test.describe(`${_testName} Tests`, () => {
  test(`Swiper ${_testName}`, async ({ page }) => {
    await page.goto('/')

    // Assert Swiper container exists
    const swiperContainerMain = await testSwiperContainer(page, _testName)
    const swiperContainerThumbnail = await testSwiperContainer(page, _testName, ".myswiper-thumbnail")

    // Assert slides are present
    const slidesMain = await testSwiperSlides(swiperContainerMain, _testName)
    const slidesThumbnail = await testSwiperSlides(swiperContainerThumbnail, _testName)

    // Assert active slides are the same
    const activeMain = await getActiveSlideIndex(slidesMain)
    const activeThumbnail = await getActiveSlideIndex(slidesThumbnail, 'swiper-slide-thumb-active')
    expect(activeMain, `Initial indexes do not match:  ${activeMain} !== ${activeThumbnail} `).toBe(activeThumbnail)

    // click on the next slide, and assert that they are the same again
    const nextBtn = swiperContainerMain.locator('.swiper-button-next')
    await nextBtn.click()
    const activeMain2 = await getActiveSlideIndex(slidesMain)
    const activeThumbnail2 = await getActiveSlideIndex(slidesThumbnail, 'swiper-slide-thumb-active')
    expect(activeMain2, `Indexes do not match after navigation: ${activeMain2} !== ${activeThumbnail2}`).toBe(activeThumbnail2)

    // click on thumbnail slide, and assert that they are the same again
    const slideThumbnail3 = slidesThumbnail.nth(0)
    await slideThumbnail3.click()
    const activeMain3 = await getActiveSlideIndex(slidesMain)
    const activeThumbnail3 = await getActiveSlideIndex(slidesThumbnail, 'swiper-slide-thumb-active')
    expect(activeMain3, `Indexes do not match after thumbnail click: ${activeMain3} !== ${activeThumbnail3}`).toBe(activeThumbnail3)
  })
})
