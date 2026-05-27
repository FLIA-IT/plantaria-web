import { render, screen } from '@testing-library/react'
import App from './App'
import { site } from './content/site'
test('renderiza el hero y el footer', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: site.hero.title })).toBeInTheDocument()
  expect(screen.getByText(/instagram @plantaria.sv/i)).toBeInTheDocument()
})
