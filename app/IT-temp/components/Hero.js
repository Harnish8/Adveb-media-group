import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative bg-adveb-dark text-white py-32 lg:py-48"
      style={{ 
        backgroundImage: "url('/hero-bg.jpg')", // Placeholder for your image
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark Overlay */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Beyond IT Support: <span className="text-adveb-blue">Strategic Digital & IT Services</span> for Australian Business Growth
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
          We integrate cutting-edge technology with smart strategy, offering reliable Managed IT, Cybersecurity, and Cloud Solutions designed to drive your success.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/contact" className="px-8 py-3 bg-adveb-blue text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-xl text-lg">
            Start Your Free IT Strategy Review
          </Link>
          <Link href="/services" className="px-8 py-3 text-adveb-blue bg-white font-bold rounded-lg hover:bg-gray-100 transition duration-300 border-2 border-adveb-blue text-lg">
            Explore Our Core Services
          </Link>
        </div>
      </div>
    </section>
  );
}