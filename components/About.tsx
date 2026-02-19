import React from 'react';
import { Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
       {/* Background Image Accent */}
       <div 
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat bg-bottom-left"
        style={{ backgroundImage: 'url(/images/tej.png)' }}
      ></div>
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-1">Chiraro</span>?
            </h2>
            <h3 className="text-2xl font-bold mt-2">Master Amharic with Ease</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 relative order-2 lg:order-1">
             <div className="bg-white rounded-[2rem] border border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center border border-black">
                        <Sparkles className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl">Learn Amharic the Fun & Effective Way</span>
                </div>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                        Looking to learn Amharic in a fun and effective way? At <strong>Chiraro Language School</strong>, we bring years of experience and a TESOL certification from Arizona State University (ASU) to help students master Amharic as a second language.
                    </p>
                    <p>
                        Using a modern curriculum based on Communicative Language Teaching (CLT), our lessons focus on real-life practice, making learning both engaging and practical.
                    </p>
                    <div className="pt-4">
                        <a href="#courses" className="inline-block bg-brand-blue text-white font-bold py-3 px-6 rounded-full border border-black hover:bg-brand-pink transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            🚀 Start Your Journey Today!
                        </a>
                    </div>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
             <div className="relative">
                <img 
                    src="/images/about.jpg" 
                    alt="Ethiopian Culture" 
                    className="rounded-[2.5rem] border-2 border-black object-cover w-[500px] h-[350px] z-10 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
                <div className="absolute top-4 left-4 w-full h-full rounded-[2.5rem] border-2 border-black bg-brand-blue -z-0"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;