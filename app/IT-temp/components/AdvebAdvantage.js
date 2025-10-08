// import { FilmIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
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

const AdvantageCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 transition duration-300 hover:shadow-lg rounded-xl">
    <div className="mx-auto w-16 h-16 rounded-full bg-adveb-blue/10 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-adveb-blue" />
    </div>
    <h3 className="text-xl font-semibold text-adveb-dark mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function AdvebAdvantage() {
  const advantages = [
    {
      icon: Cloud,
      title: 'Digital Agility',
      description: 'Drawing on our media heritage, we build IT systems that are fast, flexible, and ready for high-demand digital workflows.',
    },
    {
      icon: Globe,
      title: 'Local, Expert Support',
      description: 'Australian-based engineers providing rapid, local support that understands your operating environment and compliance.',
    },
    {
      icon: Palette,
      title: 'Proactive Security',
      description: 'Focus on prevention, implementing next-generation cybersecurity that protects your business from Australian-specific threats.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-adveb-dark text-center mb-12">
          The Adveb Difference: Media-Focused IT Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <AdvantageCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}