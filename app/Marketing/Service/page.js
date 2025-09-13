import Header from '../components/MarketingHeader'
import Footer from '../../components/Footer'


import TechnologySection from './components/TechnologySection'
import CompanySection from './components/CompanySection'
import ClientSection from './components/ClientSection'
import FeatureSection from './components/FeatureSection'
import PageTitle from './components/PageTitle'
import ProcessTransparency from './components/ProcessTransparency'
import TechnologyStack from './components/TechnologyStack'

export default function Home() {

  const paths = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/Marketing/Service' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageTitle
        title="Service"
        paths={paths}
      />
      <CompanySection />
      <ProcessTransparency />
      <TechnologyStack />
      {/* <TechnologySection /> */}
      {/* <ClientSection /> */}
      {/* <FeatureSection /> */}
      <Footer />
    </div>
  )
}