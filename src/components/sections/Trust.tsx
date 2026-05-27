import { site } from '../../content/site'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Trust() {
  return (
    <section
      id="testimonios"
      className="bg-cream-deep px-6"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Confianza" title="Lo que dicen" className="text-center" />

        <div className="grid gap-6 md:grid-cols-2">
          {site.trust.map((item, i) => (
            <Card key={i} className="flex flex-col justify-between gap-6">
              <blockquote
                className="font-serif italic leading-relaxed text-charcoal"
                style={{ fontSize: 'var(--text-base)' }}
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <p className="font-sans text-sm font-medium text-mauve">
                — {item.author}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
