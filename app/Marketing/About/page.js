import Header from '../components/MarketingHeader'
import Footer from '../components/MarketingFooter'


import TechnologySection from './components/TechnologySection'
import CompanySection from './components/CompanySection'
import ClientSection from './components/ClientSection'
import FeatureSection from './components/FeatureSection'
import PageTitle from './components/PageTitle'
import Mission from './components/Mission'

export default function Home() {

  const paths = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/Marketing/About' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageTitle
        title="About"
        paths={paths}
      />
      <Mission />
      <ClientSection />
      <CompanySection />
      <TechnologySection />
      {/* <FeatureSection /> */}
      <Footer />
    </div>
  )
}