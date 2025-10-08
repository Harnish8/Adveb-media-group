

"use client";
import React from 'react';
import Link from 'next/link';
import { TrendingUp, Handshake, Shield } from "lucide-react";

const IntegratedExpertise = () => {
  const services = [
    {
      icon: Handshake,
      title: "Business",
      description: "Optimize operations and lead new opportunities through strategic consulting.",
      link: "/services/business",
      buttonText: "Learn More",
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      cardGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
      buttonGradient: "from-emerald-500 to-teal-500",
      buttonHover: "hover:from-emerald-600 hover:to-teal-600",
      particleColor: "bg-emerald-300",
      particleColor2: "bg-teal-300",
      particleColor3: "bg-cyan-300"
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "Drive growth and amplify your brand with our immersive strategies.",
      link: "/Marketing",
      buttonText: "Learn More",
      gradient: "from-orange-400 via-red-400 to-pink-500",
      cardGradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
      buttonGradient: "from-orange-500 to-red-500",
      buttonHover: "hover:from-orange-600 hover:to-red-600",
      particleColor: "bg-orange-300",
      particleColor2: "bg-red-300",
      particleColor3: "bg-pink-300"
    },
    {
      icon: Shield,
      title: "IT",
      description: "Build robust foundations and secure future with cutting technology solutions.",
      link: "https://adveb-media-group-it.vercel.app/",
      buttonText: "Learn More",
      gradient: "from-blue-400 via-purple-400 to-indigo-500",
      cardGradient: "from-blue-500/20 via-purple-500/20 to-indigo-500/20",
      iconBg: "bg-gradient-to-br from-blue-400 to-purple-500",
      buttonGradient: "from-blue-500 to-purple-500",
      buttonHover: "hover:from-blue-600 hover:to-purple-600",
      particleColor: "bg-blue-300",
      particleColor2: "bg-purple-300",
      particleColor3: "bg-indigo-300"
    }
  ];

  return (
    <section className="py-8-custom lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Integrated Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-gray-500/20 animate-fade-in-up border border-gray-200/50 min-h-[380px] flex flex-col justify-between overflow-hidden group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.cardGradient} opacity-80`}></div>
                
                {/* Dark style particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-6 left-6 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-20 left-12 w-3 h-3 bg-pink-400/40 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-16 right-6 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse delay-1200"></div>
                  
                  {/* Geometric shapes */}
                  <div className="absolute top-8 right-12 w-4 h-4 border border-cyan-400/30 rotate-45 animate-spin opacity-40" style={{animationDuration: '8s'}}></div>
                  <div className="absolute bottom-12 left-16 w-3 h-3 border border-purple-400/30 rounded-full animate-bounce opacity-40" style={{animationDelay: '2s'}}></div>
                </div>
                
                <Link href={service.link} className="relative z-10 block" target="_blank">
                  <div className="flex justify-center mb-6">
                    <div className={`p-5 rounded-2xl ${service.iconBg} shadow-xl animate-float hover:scale-110 transition-transform duration-300`} style={{ animationDelay: `${index * 300}ms` }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 relative">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed relative">
                    {service.description}
                  </p>
                </Link>
                
                <div className="mt-auto relative z-10">
                  <Link href={service.link} className={`inline-flex items-center justify-center bg-gradient-to-r ${service.buttonGradient} ${service.buttonHover} text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 font-semibold w-full relative overflow-hidden group`} target="_blank">
                    <span className="relative z-10">{service.buttonText}</span>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            );
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
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default IntegratedExpertise;