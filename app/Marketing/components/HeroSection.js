import Image from 'next/image'
import { Plus } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-8 h-8 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute top-[25%] right-[10%] w-6 h-6 rounded-full bg-cyan-500 animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[20%] w-10 h-10 rounded-full bg-blue-500 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[30%] w-12 h-12 rounded-full bg-cyan-500 animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Trusted Effective Service and Solutions
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, et sed do eiusmod tempor incididunt labore dolore magna aliqua. Quis ipsum suspendisse.
              </p>
              <div className="flex space-x-4">
                <button className="btn-primary">
                  Contact Us
                </button>
                <button className="btn-secondary bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Know More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/home-bg-1-img.png"
                alt="Trusted services illustration"
                width={800}
                height={600}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}