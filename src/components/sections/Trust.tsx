import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Trust() {
  return (
    <section
      id="testimonios"
      className="px-6"
      style={{
        paddingBlock: 'var(--space-section)',
        background: 'var(--color-cream-deep)',
      }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Lo que dicen" />

        {/* Pull-quote layout — staggered, not equal grid */}
        <div className="space-y-8">
          {site.trust.map((item, i) => (
            <figure
              key={i}
              className={[
                'group relative border-l-2 border-sage/40 pl-7 transition-colors duration-300',
                'hover:border-sage',
                i % 2 === 1 ? 'md:ml-16' : '',
              ].join(' ')}
            >
              {/* Large decorative quote mark */}
              <span
                className="pointer-events-none absolute -left-1 -top-3 font-serif text-sage/20 select-none leading-none"
                style={{ fontSize: '5rem', lineHeight: '1' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote
                className="font-serif italic leading-relaxed text-charcoal"
                style={{ fontSize: 'clamp(1.05rem, 0.9rem + 0.5vw, 1.25rem)' }}
              >
                {item.quote}
              </blockquote>

              <figcaption
                className="mt-4 font-sans text-mauve"
                style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                — {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
