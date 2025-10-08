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
import Header from '../components/ItHeader'
import Footer from '../../components/Footer'

const servicePillars = [
  {
    id: 'managed',
    icon: Code,
    title: 'Pillar 1: Proactive Managed IT Support',
    summary: 'Our most popular service. We move IT from a reactive cost centre to a proactive asset. Enjoy flat-rate, predictable monthly costs and guaranteed service levels.',
    features: ['24/7 Monitoring', 'Unlimited Helpdesk Support', 'Patch Management', 'Vendor Liaisons'],
    cta: 'Get Managed IT Details',
  },
  {
    id: 'cloud',
    icon: Database,
    title: 'Pillar 2: Cloud Migration and Modern Workplace',
    summary: 'Unlock efficiency with the Modern Workplace. Specialising in secure migration to industry-leading cloud platforms like Microsoft Azure and M365.',
    features: ['Microsoft 365 Deployment', 'Azure & AWS Management', 'Data Backup & DRaaS', 'Hybrid Cloud Setups'],
    cta: 'Explore Cloud Solutions',
  },
  {
    id: 'security',
    icon: Server,
    title: 'Pillar 3: Fortified Cybersecurity & Compliance',
    summary: 'Protecting your business is our priority. We implement multi-layered security strategies designed to meet the increasing threat landscape and Australian data protection standards.',
    features: ['Essential Eight Assessment', 'Managed Detection & Response (MDR)', 'Security Awareness Training', 'Endpoint Security'],
    cta: 'See Our Security Portfolio',
  },
  {
    id: 'consulting',
    icon: Smartphone,
    title: 'Pillar 4: Strategic IT Consulting & Projects',
    summary: 'Get a clear roadmap for your technology future. Our consultants provide unbiased, strategic advice to ensure your IT spend delivers maximum ROI.',
    features: ['Digital Transformation Strategy', 'IT Audits & Assessment', 'Procurement & Vendor Selection', 'Project Management'],
    cta: 'Meet Our IT Consultants',
  },
];

const ServicePillar = ({ id, icon: Icon, title, summary, features, cta }) => (
  <section id={id} className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm mb-10">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="w-8 h-8 text-adveb-blue" />
      <h2 className="text-2xl font-bold text-adveb-dark">{title}</h2>
    </div>
    
    <p className="text-gray-700 mb-6 leading-relaxed">{summary}</p>

    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
      {features.map((feature, index) => (
        <p key={index} className="flex items-center text-sm text-gray-600">
          <span className="text-adveb-blue mr-2">✓</span> {feature}
        </p>
      ))}
    </div>
    
    <Link href={`/contact?service=${id}`} className="px-6 py-2 bg-adveb-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
      {cta}
    </Link>
  </section>
);


export default function ServicesPage() {
  return (
    <div className="bg-adveb-light-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Hero */}
        <div className="text-center mb-16 p-10 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-adveb-dark mb-4">
            Your Comprehensive <span className="text-adveb-blue">IT Service Catalogue</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From the core desktop support that keeps you running to the advanced cloud architecture that powers your growth—Adveb Media offers end-to-end technology solutions.
          </p>
        </div>

        {/* Section 2-5: Service Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicePillars.map((pillar) => (
            <ServicePillar key={pillar.id} {...pillar} />
          ))}
        </div>

        {/* Section 6: Final CTA */}
        <section className="mt-16 bg-adveb-dark text-white p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Unsure Where to Start?</h2>
          <p className="text-lg mb-6">
            Our expert team can help you identify the right blend of services tailored precisely to your budget and business goals. No lock-in, just clear, customised advice.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-adveb-blue text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-xl text-lg">
            Get a Custom Service Quote
          </Link>
        </section>

      </div>
    </div>
  );
}