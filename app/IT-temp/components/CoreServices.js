import Link from 'next/link';
// import { ComputerDesktopIcon, CloudIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline'; 
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Shield,
  Zap,
  Layers,
  Server,
  Palette,
  BarChart3,
  Settings
} from 'lucide-react'

// Shared Service Card component
const ServiceCard = ({ icon: Icon, title, description, link, cta }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-adveb-blue/30 transition duration-300 border border-gray-100">
    <div className="p-3 w-12 h-12 rounded-full bg-adveb-blue/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-adveb-blue" />
    </div>
    <h3 className="text-xl font-bold text-adveb-dark mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 text-sm">{description}</p>
    <Link href={link} className="inline-block text-adveb-blue font-semibold hover:text-blue-700 transition duration-150">
      {cta} &rarr;
    </Link>
  </div>
);

export default function CoreServices() {
  const services = [
    {
      icon: Globe,
      title: 'Managed IT Support',
      description: 'Reliable, 24/7 IT Support. Guaranteed maximum uptime and predictable costs with flat-rate service plans.',
      link: '/services#managed',
      cta: 'Managed Support Plans'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Seamless Cloud Migration & Optimisation. Harness the power of Azure and Microsoft 365 for scalability.',
      link: '/services#cloud',
      cta: 'Explore Cloud Solutions'
    },
    {
      icon: Palette,
      title: 'Cybersecurity',
      description: 'Advanced Threat Protection. Fortify your network and meet Australian data protection standards.',
      link: '/services#security',
      cta: 'Secure My Business'
    },
    {
      icon: Layers,
      title: 'IT Consulting',
      description: 'Future-Proofing Your Tech. Strategic planning to align your technology investment with business goals.',
      link: '/services#consulting',
      cta: 'Book a Strategy Session'
    },
  ];

  return (
    <section className="py-16 bg-adveb-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-adveb-dark text-center mb-12">
          Our Core IT Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}