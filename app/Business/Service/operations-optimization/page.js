import Link from 'next/link';
import Header from '../../components/BusinessHeader'
import Footer from '../../../components/Footer'
import { Card, CardContent } from '../../components/Card';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Cog, BarChart, GitBranch, Zap } from 'lucide-react';

// export const metadata = {
//   title: 'Operations & Process Optimization Consulting | Adveb Media Group',
//   description: 'Streamline operations and maximize productivity. Expert process optimization and operational excellence consulting for business efficiency.',
// };

export default function OperationsOptimization() {
  const offerings = [
    {
      icon: Cog,
      title: 'Process Improvement',
      description: 'Identify and eliminate inefficiencies to streamline operations.',
    },
    {
      icon: BarChart,
      title: 'Operational Excellence',
      description: 'Build lean, agile operations that deliver consistent performance.',
    },
    {
      icon: GitBranch,
      title: 'Supply Chain',
      description: 'Optimize supply chain operations for cost efficiency and reliability.',
    },
    {
      icon: Zap,
      title: 'Quality Management',
      description: 'Implement quality systems that ensure consistent, superior outcomes.',
    },
  ];

  const benefits = [
    'Reduced operational costs',
    'Improved productivity',
    'Enhanced quality and consistency',
    'Faster cycle times',
    'Better resource utilization',
    'Increased customer satisfaction',
  ];

  const services = [
    {
      title: 'Lean Six Sigma',
      description: 'Apply proven methodologies to eliminate waste and reduce variation in processes.',
    },
    {
      title: 'Workflow Automation',
      description: 'Automate manual processes to improve efficiency and reduce errors.',
    },
    {
      title: 'Performance Metrics',
      description: 'Develop KPIs and dashboards to monitor and improve operational performance.',
    },
    {
      title: 'Change Management',
      description: 'Successfully implement operational changes with minimal disruption.',
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
                Operations & Process Optimization
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Streamline operations, eliminate waste, and build efficient processes that drive business performance.
              </p>
              <Link href="/Business/Contact">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-md h-10 rounded-md bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                  Optimize Operations
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwbmV0d29ya3xlbnwwfHx8Ymx1ZXwxNzU5ODA4OTUyfDA&ixlib=rb-4.1.0&q=85"
                alt="Operations optimization and process improvement"
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
              Operations Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to maximize operational efficiency.
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
              Specialized Optimization Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored approaches for operational excellence.
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
              Operational Benefits
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