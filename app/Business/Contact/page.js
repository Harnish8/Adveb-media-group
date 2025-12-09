'use client'
import Header from '../components/BusinessHeader'
import Footer from '../components/BusinessFooter'

import Image from 'next/image';
import ContactForm from './components/ContactForm'
import { useState } from "react";
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



import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '../components/Card';



export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Sydney Australia',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+61 430 122 634',
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

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is included in a free consultation?",
      answer: "Our free consultation includes an initial assessment of your business needs, discussion of potential solutions, and a customized roadmap for engagement. We'll analyze your current technology stack, identify pain points, and provide actionable recommendations. There's no obligation to proceed."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Project timelines vary based on scope and complexity. Short-term engagements may last 6-12 weeks, while comprehensive transformation projects can extend to 6-12 months. We'll provide a clear timeline with milestones during our consultation to ensure transparency throughout the process."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups, small businesses, mid-market companies, and large enterprises. Our solutions are tailored to fit your organization's size, budget, and specific needs. Whether you're a 5-person startup or a 500-person enterprise, we have the expertise to help."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across multiple industries including healthcare, finance, retail, manufacturing, technology, and professional services. Our consultants bring domain-specific knowledge combined with technical expertise to deliver solutions that understand your industry's unique challenges and compliance requirements."
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer: "Data security is our top priority. We follow industry-leading security practices including encryption, secure access controls, regular security audits, and compliance with standards like GDPR, HIPAA, and ISO 27001. All team members sign NDAs, and we can work within your existing security frameworks."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models to suit different needs: fixed-price projects for well-defined scopes, time and materials for evolving requirements, retainer agreements for ongoing support, and value-based pricing for transformation initiatives. During consultation, we'll recommend the best model for your situation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive post-launch support including maintenance packages, 24/7 monitoring, regular updates, training sessions, and dedicated support channels. We believe in long-term partnerships and are committed to your continued success."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in system integration. We have experience working with a wide range of platforms, APIs, and legacy systems. Our team will assess your current infrastructure and develop a seamless integration strategy that minimizes disruption to your operations."
    },
    {
      question: "What is your project methodology?",
      answer: "We use Agile methodologies combined with best practices from frameworks like Scrum and Kanban. This approach ensures flexibility, regular communication, iterative development, and continuous feedback. You'll have full visibility into progress with regular demos and sprint reviews."
    },
    {
      question: "How quickly can you start a project?",
      answer: "Depending on project scope and our current capacity, we can typically begin discovery and planning within 1-2 weeks of agreement. For urgent needs, we can mobilize a team even faster. We'll discuss timelines during your consultation to meet your specific deadlines."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      {/* <section className="py-16">
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
      </section> */}

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help your business succeed.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-colors duration-200 hover:bg-gray-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-primary pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-accent transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Below FAQ */}
          {/* <div className="mt-12 text-center bg-accent/5 rounded-lg p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Still have questions?
            </h3>
            <p className="text-secondary mb-6">
              Our team is here to help. Get in touch for personalized answers.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-md hover:shadow-lg">
              Contact Us
              <ChevronDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
            </button>
          </div> */}
        </div>
      </div>
    </section>


      <Footer />
    </div>
  );
}