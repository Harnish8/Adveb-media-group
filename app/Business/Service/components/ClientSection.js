import Image from 'next/image';

const testimonials = [
  {
    imageSrc: '/images/face.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,',
    name: 'Steven Jony',
    title: 'CEO of Company',
  },
  {
    imageSrc: '/images/face.jpg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,',
    name: 'Omit Jacson',
    title: 'Company Founder',
  },
];

export default function ClientSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            What Our Client’s Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 hover:scale-105">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {testimonial.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}