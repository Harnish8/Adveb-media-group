'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function TechnologySection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
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
                Updated Technology
              </h2>
              <p className="text-gray-600">
                You need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.
              </p>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.
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