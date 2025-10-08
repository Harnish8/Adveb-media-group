import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="h-[300px] bg-gray-100 rounded-xl mb-10 shadow-lg flex items-center justify-center overflow-hidden">
          {/* Placeholder for a professional team photo, layered with a subtle overlay */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-adveb-dark z-10 p-4">
            More Than IT: We Are Your <span className="text-adveb-blue">Strategic Growth Partner</span>
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Adveb Media is a proud **Australian-owned and operated** IT Services Provider, dedicated to empowering small to mid-sized enterprises (SMEs) with secure, flexible, and high-performance technology.
        </p>
      </div>
    </section>
  );
}