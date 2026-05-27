import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section
      id="asesorias"
      className="px-6"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section-loose)',
        background: 'var(--color-cream-deep)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading — left-aligned, not centred */}
        <SectionHeading title="Cómo puedo ayudarte" />

        {/* Asymmetric grid — first card spans more, breaks equal-tile pattern */}
        <div className="grid gap-px md:grid-cols-[5fr_3fr_4fr]" style={{ background: 'var(--color-charcoal-rule)' }}>
          {site.services.map((service, i) => (
            <article
              key={service.title}
              className="group flex flex-col justify-between bg-cream-deep p-7 transition-colors duration-200 hover:bg-cream md:p-8"
              style={{
                /* First card has more vertical padding for hierarchy */
                paddingTop: i === 0 ? 'calc(var(--space-md) * 2)' : undefined,
              }}
            >
              {/* Ordinal mark — botanical style */}
              <span
                className="mb-6 block font-serif text-mauve/60"
                style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3
                  className="font-serif italic text-charcoal group-hover:text-sage transition-colors duration-200"
                  style={{ fontSize: 'clamp(1.25rem, 1rem + 1vw, 1.75rem)', lineHeight: '1.2' }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-3 font-sans leading-relaxed text-charcoal/65"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover accent rule */}
              <div
                className="mt-6 h-px w-0 bg-sage transition-all duration-300 group-hover:w-8"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
