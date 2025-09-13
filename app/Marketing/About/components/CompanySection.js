import Image from 'next/image';

export default function CompanySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold text-sm">Our Company</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Innovative It Helping Service All Over the World
                </h2>
              </div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
              </p>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
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