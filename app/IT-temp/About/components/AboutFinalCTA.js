import Link from 'next/link';

export default function AboutFinalCTA() {
  return (
    // Reuses the FinalCTA design for consistency
    <section className="bg-adveb-blue py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to Work With a True IT Partner?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join us in building a more secure and efficient digital tomorrow.
        </p>
        <Link 
          href="/contact" 
          className="px-10 py-4 bg-white text-adveb-blue font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-2xl text-xl uppercase"
        >
          Book Your Tailored Consultation
        </Link>
      </div>
    </section>
  );
}