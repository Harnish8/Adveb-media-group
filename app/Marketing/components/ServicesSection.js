
"use client"
import Image from 'next/image'

const services = [
  { title: "Visual Design", icon: "/images/s1.png" },
  { title: "Development", icon: "/images/s2.png" },
  { title: "QA Testing", icon: "/images/s3.png" },
  { title: "IT Management", icon: "/images/s4.png" },
  { title: "Cyber Security", icon: "/images/s5.png" },
  { title: "Wireless Connectivity", icon: "/images/s6.png" },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block">Smart Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paso Provide All Kind Of Tech Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline transition-colors duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}