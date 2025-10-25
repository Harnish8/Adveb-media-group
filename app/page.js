import Header from './components/Header'
import HeroSection1 from './components/HeroSection1'
import UnifiedBrandStory from './components/UnifiedBrandStory'
import ServicesSection from './components/ServicesSection'
import SuccessStories from './components/SuccessStories'
import Testimonials from './components/Testimonials'
import TrustSection from './components/TrustSection'
import ContactForm from './components/ContactForm'
import IntegratedExpertise from './components/IntegratedExpertise'
import Footer from './components/Footer'
import IntegratedExpertise1 from './components/IntegratedExpertise1'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection1 />
      <IntegratedExpertise />
      {/* <IntegratedExpertise1 /> */}
      {/* <ServicesSection /> */}
      <UnifiedBrandStory />
      <SuccessStories />
      <Testimonials />
      <TrustSection />
      {/* <ContactForm /> */}
      <div id="contact-section">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}