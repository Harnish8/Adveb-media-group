import Link from 'next/link';

export default function ServicePillar({ id, icon: Icon, title, summary, features, cta }) {
  return (
    <section id={id} className="p-8 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-full bg-adveb-blue/10">
            <Icon className="w-6 h-6 text-adveb-blue" />
        </div>
        <h2 className="text-2xl font-bold text-adveb-dark">{title}</h2>
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">{summary}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-adveb-blue mr-2 text-lg leading-none">&bull;</span> {feature}
          </p>
        ))}
      </div>
      
      <Link href={`/contact?service=${id}`} className="px-6 py-2 bg-adveb-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
        {cta}
      </Link>
    </section>
  );
}