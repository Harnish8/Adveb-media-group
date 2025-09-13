import { Server, Target, TrendingUp } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "IT Services",
      description: "Custom Software Development, System Architecture, Database Management and AI-enhanced Solutions",
      features: [
        "Custom Development",
        "System Architecture", 
        "Database Management",
        "AI-enhanced Solutions"
      ],
      link: "Explore IT Solutions"
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: "Marketing Solutions", 
      description: "Integrated Digital Marketing, Social Media Management, Brand Development that drives measurable results",
      features: [
        "Digital Marketing",
        "Social Media & SEO",
        "Brand Development",
        "Analytics & ROI"
      ],
      link: "Explore Marketing"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Business Consulting",
      description: "Strategic Planning, Process Optimization, Performance Analysis and Organizational Change Management",
      features: [
        "Strategic Planning",
        "Process Optimization", 
        "Performance Analysis",
        "Change Management"
      ],
      link: "Explore Consulting"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Domains, One Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our integrated approach transforms businesses across IT infrastructure, marketing growth, and strategic consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium text-sm">
                {service.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}