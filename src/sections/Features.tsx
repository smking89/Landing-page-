import { motion } from 'motion/react'
import { FileCode2, FolderTree, Gamepad2, Hash } from 'lucide-react'
import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content'
import { cx } from '../lib/cx'

const visuals: Record<string, () => ReactElement> = {
  assets: AssetsVisual,
  games: GamesVisual,
  plugins: PluginsVisual,
  manifest: ManifestVisual,
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="mt-14 grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(20_19_17/0.22)]">
                  <div className="relative flex-1 overflow-hidden">
                    <Visual />
                  </div>
                  {/* Fixed height so dividers line up across a row regardless of copy length. */}
                  <div className="relative h-[96px] border-t border-line px-6 pt-4">
                    <h3 className="text-[16px] font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const delivered = [
  { name: 'bunker.prefab', size: '11.2 KB', hash: 'd8ed13a962…' },
  { name: 'bunker_export/manifest.json', size: '2.1 KB', hash: '90ddbf3d24…' },
  { name: 'server/demo_bunker_wiring.cs', size: '11.2 KB', hash: '47a834cdbb…' },
  { name: 'blender/import_monument.py', size: '910 B', hash: '28b8a33356…' },
]

function AssetsVisual() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="depth relative flex h-full flex-col overflow-hidden rounded-[16px] bg-surface-2">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <FolderTree className="size-4 text-accent" />
          <span className="text-[13px] font-medium">Graft · Monument Architect</span>
          <span className="ml-auto rounded-[6px] bg-accent-2/15 px-2 py-0.5 text-[11px] text-accent-2">SHA-256 15/15</span>
        </div>
        <ul className="flex flex-col divide-y divide-line">
          {delivered.map((file, i) => (
            <motion.li
              key={file.name}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex items-center gap-3 px-4 py-2.5"
            >
              <FileCode2 className="size-3.5 shrink-0 text-faint" />
              <span className="min-w-0 flex-1 truncate font-mono text-[11.5px] text-fg/85">{file.name}</span>
              <span className="shrink-0 text-[11px] tabular-nums text-muted">{file.size}</span>
              <span className="hidden shrink-0 font-mono text-[11px] text-faint sm:block">{file.hash}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const gates = [
  { game: 'Rust', detail: 'PC · Oxide, Carbon', models: 'Graft, Vest, Terra, Plugin, Bot' },
  { game: 'Rust Console', detail: 'Console Edition', models: 'Graft, Vest, Terra' },
  { game: 'Minecraft', detail: 'Paper · Spigot', models: 'Plugin, Bot' },
  { game: 'DayZ', detail: 'JSOn layers', models: 'Plugin, Bot' },
]

function GamesVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6">
      {gates.map((row, i) => (
        <motion.div
          key={row.game}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.45 }}
          className={cx(
            'depth relative flex items-center gap-3 rounded-[14px] px-3 py-2.5',
            i === 0 ? 'bg-fg/[0.05] [--depth-edge:rgb(20_19_17/0.22)]' : 'bg-bg/60',
          )}
        >
          <Gamepad2 className="size-4 shrink-0 text-accent" />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium">{row.game}</span>
            <span className="block truncate text-[11px] text-faint">{row.detail}</span>
          </span>
        </motion.div>
      ))}
    </div>
  )
}

const snippets = [
  { label: 'C# · Oxide', lines: ['[ChatCommand("wipe")]', 'void WipeCountdown(BasePlayer p)'] },
  { label: 'discord.py', lines: ['@bot.command()', 'async def wipe(ctx): …'] },
]

function PluginsVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6">
      {snippets.map((snippet, i) => (
        <motion.div
          key={snippet.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="depth relative rounded-[14px] bg-bg/60 p-3"
        >
          <span className="text-[11px] font-medium text-accent-2">{snippet.label}</span>
          <pre className="mt-1.5 overflow-hidden font-mono text-[11px] leading-relaxed text-muted">
            {snippet.lines.join('\n')}
          </pre>
        </motion.div>
      ))}
    </div>
  )
}

const hashes = [
  'assets/server/demo_bunker.prefab',
  'assets/README.md',
  'assets/blender/demo_bunker.glb',
  'assets/rustedit/placements.json',
]

function ManifestVisual() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="depth relative flex h-full flex-col rounded-[16px] bg-surface-2 p-4">
        <div className="flex items-center gap-2">
          <Hash className="size-4 text-accent" />
          <span className="text-[13px] font-medium">manifest.json</span>
          <span className="ml-auto font-mono text-[10.5px] text-faint">sha256</span>
        </div>
        <ul className="mt-3 flex flex-col gap-2">
          {hashes.map((file, i) => (
            <motion.li
              key={file}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="flex items-center gap-3 text-[11.5px]"
            >
              <span className="min-w-0 flex-1 truncate font-mono text-fg/80">{file}</span>
              <span className="shrink-0 font-mono text-faint">{['8d1f…4c2a', 'a476…0e91', 'ce33…7b40', 'ede4…19d8'][i]}</span>
            </motion.li>
          ))}
        </ul>
        <div
          className="mt-auto flex items-center justify-between rounded-[10px] border border-line px-3 py-2 text-[11.5px]"
          style={{ borderColor: 'transparent' }}
        >
          <span className="text-faint">bundle digest</span>
          <span className="font-mono text-accent-2">11a46c92c008a449…</span>
        </div>
      </div>
    </div>
  )
}
