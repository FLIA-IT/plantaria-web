import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section
      id="sobre-mi"
      className="px-6"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Portrait placeholder */}
        <div
          className="aspect-[4/5] w-full rounded-2xl bg-mauve/30"
          aria-hidden="true"
          style={{ backgroundImage: 'none' }}
        >
          {/* TODO: reemplazar por retrato real */}
        </div>

        {/* Text */}
        <div>
          <SectionHeading eyebrow="Sobre mí" title={site.about.title} />
          <p className="font-sans leading-relaxed text-charcoal/80"
             style={{ fontSize: 'var(--text-base)' }}>
            {site.about.body}
          </p>
        </div>
      </div>
    </section>
  )
}
