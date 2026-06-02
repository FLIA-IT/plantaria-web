import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { Services } from './Services'
import { Products } from './Products'
import { Projects } from './Projects'
import { site } from '../../content/site'
test('Hero muestra título y CTA de WhatsApp', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { name: site.hero.title })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: site.hero.cta })).toBeInTheDocument()
})
test('Services renderiza un card por categoría', () => {
  render(<Services />)
  site.services.categories.forEach((c) => { expect(screen.getByText(c.title)).toBeInTheDocument() })
})
test('Products renderiza un card por producto', () => {
  render(<Products />)
  site.products.items.forEach((p) => { expect(screen.getByText(p.name)).toBeInTheDocument() })
})
test('Projects renderiza el título de cada proyecto', () => {
  render(<Projects />)
  site.projects.items.forEach((p) => { expect(screen.getByText(p.subtitle)).toBeInTheDocument() })
})
