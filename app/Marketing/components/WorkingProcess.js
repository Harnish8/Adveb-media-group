import Image from 'next/image'

const processSteps = [
  {
    title: "Research Product",
    description: "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "/images/s1.png",
  },
  {
    title: "User Testing",
    description: "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "/images/s2.png",
  },
  {
    title: "Development",
    description: "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "/images/s3.png",
  },
  {
    title: "Product Handover",
    description: "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.",
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
            We Are Popular Because Of Our Way Of Working
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
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