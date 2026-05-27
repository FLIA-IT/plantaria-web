import { site } from '../../content/site'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section
      id="asesorias"
      className="bg-cream-deep px-6"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Asesorías" title="Cómo puedo ayudarte" className="text-center" />

        <div className="grid gap-6 md:grid-cols-3">
          {site.services.map((service) => (
            <Card key={service.title}>
              <h3
                className="mb-3 font-serif italic text-sage"
                style={{ fontSize: 'var(--text-h2)', lineHeight: '1.2' }}
              >
                {service.title}
              </h3>
              <p className="font-sans leading-relaxed text-charcoal/70"
                 style={{ fontSize: 'var(--text-base)' }}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
