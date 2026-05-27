import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { Services } from './Services'
import { Products } from './Products'
import { site } from '../../content/site'
test('Hero muestra título y CTA de WhatsApp', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { name: site.hero.title })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: site.hero.cta })).toBeInTheDocument()
})
test('Services renderiza un card por servicio', () => {
  render(<Services />)
  site.services.forEach((s) => { expect(screen.getByText(s.title)).toBeInTheDocument() })
})
test('Products renderiza un card por producto', () => {
  render(<Products />)
  site.products.forEach((p) => { expect(screen.getByText(p.name)).toBeInTheDocument() })
})
