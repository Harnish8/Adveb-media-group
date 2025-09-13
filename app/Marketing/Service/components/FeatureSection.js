import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const features = [
  'Freelancing Training Course',
  'Technological Consultation',
  'Monthly Paid Workspace',
  'IT Learning Institute',
  'Digital Marketing',
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold text-sm">Features</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  We Have Also Some Features That Provided by Paso
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero
                </p>
              </div>
              <ul className="space-y-4 text-gray-700">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
              <Link href="/contact" className="btn-primary">
                Lets Talk!
              </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <Image
                src="/images/feature-img.png"
                alt="Features illustration"
                width={600}
                height={500}
                // layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}