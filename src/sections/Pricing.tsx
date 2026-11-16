import { Check } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { pricing } from '../content'
import { cx } from '../lib/cx'

// Aiden prices are not per-seat per-month, so the plans carry a label instead
// of a number and the example's monthly/yearly toggle is gone.
export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        <div className={cx('mx-auto mt-12 grid gap-4', pricing.tiers.length === 2 ? 'max-w-4xl md:grid-cols-2' : 'lg:grid-cols-3')}>
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="h-full">
              <article
                className={cx(
                  'depth relative flex h-full flex-col rounded-card bg-surface p-7',
                  tier.popular ? '[--depth-edge:rgb(248_8_1/0.45)] [--depth-highlight:rgb(255_6a_5a/0.25)] shadow-[0_40px_80px_-40px_rgb(248_8_1/0.35)]' : 'shadow-glow',
                )}
              >
                {tier.popular && (
                  <span className="absolute right-6 top-6 rounded-[8px] bg-accent/15 px-2 py-1 text-[12px] font-medium text-accent">Best fit</span>
                )}
                <h3 className="text-[16px] font-semibold">{tier.name}</h3>
                <p className="mt-1 min-h-[44px] text-[14px] leading-snug text-muted">{tier.description}</p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className={cx('font-semibold leading-none tracking-[-0.03em]', tier.price.length > 6 ? 'text-[34px]' : 'text-[42px]')}>{tier.price}</span>
                  <span className="text-[14px] text-muted">{tier.priceNote}</span>
                </div>
                <Button variant={tier.popular ? 'primary' : 'secondary'} className="mt-7 w-full">
                  {tier.cta}
                </Button>
                <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-fg/90">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[6px] bg-fg/[0.08]">
                        <Check className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
