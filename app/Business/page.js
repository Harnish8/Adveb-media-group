"use client";
import Header from './components/BusinessHeader'
import Footer from './components/BusinessFooter'

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// import HeroSection from './components/HeroSection'
// import HeroSection1 from './components/HeroSection1'
// import ServicesSection from './components/ServicesSection'
// import CompanySection from './components/CompanySection'
// import ChooseSection from './components/ChooseSection'
// import WorkingProcess from './components/WorkingProcess'
// import FeaturesSection from './components/FeaturesSection'
// import MissionSection from './components/MissionSection'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//         <Header />
//         <HeroSection1 />
//         <ChooseSection />
//         <MissionSection />
//         <CompanySection />
//         <WorkingProcess />
//         <FeaturesSection />
//         <Footer />
//     </div>
//   )
// }


import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
// import { Button } from '@/components/ui/button';
import { Card, CardContent } from './components/Card';



export default function Home() {
  const services = [
    {
      title: 'Business Strategy & Growth',
      description: 'Strategic planning and growth roadmaps to accelerate your business success.',
      icon: TrendingUp,
      href: '/Business/Service/business-strategy',
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize operations and embrace digital innovation for competitive advantage.',
      icon: Zap,
      href: '/Business/Service/digital-transformation',
    },
    {
      title: 'Marketing & Brand Strategy',
      description: 'Build powerful brands and marketing strategies that drive customer engagement.',
      icon: Users,
      href: '/Business/Service/marketing-strategy',
    },
    {
      title: 'Financial Advisory',
      description: 'Expert financial planning and advisory services to optimize your financial performance.',
      icon: Shield,
      href: '/Business/Service/financial-advisory',
    },
  ];

  const features = [
    'Proven track record of success',
    'Industry leading expertise',
    'Customized solutions for your needs',
    'Data driven decision making',
    'Ongoing support and partnership',
    'Results focused approach',
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1585846328761-acbf5a12beea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fGJsdWV8MTc1OTgwODk1Mnww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Transform Your Business with Strategic Consulting
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Partner with industry experts to drive growth, innovation, and sustainable success for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/Business/Contact">
                <Button size="lg" className="bg-white !text-blue-800 hover:bg-gray-100 text-lg px-8">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link className='text-blue-800' href="/Business/Service">
                <Button size="lg" className="bg-white !text-blue-800 hover:bg-gray-100 text-lg px-8">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center my-4">
                      <Icon className="text-blue-800" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Link href={service.href} className="text-blue-800 font-medium hover:text-blue-600 flex items-center">
                      Learn More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/Business/Service">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-700">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Adveb Media Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver measurable results through proven methodologies and deep industry expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="text-blue-800 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      
      <Footer />
    </div>
  );
}