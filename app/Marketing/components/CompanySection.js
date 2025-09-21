'use client'
import Image from 'next/image'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CompanySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="mb-2">
              <span className="text-blue-600 font-semibold mb-2 block">Our Company</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Strategic Digital Partner for Global Impact
              </h2>
              <p className="text-gray-700 mb-6">
                Based right here in Australia, we&apos;re a team of passionate innovators driven by a simple goal: to help local businesses succeed in a digital world. We believe that technology should empower, not complicate, and we&apos;re here to be your trusted guide on that journey
              </p>
              <p className="text-gray-700">
                Our philosophy is built on strong relationships and a commitment to genuine results. Were not just another vendor; we&apos;re an extension of your team, dedicated to turning your vision into a digital reality.
              </p>
              {/* <a href="#" className="btn-primary">
                Know More
              </a> */}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* <Image
                src="/images/company-img.jpg"
                alt="Company team working"
                width={800}
                height={600}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className="rounded-lg"
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
      </div>
    </section>
  )
}