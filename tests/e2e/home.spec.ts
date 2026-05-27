import { test, expect } from '@playwright/test'

test('carga el hero', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Jardines que respiran vida' })).toBeVisible()
})

test('el CTA del hero apunta a wa.me', async ({ page }) => {
  await page.goto('/')
  const cta = page.getByRole('link', { name: /escribime por whatsapp/i }).first()
  await expect(cta).toHaveAttribute('href', /^https:\/\/wa\.me\//)
  await expect(cta).toHaveAttribute('target', '_blank')
})

test('navegación por anclas a productos', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#productos')).toBeAttached()
})
