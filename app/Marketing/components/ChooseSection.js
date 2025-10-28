'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Plus, CheckCircle, Handshake, Shield, Award } from 'lucide-react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const accordionItems = [
  {
    title: "Great Understanding",
    content: "We believe the best solutions start with a deep conversation. Our team takes the time to truly understand your business goals and challenges, ensuring every strategy is perfectly tailored to your unique needs.",
    icon: <Handshake className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Update Technology",
    content: "We know the digital landscape moves fast. That's why we're dedicated to mastering the latest trends, using cutting edge tools to create solutions that not only work for you today but are also ready for tomorrow. Our goal is to give your business a sustainable advantage.",
    icon: <Shield className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Experienced Team",
    content: "Our team isn't just experienced, we are passionate problem solvers. We've successfully completed hundreds of projects, bringing a wealth of knowledge and a can do attitude to every challenge we face.",
    icon: <CheckCircle className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Best Quality Service",
    content: "Our commitment to quality is what sets us apart. We take immense pride in our work, meticulously crafting every project with attention to detail to ensure it not only meets but exceeds your expectations.",
    icon: <Award className="text-blue-600 w-6 h-6" />,
  },
];

export default function ChooseSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block">Choose Adveb</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We Achieved People’s Trust by Our Great Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your search for a reliable digital partner ends here. We are dedicated to delivering not just services, but peace of mind, empowering businesses across Australia to achieve their digital ambitions with confidence.
          </p>
        </div>
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="choose-img">
              {/* <Image
                src="/images/choose-img.png"
                alt="Why choose us"
                width={700}
                height={500}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              /> */}
              <DotLottieReact
                src="/lottie/3.lottie" // put your .lottie file in /public
                loop
                autoplay
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="space-y-6">
              {accordionItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full text-left font-bold text-gray-900 text-lg transition-colors duration-300 hover:text-blue-600"
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {item.title}
                    </div>
                    <Plus
                      className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}