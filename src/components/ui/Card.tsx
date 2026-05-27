interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl bg-cream-deep p-6',
        'transition-shadow duration-300 hover:shadow-md',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
