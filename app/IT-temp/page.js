import Header from './components/ItHeader'
import Footer from '../components/Footer'
import Hero from './components/Hero';
import AdvebAdvantage from './components/AdvebAdvantage';
import CoreServices from './components/CoreServices';
import StatsSection from './components/StatsSection';
import Testimonial from './components/Testimonial';
import LocalSEO from './components/LocalSEO';
import FinalCTA from './components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />             {/* Section 1 */}
      <AdvebAdvantage />   {/* Section 2 */}
      <CoreServices />     {/* Section 3 */}
      <StatsSection />     {/* Section 4 */}
      <Testimonial />      {/* Section 5 */}
      <LocalSEO />         {/* Section 6 */}
      <FinalCTA />         {/* Section 7 */}
      <Footer />
    </>
  );
}