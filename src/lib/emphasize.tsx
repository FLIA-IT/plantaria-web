import type { ReactNode } from 'react'

export function emphasize(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong
        key={i}
        className="bg-[var(--color-olive)] px-1.5 py-0.5 rounded-md box-decoration-clone"
        style={{ color: 'white' }}
      >
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  )
}
