import { site } from '../../content/site'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Products() {
  return (
    <section
      id="productos"
      className="px-6"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Productos" title="Lo que distribuyo" className="text-center" />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {site.products.map((product) => (
            <Card key={product.name} className="flex flex-col gap-4">
              {/* Placeholder image */}
              <div
                className="aspect-square w-full rounded-xl bg-mauve/20"
                aria-hidden="true"
              >
                {/* TODO: reemplazar por imagen real del producto */}
              </div>

              <div>
                <p className="font-serif italic text-charcoal"
                   style={{ fontSize: 'calc(var(--text-base) * 1.1)' }}>
                  {product.name}
                </p>
                <p className="mt-1 font-sans text-sm leading-snug text-charcoal/60">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
