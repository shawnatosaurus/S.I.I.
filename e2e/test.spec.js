// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://shawnatosaurus.github.io/S.I.I./')
})

test('Increment', async ({ page }) => {

  await page.pause()
  await page.locator('#increment').click()

  const zero = page.locator('#zero');

  await expect(zero).toHaveText('1')

});

test('Descrement', async ({ page }) => {
  await page.locator('#increment').click()
  await page.locator('#decrement').click()


  const zero = page.locator('#zero');

  await expect(zero).toHaveText('1')
});
