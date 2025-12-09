// import Image from 'next/image'

// export default function ContactForm() {

//   const locationName = "Sydney, Australia"; // or any location like "Times Square, New York" or "Eiffel Tower, Paris"

//   // Encode the location for URL usage
//   const encodedLocation = encodeURIComponent(locationName);

//   const businessName = "AusHep IT Solutions, George St, Sydney NSW, Australia";
//   const encodedBusinessName = encodeURIComponent(businessName);


//   const businessInfo = {
//     name: "Adveb Media Group",
//     address: "123/755 George St, Sydney NSW 2000, Australia",
//     phone: "+61 2 1234 5678",
//     email: "info@ausrep.com.au",
//   };

//   // This works without API key and shows location pin
//   const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(businessInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;






//   return (
//     <section className="pb-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           {/* <span className="text-blue-600 font-semibold mb-2 block">Contact Us</span> */}
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                 Send Us a Message!
//               </h2>
//           {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.
//           </p> */}
//         </div>
//         <div className="flex flex-wrap items-center -mx-4 ">
//           {/* <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
//             <div className="relative">

//               <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

                
//                 <div className="p-6 border-b border-gray-200">
//                   <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
//                   <p className="text-sm text-gray-600 mt-1">{businessInfo.name}</p>
//                 </div>

                
//                 <div className="h-[23rem]">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     loading="lazy"
//                     allowFullScreen
//                     title="Office Location"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     src={mapUrl}
//                     className="border-0"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <div className="w-full px-4">
//             <form className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="phone_number"
//                   placeholder="Your Phone"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="5"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full btn-primary transition-all duration-300 hover:scale-105"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ContactForm() {
  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const locationName = "Sydney, Australia";
  const encodedLocation = encodeURIComponent(locationName);

  const businessName = "AusHep IT Solutions, George St, Sydney NSW, Australia";
  const encodedBusinessName = encodeURIComponent(businessName);

  const businessInfo = {
    name: "Adveb Media Group",
    address: "123/755 George St, Sydney NSW 2000, Australia",
    phone: "+61 2 1234 5678",
    email: "info@ausrep.com.au",
  };

  const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(businessInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone_number);
    form.append('message', formData.message);
    form.append('company', 'Business Inquiry');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: form
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone_number: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send Us a Message!
          </h2>
        </div>
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Your Phone"
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Submit'
                )}
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold">Success!</h3>
                      <p className="text-sm">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {status === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold">Error!</h3>
                      <p className="text-sm">Failed to send message. Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

