

"use client";
import React from 'react';
import Link from 'next/link';
import { TrendingUp, Handshake, Shield } from "lucide-react";

const IntegratedExpertise1 = () => {
  console.log('Services component rendered')
  
  const services = [
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "Drive growth and amplify your brand with our immersive strategies.",
      buttonText: "Learn More",
      link: "/marketing", // Added a link for the button to navigate to
      iconGradient: "from-orange-400 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
    },
    {
      icon: Handshake,
      title: "Business", 
      description: "Optimize operations and lead new opportunities through strategic consulting.",
      buttonText: "Learn More",
      link: "/business", // Added a link for the button to navigate to
      iconGradient: "from-cyan-400 to-teal-500",
      iconBg: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20"
    },
    {
      icon: Shield,
      title: "IT",
      description: "Build robust foundations and secure future with cutting technology solutions.",
      buttonText: "Learn More", 
      link: "/it", // Added a link for the button to navigate to
      iconGradient: "from-blue-400 to-indigo-500",
      iconBg: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
    }
  ]
  
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Integrated Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up border border-slate-600/30 min-h-[380px] flex flex-col justify-between overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-800/40 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
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
                
                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative p-6 rounded-2xl ${service.iconBg} backdrop-blur-sm shadow-2xl animate-float hover:scale-110 transition-transform duration-300 border border-white/10`} style={{ animationDelay: `${index * 300}ms` }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                      <Icon className={`w-12 h-12 relative z-10`} 
                            style={{
                              background: `linear-gradient(135deg, ${service.iconGradient.includes('orange') ? '#f97316, #ef4444' : service.iconGradient.includes('cyan') ? '#06b6d4, #14b8a6' : '#3b82f6, #6366f1'})`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }} 
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white relative">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed relative">
                    {service.description}
                  </p>
                </div>
                
                {/* Button */}
                <div className="mt-auto relative z-10">
                  <Link href={service.link} className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 font-semibold w-full relative overflow-hidden group">
                    <span className="relative z-10">{service.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </div>
                
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
  )
}

export default IntegratedExpertise1



