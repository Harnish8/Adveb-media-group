// import Header from './components/Header'
// import HeroSection1 from './components/HeroSection1'
// import UnifiedBrandStory from './components/UnifiedBrandStory'
// import ServicesSection from './components/ServicesSection'
// import SuccessStories from './components/SuccessStories'
// import Testimonials from './components/Testimonials'
// import TrustSection from './components/TrustSection'
// import ContactForm from './components/ContactForm'
// import IntegratedExpertise from './components/IntegratedExpertise'
// import Footer from './components/Footer'
// import IntegratedExpertise1 from './components/IntegratedExpertise1'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <HeroSection1 />
//       <IntegratedExpertise />
//       <UnifiedBrandStory />
//       <SuccessStories />
//       <Testimonials />
//       <TrustSection />
//       <div id="contact-section">
//         <ContactForm />
//       </div>
//       <Footer />
//     </div>
//   )
// }

"use client";
import { useState, useEffect } from 'react';
import Header from './components/Header'
import HeroSection1 from './components/HeroSection1'
import UnifiedBrandStory from './components/UnifiedBrandStory'
import SuccessStories from './components/SuccessStories'
import Testimonials from './components/Testimonials'
import TrustSection from './components/TrustSection'
import ContactForm from './components/ContactForm'
import IntegratedExpertise from './components/IntegratedExpertise'
import Footer from './components/Footer'
import Image from 'next/image'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-4 rounded-full p-4">
            <Image
              src="/images/logo.png"
              alt="ADVEB Media Group"
              width={120}
              height={120}
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          <div className="w-16 h-16 mx-auto border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection1 />
      <IntegratedExpertise />
      <UnifiedBrandStory />
      <SuccessStories />
      <Testimonials />
      <TrustSection />
      <div id="contact-section">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}