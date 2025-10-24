import Link from 'next/link';
import Header from '../../components/BusinessHeader'
import Footer from '../../../components/Footer'
import { Card, CardContent } from '../../components/Card';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, Megaphone } from 'lucide-react';

// export const metadata = {
//   title: 'Marketing & Brand Strategy Consulting | Adveb Media Group',
//   description: 'Build powerful brands and marketing strategies that drive customer engagement. Expert marketing consulting services to grow your business.',
// };

export default function MarketingStrategy() {
  const offerings = [
    {
      icon: Target,
      title: 'Brand Development',
      description: 'Create compelling brand identities that resonate with your target audience.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Strategy',
      description: 'Develop integrated marketing plans that drive awareness and conversions.',
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep understanding of customer behavior and preferences to inform strategy.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Leverage digital channels to reach and engage your target customers effectively.',
    },
  ];

  const benefits = [
    'Stronger brand recognition',
    'Increased customer engagement',
    'Higher conversion rates',
    'Improved marketing ROI',
    'Better customer retention',
    'Consistent brand messaging',
  ];

  const services = [
    {
      title: 'Brand Strategy & Positioning',
      description: 'Define your unique value proposition and position your brand for maximum impact in the marketplace.',
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that attracts, engages, and converts your target audience.',
    },
    {
      title: 'Social Media Strategy',
      description: 'Build meaningful connections and grow your audience across social platforms.',
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure, analyze, and optimize marketing performance for better results.',
    },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Marketing & Brand Strategy
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Build powerful brands and marketing strategies that resonate with customers and drive sustainable business growth.
              </p>
              <Link href="/Business/Contact">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-md h-10 rounded-md bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                  Elevate Your Brand
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1606588984221-7ab3e2bb038a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fGJsdWV8MTc1OTgwODk1Mnww&ixlib=rb-4.1.0&q=85"
                alt="Marketing strategy brainstorming session"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive marketing solutions to grow your brand and business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card key={index}>
                  <CardContent className="!p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored strategies for every aspect of your marketing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Marketing Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}