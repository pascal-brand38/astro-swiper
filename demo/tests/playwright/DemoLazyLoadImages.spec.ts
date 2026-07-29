// Copyright (c) Pascal Brand
// MIT License

import { test, } from '@playwright/test'
import { getTestName, testSwiper, type Config } from './utils/utils'

const config: Config = {
  testName: getTestName(import.meta.url),
  lazyload: true, // Enable lazy load testing
}

test.describe(`${config.testName} Tests`, () => {
  testSwiper(config)
})
