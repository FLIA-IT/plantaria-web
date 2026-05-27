import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Products } from './components/sections/Products'
import { Trust } from './components/sections/Trust'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
