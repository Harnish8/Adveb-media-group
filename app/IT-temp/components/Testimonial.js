import Link from 'next/link';

export default function Testimonial() {
  return (
    <section className="py-16 bg-adveb-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-adveb-dark mb-10 text-center md:text-left">
          Results You Can Trust: Hear from an Australian Client
        </h2>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Client Info (Example Placeholder) */}
          <div className="flex-shrink-0 w-full md:w-1/4 text-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center text-sm font-semibold text-gray-700">
              {/* Placeholder for Client Photo */}
              Photo
            </div>
            <p className="font-bold text-lg text-adveb-dark">Michael L.</p>
            <p className="text-adveb-blue font-medium">CEO, AusCorp Pty Ltd</p>
            <p className="text-sm text-gray-500 mt-1">Sydney, NSW</p>
          </div>

          {/* Quote */}
          <div className="md:w-3/4">
            <blockquote className="text-2xl italic text-gray-800 border-l-4 border-adveb-blue pl-6">
              Adveb Media transformed our IT from a daily headache into a strategic asset. Their proactive support in Sydney has been second to none. We&apos;ve experienced zero downtime since migrating our systems to their managed cloud platform.
            </blockquote>
            <Link href="/case-studies" className="mt-6 inline-block text-adveb-blue font-semibold hover:text-blue-700 transition duration-150">
                View All Client Success Stories &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}