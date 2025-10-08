import { MegaphoneIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function UniqueHeritage() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-adveb-dark text-center mb-12">
          Our Unique Heritage: Media-Focused Agility
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-adveb-blue pl-4">
              Our roots in the **Media Group** space have instilled a unique focus on **speed, high-demand workflow, and data integrity**. We understand that in the modern digital world, downtime is not an option and creativity needs flexible technology.
            </p>
            <p className="text-gray-600">
              We bring this high-stakes, results-driven mentality to every IT solution we deliver, ensuring your systems are fast, flexible, and reliable—whether you&apos;re a creative studio or a financial firm.
            </p>
            <ul className="text-gray-700 space-y-2 mt-4">
                <li className="flex items-center"><MegaphoneIcon className="w-5 h-5 text-adveb-blue mr-2" /> Built for high-bandwidth media workflows.</li>
                <li className="flex items-center"><CodeBracketIcon className="w-5 h-5 text-adveb-blue mr-2" /> Systems designed for rapid content delivery and collaboration.</li>
            </ul>
          </div>

          <div className="h-72 bg-gray-100 rounded-xl flex items-center justify-center text-adveb-blue font-semibold shadow-inner">
            {/* Placeholder for a visually striking image or graphic representing Media/Tech fusion */}
            
          </div>
        </div>
      </div>
    </section>
  );
}