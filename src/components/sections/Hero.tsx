import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-sage"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      {/* Atmospheric botanical layer — CSS-only, no lib */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 110% 20%, var(--color-charcoal-dim) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at -10% 80%, var(--color-cream-muted) 0%, transparent 50%)
          `,
        }}
      />
      {/* Hairline rule accent */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px opacity-30"
        aria-hidden="true"
        style={{ background: 'var(--color-cream)' }}
      />

      {/* Content — text left, brand photo right (centred together on desktop) */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,clamp(24rem,36vw,36rem))]">
        <div className="max-w-2xl" style={{ '--reveal-i': 0 } as React.CSSProperties}>
          {site.hero.eyebrow && (
            <p
              className="reveal mb-5 font-sans font-semibold uppercase tracking-[0.2em] text-cream/60"
              style={{ fontSize: 'var(--text-xs)', '--reveal-i': 0 } as React.CSSProperties}
            >
              {site.hero.eyebrow}
            </p>
          )}

          <h1
            className="reveal font-serif font-normal leading-[1.05] text-cream"
            style={{
              fontSize: 'var(--text-hero)',
              '--reveal-i': 1,
            } as React.CSSProperties}
          >
            {site.hero.title}
          </h1>

          <p
            className="reveal mt-6 font-sans leading-relaxed text-justify text-cream/75"
            style={{
              fontSize: 'var(--text-base)',
              maxWidth: '46ch',
              '--reveal-i': 2,
            } as React.CSSProperties}
          >
            {site.hero.subtitle}
          </p>

          <div
            className="reveal mt-10"
            style={{ '--reveal-i': 3 } as React.CSSProperties}
          >
            <WhatsappButton
              message={site.hero.whatsappMessage}
              className="!bg-cream !text-charcoal hover:!bg-cream-deep hover:!text-charcoal active:translate-y-px"
            >
              {site.hero.cta}
            </WhatsappButton>
          </div>
        </div>

        {/* Brand photo — right column, centred with the text */}
        <div
          className="reveal hidden lg:block"
          style={{ '--reveal-i': 1 } as React.CSSProperties}
        >
          <img
            src="/hero-stand.jpg"
            alt=""
            aria-hidden="true"
            loading="eager"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover object-center"
            style={{ boxShadow: '0 30px 60px -24px rgba(0, 0, 0, 0.45)' }}
          />
        </div>

        {/* Decorative vertical rule — botanical accent */}
        <div
          className="pointer-events-none absolute bottom-0 right-8 hidden h-32 w-px md:block"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-cream-accent))' }}
        />
      </div>
    </section>
  )
}
