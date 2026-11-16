import { Container } from '../components/Container'
import type { ReactElement } from 'react'
import { Reveal } from '../components/Reveal'
import { logos } from '../content'

// Simple geometric marks, one per target, so the row reads as a list of
// platforms rather than borrowed brand identities.
const marks: Record<string, ReactElement> = {
  Oxide: <circle cx="12" cy="12" r="7" />,
  Carbon: <path d="M12 4 19 8v8l-7 4-7-4V8z" />,
  'Console Edition': <rect x="4" y="7" width="16" height="10" rx="4" />,
  Paper: <path d="M6 4h9l4 4v12H6zM15 4v4h4" />,
  Spigot: <path d="M5 10h14M8 10v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />,
  DayZ: <path d="M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10z" />,
  Discord: <path d="M7 9c3-1 7-1 10 0M8 15c2 1 6 1 8 0" />,
  koba_engine: <path d="M4 12h16M12 4v16" />,
}

const fallback = <circle cx="12" cy="12" r="6" />

export function LogoCloud() {
  const doubled = [...logos, ...logos]
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] text-faint">Aiden builds for</p>
        </Reveal>
        <div className="section-mask relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {doubled.map((name, i) => (
              <li key={`${name}-${i}`} className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-fg/45">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {marks[name] ?? fallback}
                </svg>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
