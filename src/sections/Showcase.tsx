import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { showcase } from '../content'
import { cx } from '../lib/cx'

// Real captures of the app, one per tab. Tab rail on the left, the shot on
// the right; the image swaps with a short cross-fade.
export function Showcase() {
  const [active, setActive] = useState(showcase.tabs[0].key)
  const tab = showcase.tabs.find((item) => item.key === active) ?? showcase.tabs[0]
  return (
    <section id="inside" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={showcase.eyebrow} title={showcase.title} align="left" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal>
            <ul className="flex flex-col gap-1">
              {showcase.tabs.map((item) => {
                const isActive = item.key === active
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => setActive(item.key)}
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
                        {item.title}
                      </span>
                      <span className="relative mt-1 block text-[14px] leading-relaxed text-muted">{item.description}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="depth relative aspect-[16/10] overflow-hidden rounded-card bg-surface-2 shadow-glow">
              <AnimatePresence mode="wait">
                <motion.img
                  key={tab.key}
                  src={tab.image}
                  alt={tab.alt}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover object-left-top"
                />
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
