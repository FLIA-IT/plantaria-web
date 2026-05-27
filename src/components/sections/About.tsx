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
        {/* Portrait placeholder — botanical atmosphere */}
        <div
          className="botanical-placeholder aspect-[3/4] w-full rounded-3xl"
          aria-hidden="true"
          role="img"
          aria-label="Foto de la consultora (próximamente)"
        >
          {/* Soft inner leaf-vein accent */}
          <div
            className="h-full w-full rounded-3xl"
            style={{
              background: `
                linear-gradient(135deg, transparent 40%, rgba(124,140,106,0.08) 100%)
              `,
            }}
          />
        </div>

        {/* Text */}
        <div className="pt-0 md:pt-8">
          <SectionHeading title={site.about.title} />
          <p
            className="font-sans leading-relaxed text-charcoal/75"
            style={{ fontSize: 'var(--text-base)', maxWidth: '52ch' }}
          >
            {site.about.body}
          </p>

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
