interface SectionHeadingProps {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={['mb-10 md:mb-12', className].join(' ')}>
      {eyebrow && (
        <p
          className="mb-3 font-sans font-semibold uppercase tracking-[0.18em] text-mauve"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-serif font-normal text-charcoal"
        style={{ fontSize: 'var(--text-h2)', lineHeight: '1.1', overflow: 'hidden', overflowWrap: 'anywhere' }}
      >
        {title}
      </h2>
    </div>
  )
}
