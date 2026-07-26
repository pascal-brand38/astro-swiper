// Copyright (c) Pascal Brand
// MIT License

import { test, expect } from '@playwright/test'
import { getTestName, testSwiperAutoplay, testSwiperContainer, testSwiperSlides } from './utils/utils'

const _testName = getTestName(import.meta.url)

test.describe(`${_testName} Tests`, () => {
  test(`Swiper ${_testName}`, async ({ page }) => {
    await page.goto('/')

    // Assert Swiper container exists
    const swiperContainer = await testSwiperContainer(page, _testName)

    // Assert slides are present
    const slides = await testSwiperSlides(swiperContainer, _testName)

    // Assert autoplay functionality
    // await testSwiperAutoplay(slides, 700) // Assuming 3-second autoplay delay
  })
})
