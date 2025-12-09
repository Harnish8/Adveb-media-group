import Link from 'next/link';
import Header from '../../components/BusinessHeader'
import Footer from '../../components/BusinessFooter'
import { Card, CardContent } from '../../components/Card';
import Image from 'next/image';
import { ArrowRight, CheckCircle, DollarSign, PieChart, Shield, TrendingUp } from 'lucide-react';

// export const metadata = {
//   title: 'Financial Advisory & Planning Services | Adveb Media Group',
//   description: 'Expert financial consulting to optimize performance and manage risk. Comprehensive financial planning and advisory services for business success.',
// };

export default function FinancialAdvisory() {
  const offerings = [
    {
      icon: PieChart,
      title: 'Financial Planning',
      description: 'Strategic financial plans to support your business objectives and growth.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate financial risks to protect your business.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Strategy',
      description: 'Optimize capital allocation and investment decisions for maximum returns.',
    },
    {
      icon: DollarSign,
      title: 'Performance Analysis',
      description: 'In depth financial analysis to improve profitability and efficiency.',
    },
  ];

  const benefits = [
    'Improved financial performance',
    'Better risk management',
    'Optimized cash flow',
    'Enhanced decision making',
    'Increased profitability',
    'Sustainable growth funding',
  ];

  const services = [
    {
      title: 'Financial Modeling & Forecasting',
      description: 'Build accurate financial models to predict future performance and support strategic planning.',
    },
    {
      title: 'Capital Structure Optimization',
      description: 'Design optimal capital structures that balance risk, cost, and financial flexibility.',
    },
    {
      title: 'Budgeting & Cost Control',
      description: 'Implement effective budgeting processes and cost management strategies.',
    },
    {
      title: 'Mergers & Acquisitions',
      description: 'Expert guidance through M&A transactions from valuation to integration.',
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
                Financial Advisory & Planning
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert financial guidance to optimize performance, manage risk, and drive sustainable business growth.
              </p>
              <Link href="/Business/Contact">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-md h-10 rounded-md bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                  Optimize Your Finances
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/financialadvisory.jpg"
                alt="Financial advisory and planning"
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
              Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions to strengthen your business foundation.
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

      {/* Specialized Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored advisory services for complex financial needs.
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
              Financial Advantages
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