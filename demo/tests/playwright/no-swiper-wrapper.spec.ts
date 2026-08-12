// Copyright (c) Pascal Brand
// MIT License

import { test, expect, } from '@playwright/test'
import { getLogs, getTestName, } from './utils/utils'

const _testName = getTestName(import.meta.url)

test.describe(`${_testName} Tests`, () => {
  test(`Swiper ${_testName}`, async ({ page }) => {
    const logs = getLogs(page)

    await page.goto(`/${_testName}`)
    const nErrors = logs.filter(log => log.includes('astro-swiper')).length;
    const nWrapperErrors = logs.filter(log => log.includes('SwiperWrapper')).length;

    expect(nErrors, `Expected 1 error, but found ${nErrors}`).toBe(1);
    expect(nWrapperErrors, `Expected 1 SwiperWrapper error, but found ${nWrapperErrors}`).toBe(1);
  })
})
