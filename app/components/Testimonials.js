import { Star, User } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      title: "CEO, TechForward Inc.",
      content: "Adveb Solutions transformed our entire business approach. Their IT solutions and marketing campaigns have taken us to the next level.",
      rating: 5,
      bgColor: "bg-blue-500",
      initials: "MC"
    },
    {
      name: "Sarah Rodriguez", 
      title: "VP Marketing, HealthPlus",
      content: "The integrated approach is what sets them apart. Instead of juggling multiple vendors, we get cohesive solutions that work together perfectly.",
      rating: 5,
      bgColor: "bg-green-500",
      initials: "SR"
    },
    {
      name: "David Thompson",
      title: "Founder, GrowthVentures",
      content: "From strategy to execution, their business consulting and digital marketing expertise helped us achieve 300% growth in just 18 months.",
      rating: 5,
      bgColor: "bg-purple-500",
      initials: "DT"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Leaders Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            C-level executives share their experience with our integrated service delivery approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full mr-4 ${testimonial.bgColor} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}