import { site } from '../../content/site'
import { WhatsappButton } from '../ui/WhatsappButton'

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="bg-mauve px-6 text-center text-cream"
      style={{ paddingBlock: 'var(--space-section)' }}
    >
      <div className="mx-auto max-w-2xl">
        <h2
          className="font-serif font-normal text-cream"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          {site.finalCta.title}
        </h2>

        <p className="mx-auto mt-4 max-w-lg font-sans leading-relaxed text-cream/80"
           style={{ fontSize: 'var(--text-base)' }}>
          {site.finalCta.body}
        </p>

        <div className="mt-10">
          <WhatsappButton
            message={site.finalCta.whatsappMessage}
            className="bg-cream !text-charcoal hover:bg-cream-deep hover:!text-charcoal"
          >
            {site.finalCta.cta}
          </WhatsappButton>
        </div>
      </div>
    </section>
  )
}
