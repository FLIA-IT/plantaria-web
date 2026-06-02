import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Products } from './components/sections/Products'
import { Projects } from './components/sections/Projects'
import { Trust } from './components/sections/Trust'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'
import { PlantDecor } from './components/ui/PlantDecor'
import { FloatingWhatsapp } from './components/ui/FloatingWhatsapp'
import { site } from './content/site'
export default function App() {
  return (
    <>
      <PlantDecor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Projects />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp message={site.hero.whatsappMessage} />
    </>
  )
}
