import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Investment from '@/components/Investment'
import RevenueShare from '@/components/RevenueShare'
import Exclusivity from '@/components/Exclusivity'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Investment />
        <RevenueShare />
        <Exclusivity />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}
