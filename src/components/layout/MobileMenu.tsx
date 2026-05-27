import { useEffect, useRef } from 'react'
import { site } from '../../content/site'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Save previously focused element and move focus into menu when it opens
  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement
      closeRef.current?.focus()
    } else {
      previousFocusRef.current?.focus()
      previousFocusRef.current = null
    }
  }, [open])

  // Close on Escape + focus trap
  useEffect(() => {
    if (!open) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key !== 'Tab') return

      const nav = navRef.current
      if (!nav) return

      const focusable = Array.from(nav.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <nav
      ref={navRef}
      aria-label="Menú mobile"
      aria-hidden={!open}
      className={[
        'fixed inset-0 z-50 flex flex-col bg-cream px-8 py-10 md:hidden',
        'transition-[opacity,transform] duration-[var(--dur-long)]',
        open
          ? 'pointer-events-auto opacity-100 translate-y-0'
          : 'pointer-events-none opacity-0 -translate-y-2',
      ].join(' ')}
      style={{ transitionTimingFunction: 'var(--ease-out)' } as React.CSSProperties}
    >
      {/* Close button */}
      <div className="flex justify-end">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Cerrar menú"
          className="rounded-full p-2 text-charcoal transition-colors duration-200 hover:bg-cream-deep active:bg-cream-deep/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <ul className="mt-10 flex flex-col gap-1">
        {site.nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              className="block font-serif text-2xl italic text-charcoal transition-colors duration-200 hover:text-sage active:text-sage focus-visible:outline-none focus-visible:underline"
              style={{ paddingBlock: '0.65rem', minHeight: '44px' }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hairline bottom accent */}
      <div
        className="mt-auto h-px w-full"
        style={{ background: 'var(--color-charcoal-rule)' }}
        aria-hidden="true"
      />
    </nav>
  )
}
