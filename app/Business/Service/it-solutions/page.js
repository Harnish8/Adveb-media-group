import Link from 'next/link';
import Header from '../../components/BusinessHeader'
import Footer from '../../../components/Footer'
import { Card, CardContent } from '../../components/Card';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Server, Cloud, Shield, Cpu } from 'lucide-react';

// export const metadata = {
//   title: 'IT Solutions & Technology Consulting | Adveb Media Group',
//   description: 'Expert IT consulting and technology solutions to drive efficiency and innovation. Infrastructure, cloud, cybersecurity, and software consulting services.',
// };

export default function ITSolutions() {
  const offerings = [
    {
      icon: Server,
      title: 'IT Strategy',
      description: 'Align technology investments with business objectives for maximum value.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Design and implement scalable cloud infrastructure and services.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security strategies and solutions.',
    },
    {
      icon: Cpu,
      title: 'Infrastructure Design',
      description: 'Build robust, scalable IT infrastructure to support business growth.',
    },
  ];

  const benefits = [
    'Reduced IT operational costs',
    'Enhanced security posture',
    'Improved system reliability',
    'Greater scalability and flexibility',
    'Faster time to market',
    'Better technology ROI',
  ];

  const services = [
    {
      title: 'Enterprise Architecture',
      description: 'Design comprehensive technology architectures that support your business strategy and operations.',
    },
    {
      title: 'Software Development Consulting',
      description: 'Expert guidance on software selection, development practices, and technology stack decisions.',
    },
    {
      title: 'IT Modernization',
      description: 'Upgrade legacy systems and infrastructure to modern, efficient platforms.',
    },
    {
      title: 'Disaster Recovery Planning',
      description: 'Ensure business continuity with robust backup and recovery strategies.',
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
                IT Solutions & Technology Consulting
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Leverage technology to drive efficiency, innovation, and competitive advantage through expert IT consulting.
              </p>
              <Link href="/Business/Contact">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-md h-10 rounded-md bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                  Modernize Your IT
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxjb2RlJTIwbGFwdG9wfGVufDB8fHxibHVlfDE3NTk4MDg5NTJ8MA&ixlib=rb-4.1.0&q=85"
                alt="IT solutions and technology consulting"
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
              Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions to power your digital business.
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
              Specialized IT Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert solutions for complex technology challenges.
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
              Technology Benefits
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