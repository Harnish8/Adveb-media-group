import Image from 'next/image'

const processSteps = [
  {
    title: "Research & Strategy",
    description: "Every great project begins with a deep dive. We work with you to understand your goals, your audience, and your market so we can build a strong foundation for success.",
    icon: "/images/s1.png",
  },
  {
    title: "Collaborative Design",
    description: "This is where your ideas start to take shape. We create wireframes and mockups and work closely with you to refine the design, ensuring a seamless user experience that looks fantastic.",
    icon: "/images/s2.png",
  },
  {
    title: "Agile Development",
    description: "Our developers bring the design to life, building a robust and scalable solution using the latest technology. We keep you updated every step of the way with a transparent development process.",
    icon: "/images/s3.png",
  },
  {
    title: "Launch & Support",
    description: "The big day! We handle all the technical details for a smooth launch. Our work doesn't stop there; we provide ongoing support and maintenance to ensure everything runs perfectly.",
    icon: "/images/s4.png",
  },
];

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block">Working Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Process is Built for Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe a great partnership starts with a clear collaborative process. Our approach is designed to keep you in the loop, ensuring we deliver results that are not just on time but also a perfect fit for your vision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                />
                {index < processSteps.length - 1 && (
                  <span className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <Image
                      src="/images/next.png"
                      alt="Next step arrow"
                      width={40}
                      height={10}
                    />
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}