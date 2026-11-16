// All copy lives here so the page can be re-themed without touching layout.
// Sections read from this file; remove a section by deleting it from App.tsx.

// Where the app lives; every call to action that leaves the page points here.
const app = 'https://site-cbf332003f704a6f9b879cb3927c8a42.freebuff.page'

export const brand = {
  name: 'Aiden',
  tagline: 'Server-ready assets, built on demand',
}

export const nav = {
  links: [
    { label: 'What it builds', href: '#features' },
    { label: 'Previews', href: '#inside' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
  ],
  signIn: { label: 'Sign in', href: app },
  cta: { label: 'Open Aiden', href: app },
}

export const hero = {
  badge: '5 models · 3 games · 3 gates',
  title: ['Describe the build.', 'Aiden ships the bundle'],
  highlight: 'bundle',
  description:
    'Monuments, PBR skins, maps, server plugins and Discord bots for Rust — PC and Console Edition — Minecraft and DayZ. One brief, real project files, and a manifest of SHA-256 hashes at the end.',
  primary: { label: 'Open Aiden', href: app },
  secondary: { label: 'See the previews', href: '#inside' },
  footnote: 'No prompt keys. Runs on the simulated build service, or attach your own koba_engine.',
}

export const logos = ['Oxide', 'Carbon', 'Console Edition', 'Paper', 'Spigot', 'DayZ', 'Discord', 'koba_engine']

export const features = {
  eyebrow: 'What it builds',
  title: 'One brief, five kinds of build',
  description: 'Each model produces real project files, hashed and packaged — not screenshots of files.',
  items: [
    {
      key: 'assets',
      title: 'Assets that drop into the server',
      description: 'Prefab monuments with wired sockets, PBR skin sets and playable maps.',
      span: 2,
    },
    {
      key: 'games',
      title: 'The game decides first',
      description: 'Rust PC and Console Edition, Minecraft and DayZ. No options that cannot run.',
      span: 1,
    },
    {
      key: 'plugins',
      title: 'Plugins and bots without an engine',
      description: 'Oxide C# or a discord.py bot, generated in the app even with no engine attached.',
      span: 1,
    },
    {
      key: 'manifest',
      title: 'Every file hashed',
      description: 'A SHA-256 per file plus one digest for the bundle, on the delivery card.',
      span: 2,
    },
  ],
}

export const steps = {
  eyebrow: 'How it works',
  title: 'From a sentence to a server-ready bundle',
  items: [
    {
      title: 'Describe it',
      description: 'One brief in your words: a monument, a skin, a map, a plugin or a Discord bot. For Rust, say whether the server is PC or Console Edition.',
    },
    {
      title: 'Pick the game and model',
      description: 'The game gates what can be built, then one of five models takes it: Graft, Vest, Terra, Plugin or Discord Bot.',
    },
    {
      title: 'Take the bundle',
      description: 'Files, wiring, placement data and a preview, delivered with a SHA-256 per file and a digest for the whole bundle.',
    },
  ],
}

// Screenshots of the running app, captured from the real build flow.
export const showcase = {
  eyebrow: 'Inside Aiden',
  title: 'What a build actually gives you',
  tabs: [
    {
      key: 'builds',
      title: 'Bundles, hashed',
      description: 'A finished build lands as a delivery card: every file, its size, a SHA-256 per file and one digest for the bundle.',
      image: '/previews/build.png',
      alt: 'A Graft monument build delivered as 15 hashed files with a download button',
    },
    {
      key: 'models',
      title: 'Five models',
      description: 'Graft, Vest, Terra, Plugin and Discord Bot, each building for the game you picked. No options that cannot run.',
      image: '/previews/models.png',
      alt: 'The model picker open over a Rust chat, listing all five models',
    },
    {
      key: 'projects',
      title: 'Shared projects',
      description: 'Group builds, see who is in, and invite people with a single-use code that expires in a day.',
      image: '/previews/projects.png',
      alt: 'A shared project page with its member list, invite button and chats',
    },
  ],
}

export const metrics: { value: number; suffix?: string; decimals?: number; label: string }[] = [
  { value: 5, label: 'Models: Graft, Vest, Terra, Plugin, Bot' },
  { value: 3, label: 'Games: Rust, Minecraft, DayZ' },
  { value: 2, label: 'Rust editions: PC and Console' },
  { value: 100, suffix: '%', label: 'Files hashed with SHA-256' },
]

// Real briefs from the app, with what each one came back as.
export const testimonials = {
  eyebrow: 'From the beta',
  title: 'Briefs people actually sent',
  items: [
    {
      quote: 'Two-lane bunker for a 2x vanilla server',
      model: 'Graft',
      meta: 'Rust · monument, wiring and preview',
      monogram: 'GR',
      hue: 8,
    },
    {
      quote: 'Harbor expansion with two cargo cranes, container stacks and a locked office',
      model: 'Graft',
      meta: 'Rust · 15 files, SHA-256 verified',
      monogram: 'HA',
      hue: 20,
    },
    {
      quote: 'Weathered red-and-bone AK47 with a scratched receiver and worn furniture',
      model: 'Vest',
      meta: 'Rust · PBR set with UV masks',
      monogram: 'VE',
      hue: 340,
    },
    {
      quote: 'Badlands map with a central canyon and three resource outposts',
      model: 'Terra',
      meta: 'Rust · terrain with an embedded monument',
      monogram: 'TE',
      hue: 30,
    },
    {
      quote: 'Weekly wipe counter and a countdown broadcast to the Discord channel',
      model: 'Plugin',
      meta: 'Rust · Oxide plugin source',
      monogram: 'PL',
      hue: 210,
    },
    {
      quote: 'DayZ moderation bot that kicks on a shared ban list and logs to a channel',
      model: 'Discord Bot',
      meta: 'DayZ · discord.py source',
      monogram: 'DB',
      hue: 265,
    },
  ],
}

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Free while Aiden is in beta',
  description: 'Every account gets the same daily allowance. No card, no trial clock.',
  tiers: [
    {
      name: 'Beta',
      price: 'Free',
      priceNote: 'while in beta',
      description: 'For anyone building for a server.',
      cta: 'Open Aiden',
      features: [
        '50 builds a day per account',
        'All five models',
        'Rust PC and Console Edition, Minecraft, DayZ',
        'Projects, invites and shared builds',
        'SHA-256 manifest on every bundle',
      ],
    },
    {
      name: 'Self-hosted pipeline',
      price: 'Talk to us',
      priceNote: 'bring koba_engine',
      description: 'For teams running their own build hardware.',
      cta: 'Talk to us',
      popular: true,
      features: [
        'Attach your own koba_engine build service',
        'Build on your own hardware and keys',
        'Higher daily limits than the shared service',
        'Real asset exports instead of simulated ones',
      ],
    },
  ],
}

export const faq = {
  title: 'Questions, answered',
  items: [
    {
      q: 'Which games can Aiden build for?',
      a: 'Rust on PC and on Console Edition, Minecraft Java (Paper and Spigot servers) and DayZ. Pick the game first — it decides which models are offered.',
    },
    {
      q: 'What comes in a bundle?',
      a: 'Real project files for the thing you asked for: prefabs and wiring for monuments, PBR textures and UV masks for skins, terrain and placement data for maps, C# or discord.py source for plugins and bots. Each file carries a size and a SHA-256 hash, and the bundle gets one digest.',
    },
    {
      q: 'Does it need koba_engine running?',
      a: 'No. Without an engine, builds come from the simulated build service and the app says so. Attach your own koba_engine to generate from the real asset pipeline.',
    },
    {
      q: 'What are the three gates?',
      a: 'Every build passes the same checks before delivery: a master plan, a sub-master plan, then three gates that verify the files it produced. The stage rail in the chat shows each one as it passes.',
    },
    {
      q: 'How many builds do I get?',
      a: 'Fifty a day per account while Aiden is in beta, shared across every model. The settings page shows what you have used and when it resets.',
    },
    {
      q: 'Can I share a build with my team?',
      a: 'Yes. Put chats in a project and invite people with a single-use code that expires in 24 hours. Three codes in a row, then a five-minute wait.',
    },
  ],
}

export const cta = {
  title: 'Point Aiden at your next build',
  description: 'Open the app, pick the game and the model, and describe what your server needs.',
  placeholder: 'you@yourserver.com',
  button: 'Join the beta',
  success: 'You are on the list.',
}

export const footer = {
  blurb: 'Server-ready Rust, Minecraft and DayZ assets, built from one brief.',
  columns: [
    { title: 'Product', links: ['What it builds', 'Previews', 'How it works', 'Pricing'] },
    { title: 'Games', links: ['Rust', 'Rust Console Edition', 'Minecraft', 'DayZ'] },
    { title: 'Resources', links: ['Changelog', 'Docs', 'Status', 'Discord'] },
    { title: 'Legal', links: ['Privacy', 'Terms'] },
  ],
  legal: `© ${new Date().getFullYear()} Aiden`,
  app,
}
