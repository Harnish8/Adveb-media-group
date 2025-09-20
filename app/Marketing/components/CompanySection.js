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
                Innovative It Helping Service All Over the World
              </h2>
              <p className="text-gray-700 mb-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
              </p>
              <p className="text-gray-700">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.
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