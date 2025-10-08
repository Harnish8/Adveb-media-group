import Link from 'next/link';

export default function AboutUsPage() {
  // Mock data for team and values
  const coreValues = [
    { title: 'Integrity', desc: 'Complete transparency and honest advice in every engagement.' },
    { title: 'Proactivity', desc: 'We prevent problems before they impact your staff or operations.' },
    { title: 'Local Expertise', desc: 'Deep knowledge of Australian data sovereignty and NBN infrastructure.' },
    { title: 'Partnership', desc: 'We aim to be an extension of your team, not just a contractor.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Section 1: Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-adveb-dark mb-4">
          More Than IT: We Are Your <span className="text-adveb-blue">Strategic Growth Partner</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Adveb Media is a proud **Australian-owned and operated** IT Services Provider, dedicated to empowering small to mid-sized enterprises (SMEs) with secure, flexible, and high-performance technology.
        </p>
      </div>

      <hr className="my-12 border-gray-200" />
      
      {/* Section 2: Our Unique Heritage */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-adveb-dark mb-4">
            Where Digital Creativity Meets Enterprise IT
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our roots in the &apos;Media Group&apos; space have instilled a unique focus on **speed, high-demand workflow, and data management**. We understand that in the modern digital world, downtime is not an option and data integrity is paramount. We bring this high-stakes, results-driven mentality to every IT solution we deliver, ensuring your systems are fast, flexible, and reliable.
          </p>
        </div>
        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-adveb-blue font-semibold">
          {/* Placeholder for a visually striking image or graphic representing Media/Tech fusion */}
          Digital Agility Focus
        </div>
      </section>
      
      {/* Section 3: Our Core Values */}
      <section className="bg-adveb-light-gray p-10 rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-adveb-dark text-center mb-10">
          Our Commitment to Australian Excellence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {coreValues.map((value) => (
            <div key={value.title} className="p-4">
              <div className="text-adveb-blue text-4xl mb-3">★</div> {/* Placeholder Icon */}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="bg-adveb-blue text-white p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With a True IT Partner?</h2>
        <p className="text-lg mb-6">
          We&apos;re excited about the future of Australian business technology. Join us in building a more secure and efficient digital tomorrow.
        </p>
        <Link href="/contact" className="px-8 py-3 bg-white text-adveb-blue font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-xl text-lg">
          Book Your Tailored Consultation
        </Link>
      </section>

    </div>
  );
}