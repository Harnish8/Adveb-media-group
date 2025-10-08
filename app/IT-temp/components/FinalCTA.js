import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-adveb-blue py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Future-Proof Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Stop reacting to IT problems and start driving success. Get in touch with our expert consultants today for a discussion tailored to your needs.
        </p>
        <Link 
          href="/contact" 
          className="px-10 py-4 bg-white text-adveb-blue font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-2xl text-xl uppercase tracking-wider"
        >
          Book Your Tailored Consultation
        </Link>
      </div>
    </section>
  );
}