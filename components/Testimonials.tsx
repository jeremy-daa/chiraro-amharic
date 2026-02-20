import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-bg border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What our <span className="inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-1">Students</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-black overflow-hidden shrink-0 bg-gray-200">
                        {/* Placeholder image since original was local 'images/person_1.jpg' */}
                        <img 
                            src="/images/person_1.jpg" 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                         <div className="flex gap-1 justify-center md:justify-start mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                            ))}
                        </div>
                        <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                            "{testimonial.text}"
                        </p>
                        <div>
                            <h4 className="font-bold text-xl">{testimonial.name}</h4>
                            <p className="text-brand-blue font-bold text-sm">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
