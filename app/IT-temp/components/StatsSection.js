const StatItem = ({ number, unit, description }) => (
  <div className="text-center">
    <p className="text-6xl font-extrabold text-adveb-blue leading-none">
      {number}
      <span className="text-4xl font-normal ml-1">{unit}</span>
    </p>
    <p className="text-lg font-medium text-adveb-dark mt-2">{description}</p>
  </div>
);

export default function StatsSection() {
  const stats = [
    { number: '99.9', unit: '%', description: 'Client Uptime Guaranteed' },
    { number: '15', unit: 'Min', description: 'Average Response Time' },
    { number: '10', unit: '+ Years', description: 'Supporting Australian SMEs' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-adveb-dark text-center mb-10">
          Adveb Media By The Numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}