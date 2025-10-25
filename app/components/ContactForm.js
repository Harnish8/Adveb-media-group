import Image from 'next/image'

export default function ContactForm() {

  const locationName = "Sydney, Australia"; // or any location like "Times Square, New York" or "Eiffel Tower, Paris"

  // Encode the location for URL usage
  const encodedLocation = encodeURIComponent(locationName);

  const businessName = "AusHep IT Solutions, George St, Sydney NSW, Australia";
  const encodedBusinessName = encodeURIComponent(businessName);


  const businessInfo = {
    name: "Adveb Media Group",
    address: "123/755 George St, Sydney NSW 2000, Australia",
    phone: "+61 2 1234 5678",
    email: "info@ausrep.com.au",
  };

  // This works without API key and shows location pin
  const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(businessInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;






  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let Us Know About Your Project Idea!
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.
          </p> */}
        </div>
        <div className="flex flex-wrap items-center -mx-4 ">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="relative">

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                  <p className="text-sm text-gray-600 mt-1">{businessInfo.name}</p>
                </div>

                {/* Map Container */}
                <div className="h-[23rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    title="Office Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapUrl}
                    className="border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Your Phone"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}



