import Link from 'next/link';
import Header from '../../components/BusinessHeader'
import Footer from '../../components/BusinessFooter'
import { Card, CardContent } from '../../components/Card';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

// export const metadata = {
//   title: 'Business Strategy & Growth Consulting | Adveb Media Group',
//   description: 'Expert business strategy consulting to drive sustainable growth. Strategic planning, market analysis, and competitive positioning services for forward-thinking organizations.',
// };

export default function BusinessStrategy() {
  const offerings = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive business strategies aligned with your vision and market opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Identify and capitalize on growth opportunities to accelerate business expansion.',
    },
    {
      icon: Users,
      title: 'Market Analysis',
      description: 'Deep market insights to understand your competitive landscape and customer needs.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Strategy',
      description: 'Foster innovation and develop strategies to stay ahead of market disruption.',
    },
  ];

  const benefits = [
    'Clear strategic direction and roadmap',
    'Improved competitive positioning',
    'Accelerated revenue growth',
    'Enhanced decision making capabilities',
    'Better resource allocation',
    'Sustainable competitive advantage',
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Analysis',
      description: 'We assess your current position, challenges, and opportunities through comprehensive analysis.',
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'We craft customized strategies that align with your goals and market realities.',
    },
    {
      step: '3',
      title: 'Implementation Planning',
      description: 'We create detailed action plans with clear milestones and accountability.',
    },
    {
      step: '4',
      title: 'Execution Support',
      description: 'We support you throughout implementation to ensure successful strategy execution.',
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
                Business Strategy & Growth
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Transform your vision into actionable strategies that drive sustainable growth and competitive advantage.
              </p>
              <Link href="/Business/Contact">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-md h-10 rounded-md bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                  Start Your Strategy Journey
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1659355894058-c02512c16533?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDB8fHxibHVlfDE3NTk4MDg5NTJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Business strategy consulting session"
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive strategy services to position your business for long-term success.
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

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to develop and execute winning strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
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
              Key Benefits
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