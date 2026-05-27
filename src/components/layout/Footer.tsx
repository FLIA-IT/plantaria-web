import { INSTAGRAM_URL } from '../../lib/constants'
import { buildWhatsappUrl } from '../../lib/whatsapp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-charcoal px-6 pt-12 pb-10 text-cream">
      <div className="mx-auto max-w-6xl">
        {/* Hairline top rule */}
        <div
          className="mb-10 h-px w-full"
          style={{ background: 'rgba(234,230,221,0.12)' }}
          aria-hidden="true"
        />

        {/* Letter-close layout — brand left, links right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl italic tracking-wide text-cream">Plantaria</p>
            <p
              className="mt-2 font-sans text-cream/40"
              style={{ fontSize: 'var(--text-xs)' }}
            >
              Jardinería con propósito
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Redes y contacto" className="flex flex-wrap items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-cream/60 underline-offset-4 transition-colors duration-200 hover:text-cream hover:underline focus-visible:outline-none focus-visible:underline"
              style={{ fontSize: 'var(--text-sm)', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
            >
              Instagram @plantaria.sv
            </a>
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-cream/60 underline-offset-4 transition-colors duration-200 hover:text-cream hover:underline focus-visible:outline-none focus-visible:underline"
              style={{ fontSize: 'var(--text-sm)', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
            >
              WhatsApp
            </a>
          </nav>
        </div>

        {/* Copyright — small, separated */}
        <p
          className="mt-10 font-sans text-cream/25"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          © {year} Plantaria
        </p>
      </div>
    </footer>
  )
}
