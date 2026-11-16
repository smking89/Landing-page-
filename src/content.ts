// All copy lives here so the page can be re-themed without touching layout.
// Sections read from this file; remove a section by deleting it from App.tsx.

const app = 'https://site-cbf332003f704a6f9b879cb3927c8a42.freebuff.page'

export const brand = {
  name: 'Aiden',
  tagline: 'Describe it. Aiden builds it.',
}

export const nav = {
  links: [
    { label: 'What it builds', href: '#features' },
    { label: 'Previews', href: '#showcase' },
    { label: 'How it works', href: '#how' },
    { label: 'FAQ', href: '#faq' },
  ],
  signIn: { label: 'Sign in', href: app },
  cta: { label: 'Open Aiden', href: app },
}

export const hero = {
  badge: '5 models · 3 games · 3 gates',
  title: ['Describe the build.', 'Aiden ships the bundle'],
  highlight: 'bundle',
  description:
    'Monuments, PBR skin sets, maps, server plugins and Discord bots for Rust (PC and Console Edition), Minecraft and DayZ — generated from one brief, validated through three gates, delivered with a manifest of SHA-256 hashes.',
  primary: { label: 'Open Aiden', href: app },
  secondary: { label: 'See the previews', href: '#showcase' },
  footnote: 'Rust PC and console, Minecraft and DayZ. Built on the koba_engine pipeline — no prompt keys.',
}

export const logos = {
  label: 'Targets Aiden builds for',
  items: ['Oxide', 'Carbon', 'Console Edition', 'Paper', 'Spigot', 'DayZ', 'Discord', 'koba_engine'],
}

export const features = {
  eyebrow: 'What it builds',
  title: 'One brief, five kinds of build',
  description: 'Every model produces real project files, hashed and packaged — not screenshots of files.',
  items: [
    {
      key: 'assets',
      title: 'Assets that drop into the server',
      description: 'Prefab monuments with wired sockets, PBR skin sets and playable maps.',
      span: 2,
    },
    {
      key: 'games',
      title: 'Pick the game first',
      description: 'Rust assets and plugins, Minecraft plugins, DayZ moderation — and one Discord bot that covers all three.',
      span: 1,
    },
    {
      key: 'plugins',
      title: 'Plugins and bots without an engine',
      description: 'C# plugin source or a discord.py bot, generated in the app, so both work even with no engine attached.',
      span: 1,
    },
    {
      key: 'manifest',
      title: 'Every file hashed',
      description: 'A SHA-256 per file and one bundle digest on the delivery card.',
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
      description: 'One brief, in your words: a base, a skin, a map, a plugin or a Discord bot. For Rust, say whether the server is PC or Console Edition.',
    },
    {
      title: 'Choose the game and model',
      description: 'The game decides the target and which models can build for it. No dead options.',
    },
    {
      title: 'Pass the gates and take the bundle',
      description: 'Master Plan, Sub-Master, then Gate 1, 2 and 3. The ZIP arrives with its manifest.',
    },
  ],
}

export const showcase = {
  eyebrow: 'The previews',
  title: 'Previews are generated, not mocked',
  tabs: [
    {
      key: 'graft',
      title: 'Graft',
      description: 'Top-down monument layout: rooms, sockets, spawn points and a verified vanilla ruleset.',
      image: '/previews/graft.svg',
      alt: 'Top-down monument preview drawn by Graft',
      meta: ['bunker.prefab', 'bunker.json', 'Bundle_manifest.json'],
    },
    {
      key: 'vest',
      title: 'Vest',
      description: 'PBR skin set: albedo, normal, smoothness, ambient occlusion and UV masks, packed together.',
      image: '/previews/vest.svg',
      alt: 'Item skin preview drawn by Vest',
      meta: ['skin_albedo.png', 'skin_normal.png', 'Skinset_manifest.json'],
    },
    {
      key: 'terra',
      title: 'Terra',
      description: 'Terrain, biome and river pass with monument placement checked before the map is written.',
      image: '/previews/terra.svg',
      alt: 'Map preview drawn by Terra',
      meta: ['world.map', 'world.json', 'World_manifest.json'],
    },
    {
      key: 'plugin',
      title: 'Plugin',
      description: 'C# plugin source with its config, lang/en messages and a hashed manifest, packaged as a ZIP.',
      image: '/previews/plugin.svg',
      alt: 'Plugin package preview drawn by the Plugin model',
      meta: ['plugin.cs', 'config/plugin.json', 'plugin-manifest.json'],
    },
    {
      key: 'bot',
      title: 'Discord Bot',
      description: 'discord.py bot with command cogs and a working RCON client — PC or Console Edition, detected from the brief.',
      image: '/previews/bot.svg',
      alt: 'Discord bot package preview drawn by the Discord Bot model',
      meta: ['bot.py', 'cogs/rust.py', 'server_manifest.json'],
    },
  ],
}

export const metrics: { value: number; label: string; suffix?: string; decimals?: number }[] = [
  { value: 3, label: 'Games supported' },
  { value: 5, label: 'Build models' },
  { value: 3, label: 'Validation gates' },
  { value: 100, suffix: '%', label: 'Files with a SHA-256' },
]

export const faq = {
  title: 'Questions, answered',
  items: [
    {
      q: 'Which games does Aiden build for?',
      a: 'Rust, Minecraft and DayZ. Those are the three the pipeline can really produce for: Rust has the asset models and server plugins, Minecraft has Paper/Spigot plugins as a Maven project, and DayZ has its moderation layer. For Rust that covers PC dedicated servers and Console Edition: a bot brief that names a console, a PS5 or Xbox, or a console host gets the console command set automatically. The game picker only offers what has a working generator behind it.',
    },
    {
      q: 'Do I have to run the engine myself?',
      a: 'Only for the asset models — Graft, Vest and Terra call koba_engine and need a reachable engine. Plugins and Discord bots are generated inside the app, so they work on the hosted site with nothing attached.',
    },
    {
      q: 'Is the generated code real?',
      a: 'Yes. A Rust plugin is C# with its config, lang files and manifest. Minecraft is a Maven project you can build into a jar. DayZ is a JSON layer. A Discord bot is a Python project with bot.py, cogs, an environment template and a deployment README.',
    },
    {
      q: 'What exactly is in the bundle?',
      a: 'The project files, a README for installing them, and a manifest listing every file with its SHA-256. The delivery card shows the same hashes, so a package can be checked after it is moved to a server.',
    },
    {
      q: 'Can I share a chat or a project?',
      a: 'Yes. Put chats in a project and invite people with an eight-character code: it works once and expires after 24 hours. A project can hand out three codes in a row, then waits five minutes before it will generate more.',
    },
    {
      q: 'How do I use my own textures or images?',
      a: 'With a raw direct link. Upload the file to a private Discord channel, right-click it, Copy Link, and check the URL ends in .png, .jpg or .json — or upload to Imgur, right-click the image itself and Copy Image Address. A generated bot can check links for you with /asset-link.',
    },
    {
      q: 'Can a bot use a game studio name?',
      a: 'No. Protected names — Facepunch, Double Eleven, Mojang, Rustoria — are refused before anything is packaged, so a build cannot be published under a studio it does not belong to.',
    },
  ],
}

export const cta = {
  title: 'Describe the next thing you need',
  description: 'Open Aiden, pick the game and the model, and take the bundle.',
  primary: { label: 'Open Aiden', href: app },
  secondary: { label: 'Read the pipeline', href: '#how' },
  note: 'Runs in the browser. Plugins and Discord bots need no engine key.',
}

export const footer = {
  blurb: 'Game assets, server plugins and Discord bots, generated from a brief and delivered with their hashes.',
  columns: [
    { title: 'Build', links: ['Graft', 'Vest', 'Terra', 'Plugin', 'Discord Bot'] },
    { title: 'Games', links: ['Rust', 'Minecraft', 'DayZ'] },
    { title: 'Resources', links: ['koba_engine', 'Previews', 'FAQ'] },
    { title: 'Legal', links: ['Privacy', 'Terms'] },
  ],
  legal: `© ${new Date().getFullYear()} Aiden`,
  github: 'https://github.com/smking89/aiden',
}
