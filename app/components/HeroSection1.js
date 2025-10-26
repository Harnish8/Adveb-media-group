
"use client";
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  console.log('Hero component rendered')
  
  
  return (
    <section className="relative overflow-hidden bg-white text-gray-900">

      {/* <div
        className="md:block absolute inset-0 flex items-center justify-end pr-8"
        style={{ zIndex: 0 }} // Ensure it's behind the main content
      >
        <div className="animated-logo" style={{ backgroundImage: 'url("images/logo.png")' }}></div>
      </div> */}
      

      
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

      @keyframes logo-spin-scale {

          0% {

            transform: rotate(0deg) scale(0.6); /* Start smaller */
            opacity: 0.2;
          }
          50% {
            opacity: 1; /* Peak visibility */
          }
          100% {
            transform: rotate(360deg) scale(0.8); /* End larger and fully rotated */
            opacity: 0.8;
          }
        }

        .animated-logo {
          width: 30vw; /* Large size relative to viewport */
          height: 30vw;
          max-width: 600px; /* Cap size on desktop */
          max-height: 600px;
          background-image: url('/adveb_logo_icon_white.png'); /* **IMPORTANT: Use a white/single-color version of your logo icon here for best contrast on blue** */
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0; /* Start hidden */
          animation: logo-spin-scale 5s ease-out forwards; /* Slower, continuous loop */
          animation-delay: 1s;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 


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

