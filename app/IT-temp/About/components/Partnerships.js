import Image from 'next/image';

// NOTE: Since you are using Next.js without TypeScript, using the standard <img> tag might be easier 
// than the Next.js <Image> component, which requires configuration for external domains. 
// However, I'll use placeholders here. Replace these with actual <img> tags pointing to logos in your public/ folder.

const partnerLogos = [
    { name: "Microsoft Partner", src: "/logos/microsoft.png" },
    { name: "AWS Partner", src: "/logos/aws.png" },
    { name: "VMware", src: "/logos/vmware.png" },
    { name: "Cisco Meraki", src: "/logos/meraki.png" },
    { name: "Fortinet", src: "/logos/fortinet.png" },
];

export default function Partnerships() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-adveb-dark text-center mb-10">
          Our Certified Global Partnerships
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          We combine local expertise with global resources. Our strong partnerships ensure we deliver best-in-class, fully supported technology solutions.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 p-8 border border-gray-200 rounded-xl shadow-inner bg-adveb-light-gray">
          {partnerLogos.map((partner) => (
            <div key={partner.name} className="w-24 md:w-32 h-10 flex items-center justify-center opacity-75 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
              {/* Placeholder for Logo Image */}
              <span className="text-sm font-semibold text-gray-500">{partner.name}</span> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}