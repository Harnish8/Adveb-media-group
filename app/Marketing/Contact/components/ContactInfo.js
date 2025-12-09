import { Clock, MapPin, PhoneCall } from 'lucide-react'

const contactItems = [
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: 'Opening Hours',
    content: 'Sun - Thu : 10:00 AM - 06:00 PM',
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    title: 'Address',
    content: 'Sydney, Australia',
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: 'Phone',
    content: '+61 430 122 634',
  },
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}