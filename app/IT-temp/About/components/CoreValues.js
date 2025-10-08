import { HandRaisedIcon, RocketLaunchIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/outline';

const values = [
  { icon: HandRaisedIcon, title: 'Integrity', desc: 'Complete transparency and honest advice in every engagement.' },
  { icon: RocketLaunchIcon, title: 'Proactivity', desc: 'We prevent problems before they impact your staff or operations.' },
  { icon: GlobeAltIcon, title: 'Local Expertise', desc: 'Deep knowledge of Australian data sovereignty and NBN infrastructure.' },
  { icon: UsersIcon, title: 'Partnership', desc: 'We aim to be an extension of your team, not just a contractor.' },
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-adveb-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-adveb-dark text-center mb-10">
          Our Commitment to Australian Excellence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {values.map((value) => (
            <div key={value.title} className="p-6 bg-white rounded-xl shadow-md">
              <div className="mx-auto w-12 h-12 rounded-full bg-adveb-blue/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-adveb-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}