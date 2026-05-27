interface SectionHeadingProps {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={['mb-10', className].join(' ')}>
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
          {eyebrow}
        </p>
      )}
      <h2
        className="font-serif font-normal text-charcoal"
        style={{ fontSize: 'var(--text-h2)', lineHeight: '1.15' }}
      >
        {title}
      </h2>
    </div>
  )
}
