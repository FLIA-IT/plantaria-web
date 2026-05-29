import { buildWhatsappUrl } from '../../lib/whatsapp'

interface FloatingWhatsappProps {
  message?: string
  label?: string
}

export function FloatingWhatsapp({
  message,
  label = 'Escribinos por WhatsApp',
}: FloatingWhatsappProps) {
  const href = buildWhatsappUrl(message)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        'fixed bottom-6 right-6 z-50',
        'inline-flex h-12 w-12 items-center justify-center',
        'rounded-full',
        'bg-cream text-olive',
        'shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)]',
        'transition-all duration-300',
        'hover:bg-cream-deep hover:text-olive-deep hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olive',
      ].join(' ')}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.03 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.91-5.34 11.91-11.92 0-3.18-1.24-6.18-3.43-8.43Zm-8.49 18.34h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.72.97 1-3.62-.24-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34Z" />
      </svg>
    </a>
  )
}
