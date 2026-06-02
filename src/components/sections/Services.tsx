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
        <SectionHeading eyebrow={site.services.eyebrow} title={site.services.title} />

        {/* 2x2 editorial grid of service categories with bullets */}
        <div
          className="grid gap-px md:grid-cols-2"
          style={{ background: 'var(--color-charcoal-rule)' }}
        >
          {site.services.categories.map((category, i) => (
            <article
              key={category.title}
              className="group flex flex-col bg-cream-deep p-7 transition-colors duration-200 hover:bg-cream md:p-10"
            >
              {/* Ordinal mark */}
              <span
                className="mb-6 block font-serif text-mauve/60"
                style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3
                className="font-serif italic text-charcoal group-hover:text-sage transition-colors duration-200"
                style={{ fontSize: 'clamp(1.25rem, 1rem + 1vw, 1.75rem)', lineHeight: '1.2' }}
              >
                {category.title}
              </h3>

              <ul className="mt-6 space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 font-sans leading-relaxed text-charcoal/70"
                    style={{ fontSize: 'var(--text-sm)' }}
                  >
                    <span
                      className="absolute left-0 top-[0.65em] block h-1.5 w-1.5 rounded-full"
                      style={{ background: 'var(--color-sage)' }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover accent rule */}
              <div
                className="mt-8 h-px w-0 bg-sage transition-all duration-300 group-hover:w-8"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
