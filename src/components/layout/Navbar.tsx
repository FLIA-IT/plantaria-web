import { useEffect, useState } from 'react'
import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={[
          'sticky top-0 z-40 w-full transition-shadow duration-300',
          scrolled
            ? 'border-b border-charcoal/10 bg-cream/90 backdrop-blur-md shadow-sm'
            : 'border-b border-cream-deep/60 bg-cream/80 backdrop-blur-md',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <a
            href="#top"
            aria-label="Plantaria — inicio"
            className="inline-flex items-center rounded-full transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          >
            <img
              src="/logo-plantaria.png"
              alt="Plantaria"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop nav — edge-aligned minimal (N9) */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative font-sans text-sm text-charcoal/80 transition-colors duration-200 hover:text-charcoal focus-visible:outline-none focus-visible:underline after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-sage after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <WhatsappButton
              message={site.hero.whatsappMessage}
              className="bg-sage text-cream hover:bg-charcoal active:translate-y-px"
            >
              Escribime
            </WhatsappButton>
          </nav>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="rounded-full p-2 text-charcoal transition-colors duration-200 hover:bg-cream-deep active:bg-cream-deep/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage md:hidden"
            style={{ minHeight: '44px', minWidth: '44px' }}
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
