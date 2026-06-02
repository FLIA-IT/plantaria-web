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
        <SectionHeading eyebrow={site.products.eyebrow} title={site.products.title} />

        <p
          className="font-sans leading-relaxed text-charcoal/75"
          style={{ fontSize: 'var(--text-base)', maxWidth: '60ch' }}
        >
          {site.products.intro}
        </p>

        <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
          {site.products.items.map((product) => (
            <article
              key={product.name}
              className="grid gap-10 md:grid-cols-[5fr_7fr] md:items-start md:gap-16"
            >
              {/* Visual */}
              <div className="md:sticky md:top-24">
                <figure
                  className="aspect-[4/5] w-full overflow-hidden rounded-3xl"
                  style={{ background: 'var(--color-mauve-muted)' }}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      width={1200}
                      height={1260}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="botanical-placeholder h-full w-full"
                      aria-hidden="true"
                    />
                  )}
                </figure>
              </div>

              {/* Content */}
              <div>
                <p
                  className="mb-2 font-sans uppercase tracking-[0.18em] text-mauve"
                  style={{ fontSize: 'var(--text-xs)' }}
                >
                  Producto destacado
                </p>
                <h3
                  className="font-serif text-charcoal"
                  style={{ fontSize: 'clamp(2rem, 1.4rem + 2vw, 3rem)', lineHeight: '1.1' }}
                >
                  {product.name}
                </h3>
                <p
                  className="mt-3 font-serif italic text-charcoal/70"
                  style={{ fontSize: 'clamp(1.05rem, 0.9rem + 0.6vw, 1.35rem)', lineHeight: '1.35' }}
                >
                  {product.tagline}
                </p>

                <div
                  className="mt-6 h-px w-12"
                  style={{ background: 'var(--color-sage)' }}
                  aria-hidden="true"
                />

                <div className="mt-6 space-y-5" style={{ maxWidth: '60ch' }}>
                  {product.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-sans leading-relaxed text-charcoal/75"
                      style={{ fontSize: 'var(--text-base)' }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {product.certifications && product.certifications.length > 0 && (
                  <div className="mt-8">
                    <p
                      className="mb-3 font-sans uppercase tracking-[0.18em] text-mauve/80"
                      style={{ fontSize: 'var(--text-xs)' }}
                    >
                      Certificaciones
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {product.certifications.map((cert) => (
                        <li
                          key={cert}
                          className="rounded-full border border-sage/40 px-4 py-1.5 font-sans text-charcoal/75"
                          style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.06em' }}
                        >
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
