import { useState } from 'react'
import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-cream-deep/60 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <a
            href="#top"
            className="font-serif text-xl italic text-charcoal transition-colors hover:text-sage focus-visible:outline-none focus-visible:underline"
          >
            Plantaria
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-charcoal transition-colors hover:text-sage focus-visible:outline-none focus-visible:underline"
              >
                {item.label}
              </a>
            ))}
            <WhatsappButton
              message={site.hero.whatsappMessage}
              className="bg-sage text-cream hover:bg-charcoal"
            >
              Escribime
            </WhatsappButton>
          </nav>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="rounded-full p-2 text-charcoal transition-colors hover:bg-cream-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
