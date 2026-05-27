/* Hallmark · component: anchor-button · genre: editorial · theme: Botánica (project tokens)
 * states: default · hover · focus · active · disabled
 * contrast: pass (46–50)
 */
import { buildWhatsappUrl } from '../../lib/whatsapp'

interface WhatsappButtonProps {
  message?: string
  children: React.ReactNode
  className?: string
}

export function WhatsappButton({ message, children, className = '' }: WhatsappButtonProps) {
  const href = buildWhatsappUrl(message)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'inline-flex items-center justify-center gap-2',
        'rounded-full px-6 py-3',
        'min-h-[44px]',
        'font-sans text-sm font-semibold tracking-wide',
        'transition-colors duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage',
        'bg-sage text-cream hover:bg-charcoal',
        className,
      ].join(' ')}
    >
      {children}
    </a>
  )
}
