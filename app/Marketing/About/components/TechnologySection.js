'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function TechnologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="relative overflow-hidden rounded-lg">
              {/* <Image
                src="/images/feature-img.png"
                alt="Updated Technology"
                width={600}
                height={500}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              /> */}
              <DotLottieReact
                src="/lottie/011.lottie" // put your .lottie file in /public
                loop
                autoplay
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <Link
                  href="https://www.youtube.com/watch?v=TdSA7gkVYU0"
                  className="bg-blue-600 text-white p-4 rounded-full transition-transform duration-300 hover:scale-110"
                >
                  <Play className="w-8 h-8" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Leading the Way in Digital Innovation
              </h2>
              <p className="text-gray-600">
                At Adveb, our core mission is to empower businesses with the technology and strategy they need to stay ahead. We are a team of pioneers, passionately committed to exploring and mastering the latest digital trends to build solutions that don&apos;t just solve today&apos;s problems but also anticipate tomorrow&apos;s needs. We believe true success is found in a future ready approach.
              </p>
              <p className="text-gray-600">
                We are experts in turning complex challenges into clear, actionable digital roadmaps. By blending creative thinking with data driven insights, we craft custom solutions that enhance your brand, streamline your operations, and create new opportunities for growth. Your success is our mission. Let&apos;s start the journey.
              </p>
              {/* <div>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}