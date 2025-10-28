import Header from '../components/MarketingHeader'
import Footer from '../components/MarketingFooter'


import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import PageTitle from './components/PageTitle'

export default function Home() {

  const paths = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/Marketing/Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageTitle
        title="Contact"
        paths={paths}
      />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  )
}