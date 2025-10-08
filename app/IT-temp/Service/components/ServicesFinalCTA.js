import Link from 'next/link';

export default function ServicesFinalCTA() {
  return (
    <section className="mt-16 bg-adveb-dark text-white p-12 rounded-xl text-center shadow-2xl">
      <h2 className="text-3xl font-bold mb-4">Unsure Where to Start?</h2>
      <p className="text-lg mb-6 text-gray-300">
        Our expert team can help you identify the right blend of services tailored precisely to your budget and business goals.
      </p>
      <Link href="/contact" className="px-8 py-3 bg-adveb-blue text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-xl text-lg">
        Get a Custom Service Quote
      </Link>
    </section>
  );
}