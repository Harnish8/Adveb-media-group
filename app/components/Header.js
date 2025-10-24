'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                {/* <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Adveb</span> */}
                <div className="relative">
                  <Image
                    src="/images/logo.jpg"
                    alt="ADVEB Media Group"
                    width={80}
                    height={40}
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                {/* <div className="flex flex-col">
                  <span className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-brand">
                    ADVEB
                  </span>
                  <span className="font-body text-xs text-muted-foreground -mt-1">
                    Media Group
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a> */}
              <a href="https://adveb-media-group-it.vercel.app/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-semibold" target="_blank">IT Services</a>
              <a href="Marketing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-semibold" target="_blank">Marketing</a>
              <a href="Business" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-semibold" target="_blank">Business Consulting</a>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold transition-colors">
                Get Consultation
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="https://adveb-media-group-it.vercel.app/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium" target="_blank">IT Services</a>
              <a href="Marketing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium" target="_blank">Marketing</a>
              <a href="Business" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium" target="_blank">Business Consulting</a>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium mt-2">
                Get Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}