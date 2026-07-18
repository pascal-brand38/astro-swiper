// Copyright (c) Pascal Brand
// MIT License

import { test, expect } from '@playwright/test'
import { testSwiperContainer, testSwiperSlides } from './utils/utils'

const _name = 'Autoplay'

test.describe(`${_name} Tests`, () => {
  test('Load swiper and support slide navigation', async ({ page }) => {
    await page.goto('/')

    // Assert Swiper container exists
    const swiperContainer = await testSwiperContainer(page, _name)

    // Assert slides are present
    const slides = await testSwiperSlides(swiperContainer, _name)

  })
})
