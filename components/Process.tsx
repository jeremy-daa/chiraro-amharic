import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-black/5 relative overflow-hidden">
       {/* Background Image Accent */}
       <div 
        className="absolute top-0 left-0 w-96 h-96 opacity-5 pointer-events-none bg-contain bg-no-repeat bg-top-left -translate-x-10 -translate-y-10 rotate-45"
        style={{ backgroundImage: 'url(/images/ethiopian-kirar.png)' }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Language Learning For All <span className="inline-block bg-brand-pink border border-black px-4 rounded-full text-white transform -rotate-2">People</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
                <div key={step.id} className="relative group">
                    {/* Connector Line (Hidden on Mobile) */}
                    {index !== PROCESS_STEPS.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-1/2 w-full h-[3px] bg-gray-100 z-0"></div>
                    )}
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-20 h-20 rounded-full border-2 border-black flex items-center justify-center text-3xl font-bold mb-6 bg-white group-hover:scale-110 transition-transform ${
                            index === 0 ? 'text-brand-lime shadow-[4px_4px_0px_0px_#D4F853]' :
                            index === 1 ? 'text-brand-blue shadow-[4px_4px_0px_0px_#5B91F5]' :
                            index === 2 ? 'text-brand-pink shadow-[4px_4px_0px_0px_#E983D8]' :
                            'text-brand-orange shadow-[4px_4px_0px_0px_#FF9F2E]'
                        }`}>
                            {step.id}
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-500 max-w-[200px]">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;