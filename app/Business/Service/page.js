import Header from '../components/BusinessHeader'
import Footer from '../components/BusinessFooter'


// import TechnologySection from './components/TechnologySection'
// import CompanySection from './components/CompanySection'
// import ClientSection from './components/ClientSection'
// import FeatureSection from './components/FeatureSection'
// import PageTitle from './components/PageTitle'
// import ProcessTransparency from './components/ProcessTransparency'
// import TechnologyStack from './components/TechnologyStack'

// export default function Home() {

//   const paths = [
//     { name: 'Home', href: '/' },
//     { name: 'Service', href: '/Marketing/Service' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <PageTitle
//         title="Service"
//         paths={paths}
//       />
//       <CompanySection />
//       <ProcessTransparency />
//       <TechnologyStack />
//       {/* <TechnologySection /> */}
//       {/* <ClientSection /> */}
//       {/* <FeatureSection /> */}
//       <Footer />
//     </div>
//   )
// }

import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Users, DollarSign, Server, Cog } from 'lucide-react';
import { Card, CardContent } from '../components/Card';


export const metadata = {
  title: 'Our Services - Business Consulting Solutions | Adveb Media Group',
  description: 'Comprehensive business consulting services including strategy, digital transformation, marketing, financial advisory, IT solutions, and operations optimization.',
};

export default function Services() {
  const services = [
    {
      title: 'Business Strategy & Growth',
      description: 'Develop comprehensive strategies that drive sustainable growth and competitive advantage. Our strategic planning services help you identify opportunities, overcome challenges, and achieve your long term business objectives.',
      icon: TrendingUp,
      href: '/Business/Service/business-strategy',
      features: ['Strategic Planning', 'Market Analysis', 'Growth Roadmaps', 'Competitive Positioning'],
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your operations and embrace digital innovation to stay ahead in today\'s technology driven marketplace. We guide you through every step of your digital journey.',
      icon: Zap,
      href: '/Business/Service/digital-transformation',
      features: ['Digital Strategy', 'Technology Roadmap', 'Change Management', 'Process Automation'],
    },
    {
      title: 'Marketing & Brand Strategy',
      description: 'Build powerful brands and marketing strategies that resonate with your target audience and drive customer engagement. Create lasting impressions that convert.',
      icon: Users,
      href: '/Business/Service/marketing-strategy',
      features: ['Brand Development', 'Marketing Strategy', 'Customer Insights', 'Digital Marketing'],
    },
    {
      title: 'Financial Advisory & Planning',
      description: 'Expert financial guidance to optimize performance, manage risk, and make informed decisions. Our advisors help you navigate complex financial landscapes with confidence.',
      icon: DollarSign,
      href: '/Business/Service/financial-advisory',
      features: ['Financial Planning', 'Risk Management', 'Investment Strategy', 'Performance Optimization'],
    },
    {
      title: 'IT Solutions & Technology Consulting',
      description: 'Leverage technology to drive efficiency and innovation. From infrastructure to software solutions, we help you make the right technology investments.',
      icon: Server,
      href: '/Business/Service/it-solutions',
      features: ['IT Strategy', 'Infrastructure Design', 'Cloud Solutions', 'Cybersecurity'],
    },
    {
      title: 'Operations & Process Optimization',
      description: 'Streamline operations, eliminate inefficiencies, and maximize productivity. Our process optimization experts help you build lean, agile operations.',
      icon: Cog,
      href: '/Business/Service/operations-optimization',
      features: ['Process Improvement', 'Operational Excellence', 'Supply Chain', 'Quality Management'],
    },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Consulting Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions to transform your business and drive sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Can Help Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert consulting services tailored to your unique challenges and goals.
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="!p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                          <Icon className="text-blue-900" size={32} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded">
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Link href={service.href}>
                          {/* <button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                            Learn More
                            <ArrowRight className="ml-2" size={16} />
                          </button> */}
                          <button
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-900 bg-background px-4 py-2 h-9 text-sm font-medium text-blue-900 shadow-sm transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900 disabled:pointer-events-none disabled:opacity-50"
                          >
                            Learn More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="ml-2 size-4 shrink-0"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </button>

                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}