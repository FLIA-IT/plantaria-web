import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative px-6"
      style={{ paddingBlock: 'var(--space-section-loose)' }}
    >
      {/* Subtle top hairline */}
      <div className="mx-auto max-w-5xl">
        <div className="hairline mb-12 md:mb-16" />
      </div>

      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[5fr_7fr] md:gap-16">
        <figure
          className="aspect-[3/4] w-full overflow-hidden rounded-3xl"
          style={{ background: 'var(--color-sage-muted)' }}
        >
          <img
            src={site.about.image}
            alt={site.about.imageAlt}
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </figure>

        {/* Text */}
        <div className="pt-0 md:pt-8">
          <SectionHeading eyebrow={site.about.eyebrow} title={site.about.title} />
          <div className="space-y-5" style={{ maxWidth: '52ch' }}>
            {site.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-sans leading-relaxed text-justify text-charcoal/75"
                style={{ fontSize: 'var(--text-base)' }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Botanical accent rule */}
          <div
            className="mt-10 h-px w-16"
            style={{ background: 'var(--color-sage)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
