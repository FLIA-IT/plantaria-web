interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl bg-cream-deep p-6',
        'border border-transparent',
        'transition-[transform,border-color,box-shadow]',
        'duration-[var(--dur-short)]',
        '[transition-timing-function:var(--ease-out)]',
        'hover:-translate-y-0.5 hover:border-[rgba(124,140,106,0.2)] hover:shadow-sm',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
