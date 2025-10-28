import Header from '../components/BusinessHeader'
import Footer from '../components/BusinessFooter'

import Image from 'next/image';
import ContactForm from './components/ContactForm'
// import ContactInfo from './components/ContactInfo'
// import PageTitle from './components/PageTitle'

// export default function Home() {

//   const paths = [
//     { name: 'Home', href: '/' },
//     { name: 'Contact', href: '/Marketing/Contact' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <PageTitle
//         title="Contact"
//         paths={paths}
//       />
//       <ContactInfo />
//       <ContactForm />
//       <Footer />
//     </div>
//   )
// }



import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/Card';



export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Level 15, 1 Macquarie Place',
        'Sydney NSW 2000',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+61 2 9999 8888',
        'Mon-Fri: 9:00 AM - 6:00 PM',
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@advebmedia.com.au',
        'We respond within 24 hours',
      ],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday - Sunday: Closed',
      ],
    },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Ready to transform your business? Let&apos;s start the conversation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-8">
                Have questions? Our team is here to help. Reach out to us through any of the following channels, and we&apos;ll get back to you promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-6 !pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-blue-900" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us in Sydney
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Conveniently located in the heart of Sydney&apos;s business district
            </p>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1578032888211-fcc2c09ac744?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvZmZpY2V8ZW58MHx8fGJsdWV8MTc1OTgwODk2NHww&ixlib=rb-4.1.0&q=85"
                alt="Adveb Media Group office location in Sydney CBD"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What is included in a free consultation?
                </h3>
                <p className="text-gray-700">
                  Our free consultation includes an initial assessment of your business needs, discussion of potential solutions, and a customized roadmap for engagement. There&apos;s no obligation to proceed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How long does a typical engagement last?
                </h3>
                <p className="text-gray-700">
                  Project timelines vary based on scope and complexity. Short term engagements may last 6-12 weeks, while comprehensive transformation projects can extend to 6-12 months. We&apos;ll provide a clear timeline during our consultation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do you work with businesses of all sizes?
                </h3>
                <p className="text-gray-700">
                  Yes! We work with startups, small businesses, mid market companies, and large enterprises. Our solutions are tailored to fit your organization&apos;s size, budget, and specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}