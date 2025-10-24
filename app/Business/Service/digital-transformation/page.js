import Link from 'next/link';
import Header from '../../components/BusinessHeader'
import Footer from '../../../components/Footer'
import { Card, CardContent } from '../../components/Card';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Zap, Cloud, Smartphone, Cpu } from 'lucide-react';


// export const metadata = {
//   title: 'Digital Transformation Consulting | Adveb Media Group',
//   description: 'Drive digital innovation and modernize your operations. Expert digital transformation consulting to help your business thrive in the digital age.',
// };

export default function DigitalTransformation() {
  const offerings = [
    {
      icon: Zap,
      title: 'Digital Strategy',
      description: 'Comprehensive roadmaps to guide your digital transformation journey.',
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure for enhanced agility and scalability.',
    },
    {
      icon: Cpu,
      title: 'Process Automation',
      description: 'Automate workflows and operations to improve efficiency and reduce costs.',
    },
    {
      icon: Smartphone,
      title: 'Digital Customer Experience',
      description: 'Transform customer interactions with digital-first experiences.',
    },
  ];

  const benefits = [
    'Increased operational efficiency',
    'Enhanced customer experiences',
    'Improved data-driven decision making',
    'Greater business agility',
    'Competitive advantage through innovation',
    'Reduced operational costs',
  ];

  const keyAreas = [
    {
      title: 'Technology Modernization',
      description: 'Upgrade legacy systems and adopt cutting-edge technologies that drive business value.',
    },
    {
      title: 'Data & Analytics',
      description: 'Harness the power of data to gain insights and make informed strategic decisions.',
    },
    {
      title: 'Change Management',
      description: 'Successfully navigate organizational change and build digital-ready teams.',
    },
    {
      title: 'Innovation Culture',
      description: 'Foster a culture of innovation and continuous improvement across your organization.',
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
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Embrace digital innovation to modernize operations, enhance customer experiences, and drive competitive advantage.
              </p>
              <Link href="/Business/Contact">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-md h-10 rounded-md bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                  Begin Your Digital Journey
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1530825894095-9c184b068fcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyNHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MHx8fGJsdWV8MTc1OTgwODk1Mnww&ixlib=rb-4.1.0&q=85"
                alt="Digital transformation technology"
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
              Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions to accelerate your digital transformation.
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

      {/* Key Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive approach to digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {keyAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
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
              Transformation Benefits
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