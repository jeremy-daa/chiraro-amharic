import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ as faqData } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-bg relative overflow-hidden">
        {/* Background Accent */}
        <div
        className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat rotate-12 transform translate-x-1/4 translate-y-1/4"
        style={{ backgroundImage: 'url(/images/axum-obelisk.png)' }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-2">Questions</span>
          </h2>
          <p className="text-gray-600">
            Got questions? We've got answers to help you start your Amharic journey confidently.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-black rounded-[1.5rem] bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg outline-none focus:bg-brand-bg/50 transition-colors"
                >
                  <span className="pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border border-black flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-brand-pink text-white' : 'bg-brand-bg text-black'}`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-black/5 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
