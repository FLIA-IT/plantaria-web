import { render, screen } from '@testing-library/react'
import App from './App'

test('renderiza la marca Plantaria', () => {
  render(<App />)
  expect(screen.getByText(/plantaria/i)).toBeInTheDocument()
})
