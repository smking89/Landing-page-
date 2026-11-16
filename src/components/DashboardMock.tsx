import { motion } from 'motion/react'
import { Check, Download } from 'lucide-react'

import { LogoMark } from './Logo'
import { cx } from '../lib/cx'

const games = [
  { name: 'Rust', target: 'PC · Console', active: true },
  { name: 'Minecraft', target: 'Paper · Spigot' },
  { name: 'DayZ', target: 'JSON layers' },
]

const models = ['Graft', 'Vest', 'Terra', 'Plugin', 'Discord Bot']

const stages = ['Master Plan', 'Sub-Master', 'Gate 1', 'Gate 2', 'Gate 3']

const files = [
  { path: 'bunker_2x.prefab', size: '412 KB' },
  { path: 'bunker_2x.json', size: '8 KB' },
  { path: 'Bundle_manifest.json', size: '2 KB' },
]

/** A calm 32px avatar for the small decorative rows. */
export function Monogram({ initials, hue, className }: { initials: string; hue: number; className?: string }) {
  return (
    <span
      className={cx('round grid size-6 shrink-0 place-items-center text-[10px] font-semibold text-white', className)}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 62% 52%), hsl(${hue + 30} 58% 38%))`,
      }}
    >
      {initials}
    </span>
  )
}

export function DashboardMock() {
  return (
    <div className="depth relative flex h-[480px] w-full overflow-hidden rounded-window bg-surface text-left shadow-glow sm:h-[520px]">
      {/* Sidebar: game first, then the models that game can build */}
      <aside className="hidden w-[208px] shrink-0 flex-col border-r border-line bg-surface-2 p-3 sm:flex">
        <div className="flex items-center gap-2 px-1.5 py-1">
          <LogoMark size={22} />
          <span className="text-[12px] font-semibold">Aiden</span>
          <span className="ml-auto rounded-[6px] bg-brand/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-brand">beta</span>
        </div>

        <p className="mt-4 px-2 text-[10px] font-medium uppercase tracking-[0.09em] text-faint">Game</p>
        <ul className="mt-1 flex flex-col gap-0.5">
          {games.map((game) => (
            <li
              key={game.name}
              className={cx(
                'flex items-center gap-2 rounded-[9px] px-2 py-1.5 text-[11.5px]',
                game.active ? 'bg-white text-fg shadow-[inset_0_0_0_1px_rgb(27_26_23/0.06)]' : 'text-muted',
              )}
            >
              <span className={cx('size-1.5 rounded-full', game.active ? 'bg-brand' : 'bg-line-strong')} />
              <span className="flex-1">{game.name}</span>
              <span className="text-[9.5px] text-faint">{game.target}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 px-2 text-[10px] font-medium uppercase tracking-[0.09em] text-faint">Model</p>
        <ul className="mt-1 flex flex-col gap-0.5">
          {models.map((model, i) => (
            <li
              key={model}
              className={cx(
                'flex items-center gap-2 rounded-[9px] px-2 py-1.5 text-[11.5px]',
                i === 0 ? 'bg-white font-medium text-brand shadow-[inset_0_0_0_1px_rgb(248_8_1/0.22)]' : 'text-muted',
              )}
            >
              {model}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 rounded-[10px] bg-white px-2 py-1.5 text-[10.5px] text-muted shadow-[inset_0_0_0_1px_rgb(27_26_23/0.06)]">
          <Check className="size-3 text-accent-2" />
          Gate 3 passed · manifest verified
        </div>
      </aside>

      {/* Thread */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-line px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate text-[12.5px] font-medium">Two-lane bunker for a 2x vanilla server</span>
            <span className="hidden shrink-0 rounded-[6px] bg-raised px-1.5 py-0.5 text-[10px] text-muted sm:inline">Rust · Graft</span>
          </div>
          <span className="hidden shrink-0 text-[10.5px] text-faint sm:inline">3 gates</span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden p-3.5">
          <div className="ml-auto max-w-[80%] rounded-[13px] bg-raised px-3 py-2 text-[11.5px] leading-snug text-fg">
            Two-lane bunker for a 2x vanilla server. Four boxes, a shooting floor and space for eight players.
          </div>

          <div className="max-w-[88%] space-y-2">
            <div className="depth relative rounded-[13px] bg-white p-2.5">
              <div className="flex items-center gap-1.5 text-[10.5px] text-muted">
                <span className="font-medium text-brand">Aiden</span>
                <span>· Graft</span>
              </div>
              <ol className="mt-2 flex flex-wrap gap-1">
                {stages.map((stage) => (
                  <li
                    key={stage}
                    className="inline-flex items-center gap-1 rounded-[7px] bg-surface-2 px-1.5 py-0.5 text-[9.5px] text-muted shadow-[inset_0_0_0_1px_rgb(27_26_23/0.05)]"
                  >
                    <Check className="size-2.5 text-accent-2" />
                    {stage}
                  </li>
                ))}
              </ol>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="depth relative overflow-hidden rounded-[13px] bg-white"
            >
              <div className="flex flex-col sm:flex-row">
                <img
                  src="/previews/graft.svg"
                  alt="Graft monument preview"
                  className="hidden h-[132px] w-[42%] shrink-0 border-r border-line object-cover sm:block"
                />
                <div className="min-w-0 flex-1 p-2.5">
                <p className="text-[11px] font-medium">Delivery · bunker_2x</p>
                <ul className="mt-1.5 space-y-0.5 font-mono text-[9.5px] text-muted">
                  {files.map((file) => (
                    <li key={file.path} className="flex justify-between gap-2">
                      <span className="truncate">{file.path}</span>
                      <span className="shrink-0 text-faint">{file.size}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-[7px] bg-brand px-2 py-1 text-[10px] font-medium text-white">
                    <Download className="size-2.5" />
                    bundle.zip
                  </span>
                  <span className="text-[9.5px] text-faint">sha256 verified</span>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="shrink-0 border-t border-line p-2.5">
          <div className="flex items-center gap-2 rounded-[11px] bg-surface-2 px-2.5 py-1.5 text-[11px] text-faint shadow-[inset_0_0_0_1px_rgb(27_26_23/0.05)]">
            Describe a monument, skin, map, plugin or bot…
            <span className="ml-auto grid size-5 place-items-center rounded-[7px] bg-brand text-[11px] font-medium text-white">↑</span>
          </div>
        </div>
      </div>
    </div>
  )
}
