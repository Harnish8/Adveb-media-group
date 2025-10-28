import Image from 'next/image';

export default function CompanySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold text-sm">About Adveb Media Group</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Driving Digital Transformation for Ambitious Businesses
                </h2>
              </div>
              <p className="text-gray-600">
                At Adveb, we believe in the power of partnership. We&apos;re a team of dedicated digital experts committed to helping businesses like yours thrive in a competitive market. Our passion is crafting bespoke solutions that not only meet your needs but also drive tangible, lasting results.
              </p>
              <p className="text-gray-600">
                We don&apos;t just work for you, we work with you. By taking the time to truly understand your vision, we become an extension of your team, providing the strategic guidance and technical expertise you need to succeed online.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <Image
                src="/images/company-img.jpg"
                alt="Our team working together"
                width={600}
                height={400}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}