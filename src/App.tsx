import { Cta } from './sections/Cta'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { LogoCloud } from './sections/LogoCloud'
import { Metrics } from './sections/Metrics'
import { Nav } from './sections/Nav'
import { Showcase } from './sections/Showcase'
import { Steps } from './sections/Steps'

// The page is a stack of independent sections. Remove or reorder freely;
// copy for each lives in src/content.ts.
export function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <LogoCloud />
        <Features />
        <Steps />
        <Showcase />
        <Metrics />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
