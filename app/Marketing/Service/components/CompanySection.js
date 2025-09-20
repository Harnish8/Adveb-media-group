// import Image from 'next/image';

// export default function CompanySection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap items-center -mx-4">
//           <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <span className="text-blue-600 font-semibold text-sm">Our Company</span>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//                   Innovative It Helping Service All Over the World
//                 </h2>
//               </div>
//               <p className="text-gray-600">
//                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
//               </p>
//               <p className="text-gray-600">
//                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
//               </p>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 px-4">
//             <div className="relative">
//               <Image
//                 src="/images/company-img.jpg"
//                 alt="Our team working together"
//                 width={600}
//                 height={400}
//                 layout="responsive"
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import React from 'react';
import Link from 'next/link';
import { FileText, Mail, Lightbulb, Share2, Search, TrendingUp, Globe, Smartphone, PenTool, Layers, Feather  } from "lucide-react";

const CompanySection = () => {
  // const services = [
  //   {
  //     icon: FileText,
  //     title: "Content Marketing",
  //     description: "We develop strategic, audience-focused content that builds brand authority and engagement. From articles to social media, our content drives meaningful connections and results.",
  //     link: "/services/content-marketing",
  //     isGradient: false,
  //     gradientCard: false,
  //     slug: "web-development"
  //   },
  //   {
  //     icon: Mail,
  //     title: "Email Marketing", 
  //     description: "We design targeted email campaigns that nurture leads and drive conversions. Our strategies focus on personalization, automation, and measurable engagement.",
  //     link: "/services/email-marketing",
  //     isGradient: false,
  //     gradientCard: false,
  //     slug: "web-development"
  //   },
  //   {
  //     icon: Lightbulb,
  //     title: "Brand Strategy",
  //     description: "We craft clear, compelling brand identities that connect with your audience. From positioning to messaging, we help build lasting brand value.",
  //     link: "/services/brand-strategy",
  //     isGradient: false,
  //     gradientCard: false,
  //     slug: "web-development"
  //   },
  //   {
  //     icon: Share2,
  //     title: "Social Media",
  //     description: "We grow your presence across platforms with engaging, on-brand content. Our campaigns boost visibility, drive interaction, and foster community.",
  //     link: "/services/social-media",
  //     isGradient: false,
  //     gradientCard: false,
  //     slug: "web-development"
  //   },
  //   {
  //     icon: Search,
  //     title: "Search Advertising",
  //     description: "Drive instant traffic and leads with targeted, effective paid search engine campaigns.",
  //     link: "/services/search-advertising",
  //     isGradient: false,
  //     gradientCard: false,
  //     slug: "web-development"
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "SEO Optimization",
  //     description: "Improve search visibility and organic traffic with expert on-page and technical SEO.",
  //     link: "/services/seo-optimization",
  //     isGradient: false,
  //     gradientCard: false,
  //     slug: "web-development"
  //   }
  // ];
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "We build modern, responsive, and SEO-friendly websites that drive traffic and turn visitors into customers.",
      link: "/services/web-development",
      isGradient: false,
      gradientCard: false,
      slug: "web-development"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "We create intuitive, high-performance mobile apps for iOS and Android to connect you with your audience.",
      link: "/services/app-development",
      isGradient: false,
      gradientCard: false,
      slug: "app-development"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "We design powerful email campaigns to nurture leads, build customer loyalty, and drive repeat business.",
      link: "/services/email-marketing",
      isGradient: false,
      gradientCard: false,
      slug: "email-marketing"
    },
    {
      icon: Search,
      title: "SEO",
      description: "Improve your search visibility and organic traffic with expert on-page and technical SEO strategies.",
      link: "/services/seo",
      isGradient: false,
      gradientCard: false,
      slug: "seo"
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "We create compelling visual identities and stunning graphics that make your brand memorable.",
      link: "/services/graphic-design",
      isGradient: false,
      gradientCard: false,
      slug: "graphic-design"
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "We craft seamless user experiences and intuitive interfaces that delight users and boost conversions.",
      link: "/services/ui-ux-design",
      isGradient: false,
      gradientCard: false,
      slug: "ui-ux-design"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "We manage your social presence, creating engaging content to grow your community and brand.",
      link: "/services/social-media-management",
      isGradient: false,
      gradientCard: false,
      slug: "social-media-management"
    },
    {
      icon: Feather,
      title: "Content Writing",
      description: "We write compelling, SEO-optimized content that engages your audience and establishes your brand authority.",
      link: "/services/content-writing",
      isGradient: false,
      gradientCard: false,
      slug: "content-writing"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0e4585] to-[#00b1ff] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-gray-600 font-medium">Our quality services</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl">
            Digital marketing services aligned with your goals
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-3xl p-8 text-left hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer
                  ${service.isGradient
                    ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gradient-to-br hover:from-[#0e4585] hover:via-[#1664c0] hover:to-[#00b1ff] hover:text-white'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Dot Pattern - always visible */}
                <div className="absolute top-8 right-8 opacity-30">
                  <div className="grid grid-cols-8 gap-2">
                    {[...Array(32)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-colors duration-500 ${service.isGradient
                          ? 'bg-white/40'
                          : 'bg-gray-400/60 group-hover:bg-white/40'
                        }`}></div>
                    ))}
                  </div>
                </div>

                {/* Floating animation particles on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
                  <div className="absolute top-12 right-6 w-1 h-1 bg-white/30 rounded-full animate-float delay-300"></div>
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white/35 rounded-full animate-float delay-700"></div>
                </div>

                <Link key={service.slug} href={`/Marketing/Service/${service.slug}`} className="relative z-10 block h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon Section */}
                    <div className="mb-8">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-all duration-300 ${service.isGradient
                          ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                          : 'bg-[#2563eb] shadow-md group-hover:bg-white group-hover:backdrop-blur-sm group-hover:border-white/30'
                        }`} style={{ animationDelay: `${index * 300}ms` }}>
                        <Icon className={`w-10 h-10 transition-colors duration-500 ${service.isGradient
                            ? 'text-[#2563eb]'
                            : 'text-white group-hover:text-[#2563eb]'
                          }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold mb-6 relative transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className={`mb-8 leading-relaxed relative flex-1 transition-colors duration-500 ${service.isGradient
                          ? 'text-white/90'
                          : 'text-gray-600 group-hover:text-white/90'
                        }`}>
                        {service.description}
                      </p>

                      {/* Learn More Button */}
                      <div className="relative">
                        <div className="inline-flex items-center space-x-3 font-bold text-sm tracking-wider group-hover:translate-x-2 transition-all duration-300">
                          <span>LEARN MORE</span>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500 ${service.isGradient
                              ? 'bg-white/20'
                              : 'bg-[#2563eb] group-hover:bg-white/20'
                            }`}>
                            <svg className={`w-3 h-3 transition-colors duration-500 ${service.isGradient
                                ? 'text-white'
                                : 'text-white'
                              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// export default ServicesSection;
export default CompanySection;