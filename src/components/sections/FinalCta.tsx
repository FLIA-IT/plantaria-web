import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden px-6 text-cream"
      style={{
        paddingBlock: 'var(--space-section-loose)',
        background: 'var(--color-charcoal)',
      }}
    >
      {/* Botanical atmosphere layer */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 90% 10%, rgba(124,140,106,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 10% 90%, rgba(181,156,143,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Hairline top accent */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        aria-hidden="true"
        style={{ background: 'rgba(234,230,221,0.15)' }}
      />

      <div className="relative mx-auto max-w-2xl">
        {/* Accent mark */}
        <div
          className="mb-8 h-px w-12"
          style={{ background: 'var(--color-sage)' }}
          aria-hidden="true"
        />

        <h2
          className="font-serif font-normal leading-[1.1] text-cream"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          {site.finalCta.title}
        </h2>

        <p
          className="mt-5 font-sans leading-relaxed text-cream/70"
          style={{ fontSize: 'var(--text-base)', maxWidth: '44ch' }}
        >
          {site.finalCta.body}
        </p>

        <div className="mt-10">
          <WhatsappButton
            message={site.finalCta.whatsappMessage}
            className="bg-sage text-cream hover:bg-cream hover:!text-charcoal active:translate-y-px focus-visible:ring-cream"
          >
            {site.finalCta.cta}
          </WhatsappButton>
        </div>
      </div>
    </section>
  )
}
