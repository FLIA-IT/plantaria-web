import { render, screen } from '@testing-library/react'
import { WhatsappButton } from './WhatsappButton'
import { WHATSAPP_NUMBER } from '../../lib/constants'
test('renderiza un link a wa.me con el mensaje codificado y atributos seguros', () => {
  render(<WhatsappButton message="Hola">Escribime</WhatsappButton>)
  const link = screen.getByRole('link', { name: /escribime/i })
  expect(link).toHaveAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=Hola`)
  expect(link).toHaveAttribute('target', '_blank')
  expect(link).toHaveAttribute('rel', 'noopener noreferrer')
})
