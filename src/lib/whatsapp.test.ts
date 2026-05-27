import { buildWhatsappUrl } from './whatsapp'
import { WHATSAPP_NUMBER } from './constants'

test('construye url wa.me con el número configurado', () => {
  expect(buildWhatsappUrl()).toBe(`https://wa.me/${WHATSAPP_NUMBER}`)
})

test('codifica el mensaje opcional en el query param text', () => {
  const url = buildWhatsappUrl('Hola, quiero una asesoría')
  expect(url).toBe(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20asesor%C3%ADa`)
})
