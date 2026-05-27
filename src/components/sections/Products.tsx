import { site } from '../../content/site'
import { SectionHeading } from '../ui/SectionHeading'

export function Products() {
  return (
    <section
      id="productos"
      className="px-6"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Lo que distribuyo" />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {site.products.map((product, i) => (
            <article
              key={product.name}
              className="group flex flex-col gap-4"
            >
              {/* Image slot — botanical atmosphere */}
              <div
                className="botanical-placeholder aspect-[3/4] w-full overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
                style={{
                  /* Each placeholder slightly different tint */
                  opacity: 0.8 + i * 0.05,
                }}
              />

              <div className="px-1">
                <p
                  className="font-serif italic text-charcoal transition-colors duration-200 group-hover:text-sage"
                  style={{ fontSize: 'var(--text-base)', lineHeight: '1.3' }}
                >
                  {product.name}
                </p>
                <p
                  className="mt-1 font-sans leading-snug text-charcoal/55"
                  style={{ fontSize: 'var(--text-xs)' }}
                >
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
