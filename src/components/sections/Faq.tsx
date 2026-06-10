import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Faq() {
  return (
    <section
      id="preguntas"
      className="px-6"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={site.faq.eyebrow} title={site.faq.title} />

        {/* Native disclosure list — keyboard-native, no JS state.
            Hairline dividers carry the editorial rhythm. */}
        <div className="border-t" style={{ borderColor: 'var(--color-charcoal-rule)' }}>
          {site.faq.items.map((item) => (
            <details
              key={item.question}
              className="group border-b"
              style={{ borderColor: 'var(--color-charcoal-rule)' }}
            >
              <summary
                className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 outline-none transition-colors duration-200 hover:text-sage focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&::-webkit-details-marker]:hidden"
              >
                <h3
                  className="font-serif italic text-charcoal transition-colors duration-200 group-hover:text-sage"
                  style={{ fontSize: 'clamp(1.1rem, 0.95rem + 0.8vw, 1.5rem)', lineHeight: '1.25', overflowWrap: 'anywhere', minWidth: 0 }}
                >
                  {item.question}
                </h3>

                {/* Sage marker — a plus that rotates to an × when open.
                    transform only, reduced-motion safe. */}
                <span
                  className="relative mt-1 block h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
                  style={{ transitionTimingFunction: 'var(--ease-out)' }}
                  aria-hidden="true"
                >
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" style={{ background: 'var(--color-sage)' }} />
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: 'var(--color-sage)' }} />
                </span>
              </summary>

              <p
                className="pb-6 pr-10 font-sans leading-relaxed text-justify text-charcoal/70"
                style={{ fontSize: 'var(--text-base)', maxWidth: '60ch' }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
