import { motion } from 'motion/react'
import { Check, FileCode2, Fingerprint, Gamepad2, Image as ImageIcon } from 'lucide-react'
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
    <section id="features" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="mt-14 grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(248_8_1/0.28)]">
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

/** The eyebrow of a feature card: a soft stage for the small visual. */
function Stage({ children }: { children: ReactElement }) {
  return <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#fbfaf7,#f1efe9)] p-6">{children}</div>
}

const previews = [
  { src: '/previews/graft.svg', label: 'Graft', caption: 'bunker · 8 spawns' },
  { src: '/previews/vest.svg', label: 'Vest', caption: 'PBR skin set' },
  { src: '/previews/terra.svg', label: 'Terra', caption: 'map · 3 biomes' },
]

function AssetsVisual() {
  return (
    <Stage>
      <div className="flex h-full items-center justify-center gap-3">
        {previews.map((preview, i) => (
          <motion.figure
            key={preview.label}
            initial={{ opacity: 0, y: 14, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cx(
              'depth relative overflow-hidden rounded-[14px] bg-white shadow-[0_14px_30px_-18px_rgb(27_26_23/0.4)]',
              i === 1 ? 'w-[42%] translate-y-[-6px]' : 'w-[30%]',
            )}
          >
            <img src={preview.src} alt={`${preview.label} preview`} className="h-[104px] w-full object-cover" />
            <figcaption className="flex items-center justify-between gap-2 px-2.5 py-1.5">
              <span className="text-[11px] font-medium">{preview.label}</span>
              <span className="truncate font-mono text-[9px] text-faint">{preview.caption}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Stage>
  )
}

const gameRows = [
  { name: 'Rust', target: 'Oxide · Carbon', kind: 'Assets + plugins' },
  { name: 'Minecraft', target: 'Paper · Spigot', kind: 'Maven plugin' },
  { name: 'DayZ', target: 'JSON layers', kind: 'Config layer' },
]

function GamesVisual() {
  return (
    <Stage>
      <ul className="flex h-full flex-col justify-center gap-2">
        {gameRows.map((game, i) => (
          <motion.li
            key={game.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.45 }}
            className="depth relative flex items-center gap-2.5 rounded-[12px] bg-white px-3 py-2"
          >
            <Gamepad2 className="size-3.5 shrink-0 text-brand" />
            <span className="min-w-0 flex-1">
              <span className="block text-[12px] font-medium leading-tight">{game.name}</span>
              <span className="block text-[10px] text-faint">{game.kind}</span>
            </span>
            <span className="shrink-0 rounded-[6px] bg-surface-2 px-1.5 py-0.5 font-mono text-[9px] text-muted">{game.target}</span>
          </motion.li>
        ))}
      </ul>
    </Stage>
  )
}

const tree = [
  { depth: 0, name: 'bot.py', icon: FileCode2 },
  { depth: 0, name: 'cogs/', icon: null },
  { depth: 1, name: 'config.py', icon: FileCode2 },
  { depth: 1, name: 'panels.py', icon: FileCode2 },
  { depth: 1, name: 'animations.py', icon: FileCode2 },
  { depth: 0, name: '.env.example', icon: FileCode2 },
  { depth: 0, name: 'server_manifest.json', icon: FileCode2 },
]

function PluginsVisual() {
  return (
    <Stage>
      <div className="depth relative h-full overflow-hidden rounded-[12px] bg-white p-3 font-mono text-[10.5px] leading-relaxed">
        {tree.map((node, i) => (
          <motion.div
            key={node.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={cx('flex items-center gap-1.5', node.name.endsWith('/') ? 'text-fg' : 'text-muted')}
            style={{ paddingLeft: node.depth * 14 }}
          >
            {node.icon ? <node.icon className="size-3 shrink-0 text-brand" /> : <span className="size-3 shrink-0" />}
            {node.name}
          </motion.div>
        ))}
      </div>
    </Stage>
  )
}

const hashes = [
  { path: 'bot.py', sha: '9f2c…a41e' },
  { path: 'cogs/config.py', sha: 'c8b1…7d02' },
  { path: 'cogs/panels.py', sha: '41de…9b6f' },
  { path: 'bundle.zip', sha: '7a03…e5c8' },
]

function ManifestVisual() {
  return (
    <Stage>
      <div className="depth relative flex h-full flex-col overflow-hidden rounded-[12px] bg-white p-3">
        <div className="flex items-center gap-2 border-b border-line pb-2 text-[10.5px] text-muted">
          <Fingerprint className="size-3.5 text-brand" />
          <span className="font-medium text-fg">server_manifest.json</span>
          <span className="ml-auto font-mono text-[9.5px] text-faint">sha256</span>
        </div>
        <ul className="mt-2 flex flex-1 flex-col justify-center gap-1.5 font-mono text-[10px]">
          {hashes.map((row, i) => (
            <motion.li
              key={row.path}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <Check className="size-3 shrink-0 text-accent-2" />
              <span className="min-w-0 flex-1 truncate text-muted">{row.path}</span>
              <span className="shrink-0 text-faint">{row.sha}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-1 flex items-center gap-1.5 border-t border-line pt-2 text-[10px] text-faint">
          <ImageIcon className="size-3" />
          Every file in the ZIP is listed, including the preview.
        </div>
      </div>
    </Stage>
  )
}
