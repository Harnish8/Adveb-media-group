'use client'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const features = [
  "Ongoing Technical Support",
  "Tailored Digital Strategy",
  "Transparent Communication",
  "Post Launch Optimisation",
  "Dedicated Project Manager",
  "Personalised Digital Solutions",
];

export default function FeaturesSection() {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="pr-0 md:pr-1">
              <span className="text-blue-600 font-semibold mb-2 block">Features</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We Have Also Some Features That Provided by Adveb
              </h2>
              <p className="text-gray-700 mb-8">
                At Adveb, we dont just offer standard services, we provide a complete ecosystem for your business to thrive. From consultation to ongoing support, weve got you covered
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-base">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <button className="btn-primary">
                Lets Talk!
              </button> */}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              {/* <Image
                src="/images/feature-img.png"
                alt="Features illustration"
                width={700}
                height={600}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              /> */}
              <DotLottieReact
                src="/lottie/018.lottie" // put your .lottie file in /public
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