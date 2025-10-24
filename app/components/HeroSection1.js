
"use client";
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  console.log('Hero component rendered')
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
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
            <span className="bg-clip-text bg-gradient-to-r from-white-400 via-white-400 to-white-400 animate-gradient-x">
              Three Domains, One Vision
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white-200 max-w-3xl animate-slide-up delay-300">
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

