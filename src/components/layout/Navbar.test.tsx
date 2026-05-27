import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
test('muestra la marca y abre el menú mobile al click', async () => {
  render(<Navbar />)
  expect(screen.getByText('Plantaria')).toBeInTheDocument()
  const toggle = screen.getByRole('button', { name: /abrir menú/i })
  await userEvent.click(toggle)
  expect(screen.getByRole('navigation', { name: /menú mobile/i })).toBeVisible()
})
