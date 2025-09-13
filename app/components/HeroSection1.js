// 'use client'
// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import AppIcon from './AppIcon'
// import Button from './ui/Button'

// const HeroSection = () => {
//   const [currentAnimation, setCurrentAnimation] = useState(0)

//   const animationStates = React.useMemo(() => [
//     { title: "IT Infrastructure", color: "text-blue-600", icon: "Server" },
//     { title: "Marketing Excellence", color: "text-cyan-500", icon: "TrendingUp" },
//     { title: "Business Strategy", color: "text-green-600", icon: "Users" }
//   ], [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentAnimation((prev) => (prev + 1) % animationStates.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [animationStates.length])

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1000ms'}}></div>
//         <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2000ms'}}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="inline-flex items-center space-x-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
//                 <AppIcon name="Zap" size={16} />
//                 <span>Integrated Solutions Ecosystem</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Where Expertise{' '}
//                 <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-green-600 bg-clip-text text-transparent">
//                   Converges
//                 </span>{' '}
//                 for Extraordinary Results
//               </h1>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
//                 Transform your business with our integrated approach combining cutting-edge IT infrastructure, 
//                 strategic marketing excellence, and comprehensive business consulting—all working in perfect harmony.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Button
//                 variant="default"
//                 size="lg"
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4"
//                 iconName="ArrowRight"
//                 iconPosition="right"
//               >
//                 Discover Your Solution
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="px-8 py-4 border-gray-300 hover:bg-gray-50"
//                 iconName="Play"
//                 iconPosition="left"
//               >
//                 Watch Our Story
//               </Button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="flex items-center space-x-8 pt-8"
//             >
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">500+</div>
//                 <div className="text-sm text-gray-600">Projects Delivered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">98%</div>
//                 <div className="text-sm text-gray-600">Client Satisfaction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">24/7</div>
//                 <div className="text-sm text-gray-600">Support Available</div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Animation */}
//           <div className="relative">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               className="relative w-full h-96 lg:h-[500px]"
//             >
//               {/* Central Hub */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl z-10">
//                 <AppIcon name="Zap" size={32} className="text-white" />
//               </div>

//               {/* Orbiting Services */}
//               {animationStates.map((service, index) => (
//                 <motion.div
//                   key={service.title}
//                   className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
//                     index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-cyan-500' : 'bg-green-600'
//                   }`}
//                   animate={{
//                     rotate: currentAnimation * 120 + index * 120,
//                   }}
//                   style={{
//                     top: '50%',
//                     left: '50%',
//                     transformOrigin: '0 0',
//                     transform: `translate(-50%, -50%) rotate(${currentAnimation * 120 + index * 120}deg) translateY(-120px) rotate(-${currentAnimation * 120 + index * 120}deg)`,
//                   }}
//                   transition={{ duration: 2, ease: "easeInOut" }}
//                 >
//                   <AppIcon name={service.icon} size={24} className="text-white" />
//                 </motion.div>
//               ))}

//               {/* Connection Lines */}
//               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
//                 <motion.circle
//                   cx="200"
//                   cy="200"
//                   r="120"
//                   fill="none"
//                   stroke="url(#gradient)"
//                   strokeWidth="2"
//                   strokeDasharray="5,5"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 />
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
//                     <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
//                     <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </motion.div>

//             {/* Service Labels */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 1 }}
//               className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
//             >
//               <div className={`text-lg font-semibold transition-colors duration-500 ${animationStates[currentAnimation].color}`}>
//                 {animationStates[currentAnimation].title}
//               </div>
//               <div className="text-sm text-gray-600 mt-1">
//                 Powering Your Success
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center space-y-2 text-gray-600">
//           <span className="text-sm">Explore Solutions</span>
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <AppIcon name="ChevronDown" size={20} />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default HeroSection


"use client";
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  console.log('Hero component rendered')
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-800 text-white">
      {/* Enhanced Particle Effect Background */}
      {/* <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-60 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-1200"></div>
        
        
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-pink-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div> */}

      <div className="absolute inset-0 opacity-40">
        {/* EDITED: Increased speed for pulsing particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDuration: '1.5s'}}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100" style={{animationDuration: '1.5s', animationDelay: '0.1s'}}></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-200" style={{animationDuration: '1.5s', animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300" style={{animationDuration: '1.5s', animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-60 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-500" style={{animationDuration: '1.5s', animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-700" style={{animationDuration: '1.5s', animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-1000" style={{animationDuration: '1.5s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-1200" style={{animationDuration: '1.5s', animationDelay: '1.2s'}}></div>
        
        {/* EDITED: Increased speed for geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-cyan-400 rotate-180 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-purple-400 rotate-180 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 border-2 border-pink-700 rotate-180 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16-custom lg:py-32">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Adveb Media Group:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-x">
              Three Domains, One Vision
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl animate-slide-up delay-300">
            Discover how our integrated approach transforms businesses across IT, marketing growth, and strategic consulting.
          </p>
          
          {/* <Link 
            href="/solutions"
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-500 px-8 py-3 text-lg font-semibold rounded-full animate-slide-up delay-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            Explore Our Solutions
          </Link> */}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection

