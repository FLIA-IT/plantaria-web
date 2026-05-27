import { INSTAGRAM_URL } from '../../lib/constants'
import { buildWhatsappUrl } from '../../lib/whatsapp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-charcoal px-6 py-16 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <p className="font-serif text-2xl italic tracking-wide">Plantaria</p>

        <nav aria-label="Redes y contacto" className="flex flex-wrap justify-center gap-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-none focus-visible:underline"
          >
            Instagram @plantaria.sv
          </a>
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-none focus-visible:underline"
          >
            WhatsApp
          </a>
        </nav>

        <p className="font-sans text-xs text-cream/40">
          © {year} Plantaria
        </p>
      </div>
    </footer>
  )
}
