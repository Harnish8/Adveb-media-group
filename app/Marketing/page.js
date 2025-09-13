import Header from './components/MarketingHeader'
import Footer from '../components/Footer'

import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import CompanySection from './components/CompanySection'
import ChooseSection from './components/ChooseSection'
import WorkingProcess from './components/WorkingProcess'
import FeaturesSection from './components/FeaturesSection'
import MissionSection from './components/MissionSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        {/* <ServicesSection /> */}
        <ChooseSection />
        <MissionSection />
        <CompanySection />
        <WorkingProcess />
        <FeaturesSection />
        <Footer />
    </div>
  )
}