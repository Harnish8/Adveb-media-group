"use client";
import Header from '../components/BusinessHeader'
import Footer from '../../components/Footer'

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// import TechnologySection from './components/TechnologySection'
// import CompanySection from './components/CompanySection'
// import ClientSection from './components/ClientSection'
// import FeatureSection from './components/FeatureSection'
// import PageTitle from './components/PageTitle'
// import Mission from './components/Mission'

// export default function Home() {

//   const paths = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/Marketing/About' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <PageTitle
//         title="About"
//         paths={paths}
//       />
//       <Mission />
//       <ClientSection />
//       <CompanySection />
//       <TechnologySection />
//       {/* <FeatureSection /> */}
//       <Footer />
//     </div>
//   )
// }


import Image from 'next/image';
import { Target, Award, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../components/Card';


export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your bottom line and business objectives.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality and expertise ensures you receive world-class consulting services every time.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside you as trusted advisors, building long-term relationships based on mutual success.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge strategies and technologies to keep your business ahead of the competition.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Consultants' },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Adveb Media Group
            </h1>
            <p className="text-xl text-gray-200">
              Your trusted partner for business transformation and strategic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Adveb Media Group, we empower businesses to reach their full potential through strategic consulting, innovative solutions, and dedicated partnership.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Since our founding, weve helped hundreds of organizations navigate complex challenges, embrace digital transformation, and achieve sustainable growth in competitive markets.
              </p>
              <p className="text-lg text-gray-700">
                Our team of seasoned consultants brings deep industry expertise across strategy, technology, marketing, finance, and operations to deliver comprehensive solutions tailored to your unique needs.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden content-center">
              {/* <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MHx8fGJsdWV8MTc1OTgwODk1N3ww&ixlib=rb-4.1.0&q=85"
                alt="Professional team collaboration at Adveb Media Group"
                className="w-full h-full object-cover"
              /> */}
              <DotLottieReact
                src="/lottie/014.lottie" // put your .lottie file in /public
                loop
                autoplay
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="!p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-900" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Adveb Media Group?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Industry Expertise
                </h3>
                <p className="text-gray-700">
                  Our consultants bring decades of combined experience across diverse industries, ensuring you benefit from proven strategies and best practices.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tailored Solutions
                </h3>
                <p className="text-gray-700">
                  We dont believe in one-size-fits-all approaches. Every engagement is customized to address your specific challenges and opportunities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proven Methodology
                </h3>
                <p className="text-gray-700">
                  Our structured approach combines data-driven analysis with strategic thinking to deliver sustainable results.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ongoing Support
                </h3>
                <p className="text-gray-700">
                  We remain your partner beyond project completion, providing continued guidance and support as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sydney Office Image */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Sydney Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the business district
            </p>
          </div>
          <div className="relative h-96 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
            {/* <img
              src="https://images.unsplash.com/photo-1578032888211-fcc2c09ac744?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvZmZpY2V8ZW58MHx8fGJsdWV8MTc1OTgwODk2NHww&ixlib=rb-4.1.0&q=85"
              alt="Adveb Media Group office location in Sydney CBD"
              className="w-full h-full object-cover"
            /> */}
            <Image
              src="https://images.unsplash.com/photo-1578032888211-fcc2c09ac744?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvZmZpY2V8ZW58MHx8fGJsdWV8MTc1OTgwODk2NHww&ixlib=rb-4.1.0&q=85"
              alt="Adveb Media Group office location in Sydney CBD"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}