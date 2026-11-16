import { AnimatePresence, motion } from 'motion/react'
import { Check, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { showcase } from '../content'
import { cx } from '../lib/cx'

export function Showcase() {
  const [active, setActive] = useState(showcase.tabs[0].key)
  const current = showcase.tabs.find((tab) => tab.key === active) ?? showcase.tabs[0]

  return (
    <section id="showcase" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={showcase.eyebrow} title={showcase.title} align="left" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal>
            <ul className="flex flex-col gap-1">
              {showcase.tabs.map((tab) => {
                const isActive = tab.key === active
                return (
                  <li key={tab.key}>
                    <button
                      type="button"
                      onClick={() => setActive(tab.key)}
                      aria-pressed={isActive}
                      className={cx(
                        'relative w-full rounded-card-sm px-5 py-4 text-left transition-colors',
                        isActive ? 'bg-surface' : 'hover:bg-fg/[0.03]',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="showcase-active"
                          className="depth absolute inset-0 rounded-card-sm"
                          transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span className={cx('relative block text-[16px] font-semibold', isActive ? 'text-fg' : 'text-muted')}>
                        {tab.title}
                      </span>
                      <span className="relative mt-1 block text-[14px] leading-relaxed text-muted">{tab.description}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="depth relative aspect-[16/10] overflow-hidden rounded-card bg-surface shadow-glow">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.key}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col"
                >
                  <div className="relative flex-1 overflow-hidden bg-surface-2">
                    <img src={current.image} alt={current.alt} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <figcaption className="flex shrink-0 items-center gap-3 border-t border-line px-4 py-3">
                    <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-muted">{current.meta.join(' · ')}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-accent-2">
                      <ShieldCheck className="size-3.5" />
                      verified
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
            {['Monument layouts', 'PBR skin sets', 'Playable maps', 'Server plugins', 'Discord bots'].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
