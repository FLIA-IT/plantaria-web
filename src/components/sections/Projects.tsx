import { site } from '../../content/site'
import { emphasize } from '../../lib/emphasize'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section
      id="proyectos"
      className="px-6"
      style={{
        paddingBlock: 'var(--space-section-loose)',
        background: 'var(--color-cream-deep)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={site.projects.eyebrow} title={site.projects.title} />

        {site.projects.items.map((project) => (
          <div key={project.subtitle}>
            {/* Narrative + signature hero photo */}
            <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:gap-16">
              <div>
                <p
                  className="mb-6 font-serif italic text-sage"
                  style={{ fontSize: 'clamp(1.05rem, 0.9rem + 0.5vw, 1.25rem)' }}
                >
                  {project.subtitle}
                </p>
                <div className="space-y-5" style={{ maxWidth: '60ch' }}>
                  {project.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-sans leading-relaxed text-charcoal/75"
                      style={{ fontSize: 'var(--text-base)' }}
                    >
                      {emphasize(p)}
                    </p>
                  ))}
                </div>

                <div
                  className="mt-10 h-px w-16"
                  style={{ background: 'var(--color-sage)' }}
                  aria-hidden="true"
                />
              </div>

              {project.hero && (
                <figure className="md:sticky md:top-24">
                  <img
                    src={project.hero.src}
                    alt={project.hero.alt}
                    width={project.hero.width}
                    height={project.hero.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
                    style={{ background: 'var(--color-mauve-muted)' }}
                  />
                  <figcaption
                    className="mt-3 font-sans text-charcoal/55"
                    style={{ fontSize: 'var(--text-xs)' }}
                  >
                    La Gran Vía · 2024–2025
                  </figcaption>
                </figure>
              )}
            </div>

            {/* Galleries: snap-x carousels (mobile peek + 1, desktop ~3-4) */}
            {project.galleries && project.galleries.length > 0 && (
              <div className="mt-16 space-y-14 md:mt-24 md:space-y-20">
                {project.galleries.map((gallery) => (
                  <section key={gallery.label} aria-label={gallery.label}>
                    {/* Label — stacked vertical (sage rule on top) */}
                    <div className="mb-5">
                      <span
                        className="mb-3 block h-px w-10"
                        style={{ background: 'var(--color-sage)' }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-sans uppercase tracking-[0.18em] text-mauve"
                        style={{ fontSize: 'var(--text-xs)', overflowWrap: 'anywhere' }}
                      >
                        {gallery.label}
                      </p>
                      <p
                        className="mt-2 font-serif italic text-charcoal/70"
                        style={{ fontSize: 'clamp(1rem, 0.9rem + 0.3vw, 1.15rem)', overflowWrap: 'anywhere', maxWidth: '52ch' }}
                      >
                        {gallery.caption}
                      </p>
                    </div>

                    {/* Snap carousel — full-bleed on mobile, contained on desktop */}
                    <ul
                      className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 md:gap-4"
                      style={{
                        scrollPaddingInline: '1.5rem',
                        WebkitOverflowScrolling: 'touch',
                      }}
                    >
                      {gallery.images.map((src, i) => (
                        <li
                          key={src}
                          className="aspect-[4/5] flex-none snap-start overflow-hidden rounded-2xl md:w-60"
                          style={{
                            width: 'min(72vw, 18rem)',
                            background: 'var(--color-mauve-muted)',
                          }}
                        >
                          <img
                            src={src}
                            alt={`${gallery.alt} · ${i + 1}`}
                            width={960}
                            height={1280}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                            style={{ transitionTimingFunction: 'var(--ease-out)' }}
                          />
                        </li>
                      ))}
                    </ul>

                    {/* Subtle hint of scrollability */}
                    <p
                      className="mt-3 font-sans text-charcoal/45 md:hidden"
                      style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.06em' }}
                      aria-hidden="true"
                    >
                      Deslizá para ver más →
                    </p>
                  </section>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
