import Header from './components/MarketingHeader'
import Footer from './components/MarketingFooter'

import HeroSection from './components/HeroSection'
import HeroSection1 from './components/HeroSection1'
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
        {/* <HeroSection /> */}
        <HeroSection1 />
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