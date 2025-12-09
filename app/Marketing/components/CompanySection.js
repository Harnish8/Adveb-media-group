'use client'
import Image from 'next/image'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CompanySection() {
  return (
    <section className="pt-20 pb-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="">
              <span className="text-blue-600 font-semibold mb-2 block">Our Company</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Strategic Digital Partner for Global Impact
              </h2>
              <p className="text-gray-700 mb-8">
                We&apos;re a team of passionate innovators with a simple mission: helping businesses thrive in the digital world. Our belief is that technology should empower, not complicate and we&apos;re here to be your trusted partner on that journey.
              </p>
              <p className="text-gray-700 mb-8">
                Our approach is built on strong relationships and a commitment to delivering real results. We&apos;re not just another service provider, we work as an extension of your team. dedicated to transforming your vision into digital reality.
              </p>
              {/* <a href="#" className="btn-primary">
                Know More
              </a> */}
            </div>
          </div>
          {/* <div className="w-full lg:w-1/2 px-4">
            <div className="relative overflow-hidden rounded-lg">
              <DotLottieReact
                src="/lottie/014.lottie" // put your .lottie file in /public
                loop
                autoplay
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div> */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative overflow-hidden rounded-lg flex items-center justify-center h-[350px] md:h-[380px] lg:h-[400px]">
              <DotLottieReact
                src="/lottie/014.lottie"
                loop
                autoplay
                className="scale-[1.7] sm:scale-[1.7] md:scale-[1.7] lg:scale-[1.7]"
                style={{
                  width: "100%",
                  height: "auto"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}