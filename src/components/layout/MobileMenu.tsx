import { site } from '../../content/site'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <nav
      aria-label="Menú mobile"
      aria-hidden={!open}
      className={[
        'fixed inset-0 z-50 flex flex-col bg-cream px-8 py-12 md:hidden',
        'transition-opacity duration-300',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      ].join(' ')}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="rounded-full p-2 text-charcoal transition-colors hover:bg-cream-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <ul className="mt-10 flex flex-col gap-6">
        {site.nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              className="font-serif text-2xl italic text-charcoal transition-colors hover:text-sage focus-visible:outline-none focus-visible:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
