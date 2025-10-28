'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Adveb Media Group transformed our digital infrastructure. Their expertise and dedication are unmatched.',
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    rating: 5
  },
  {
    id: 2,
    quote: 'Outstanding service and support. They delivered our project on time and exceeded expectations.',
    name: 'Michael Chen',
    company: 'Global Solutions Ltd.',
    rating: 5
  },
  {
    id: 3,
    quote: 'Professional, reliable, and innovative. Adveb Media Group is our go to IT partner.',
    name: 'Emily Davis',
    company: 'Innovation Corp.',
    rating: 5
  },
  {
    id: 4,
    quote: 'Their team provided exceptional solutions that streamlined our operations and boosted productivity.',
    name: 'David Wilson',
    company: 'Productivity Plus',
    rating: 5
  },
  {
    id: 5,
    quote: 'Remarkable attention to detail and customer service. Highly recommended for any tech needs.',
    name: 'Lisa Thompson',
    company: 'Future Tech Co.',
    rating: 5
  }
];

export default function ClientSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Handle responsive card visibility
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-slide with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get visible testimonials based on current slide
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
            <Star size={16} />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover why businesses trust us with their digital transformation and technology needs.
          </p>
        </div> */}

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            What Our Client’s Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover why businesses trust us with their digital transformation and technology needs.
          </p>
        </div>
        

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${currentSlide}-${index}`}
                  className={`px-4 ${
                    visibleCards === 1 ? 'w-full' : 
                    visibleCards === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-lg border border-gray-200 p-8 h-full flex flex-col">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-center italic mb-6 flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    {/* Avatar and Info */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full flex items-center justify-center transition-colors shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full flex items-center justify-center transition-colors shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// import Image from 'next/image';

// const testimonials = [
//   {
//     imageSrc: '/images/face.jpg',
//     quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,',
//     name: 'Steven Jony',
//     title: 'CEO of Company',
//   },
//   {
//     imageSrc: '/images/face.jpg',
//     quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,',
//     name: 'Omit Jacson',
//     title: 'Company Founder',
//   },
// ];

// export default function ClientSection() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm">Testimonials</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//             What Our Client’s Say
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 hover:scale-105">
//                 <Image
//                   src={testimonial.imageSrc}
//                   alt={testimonial.name}
//                   width={80}
//                   height={80}
//                   className="rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <p className="text-gray-700 mb-4 italic">
//                   &quot;{testimonial.quote}&quot;
//                 </p>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {testimonial.name}
//                 </h3>
//                 <span className="text-sm text-gray-500">
//                   {testimonial.title}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



