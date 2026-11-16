import { Container } from '../components/Container'
import type { ReactElement } from 'react'
import { Reveal } from '../components/Reveal'
import { logos } from '../content'

// Minimal geometric marks so the row reads as a set of targets without
// borrowing any logo. Swap for real marks when they are available.
const marks: Record<string, ReactElement> = {
  Oxide: <circle cx="12" cy="12" r="6.5" />,
  Carbon: <path d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8z" />,
  Paper: <path d="M6 4h8l4 4v12H6z M14 4v4h4" />,
  Spigot: <path d="M5 9h14M5 9v6h14V9M8 15v5M16 15v5" />,
  DayZ: <path d="M12 4 20 19H4z" />,
  Discord: <path d="M7.5 8.5c3-1.2 6-1.2 9 0M7 17c3 1.4 7 1.4 10 0 1-2.5 1.4-5.3 1-8.2-1.6-1-3-1.6-4.4-1.8l-.6 1.4M10 8.4 9.4 7c-1.4.2-2.8.8-4.4 1.8-.4 2.9 0 5.7 1 8.2" />,
  koba_engine: <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5 9 9M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />,
  'Freebuff Sites': <path d="M4 7h16v12H4zM4 11h16M9 7v4" />,
}

export function LogoCloud() {
  const doubled = [...logos.items, ...logos.items]
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] text-faint">{logos.label}</p>
        </Reveal>
        <div className="section-mask relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {doubled.map((name, i) => (
              <li key={`${name}-${i}`} className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-fg/50">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {marks[name]}
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
