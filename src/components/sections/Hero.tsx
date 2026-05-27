import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[90svh] flex-col items-center justify-center bg-sage px-6 text-center text-cream"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-3xl">
        {site.hero.eyebrow && (
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
            {site.hero.eyebrow}
          </p>
        )}

        <h1
          className="font-serif font-normal leading-[1.1] text-cream"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          {site.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-cream/80"
           style={{ fontSize: 'var(--text-base)' }}>
          {site.hero.subtitle}
        </p>

        <div className="mt-10">
          <WhatsappButton
            message={site.hero.whatsappMessage}
            className="bg-cream !text-charcoal hover:bg-cream-deep hover:!text-charcoal"
          >
            {site.hero.cta}
          </WhatsappButton>
        </div>
      </div>
    </section>
  )
}
