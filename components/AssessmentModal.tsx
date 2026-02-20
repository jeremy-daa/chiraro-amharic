import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[2.5rem] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-2 pr-6">Choose Your Assessment</h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
              How would you prefer to take the competency test?
            </p>

            <div className="space-y-4">
              <a 
                  href="https://forms.gle/jLcnEoZ8v116YrKu9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex flex-col items-center justify-center w-full p-4 border border-black rounded-2xl hover:bg-brand-lime transition-colors group cursor-pointer"
              >
                  <span className="font-bold text-lg group-hover:text-black">English Phonetic</span>
                  <span className="text-sm text-gray-500 group-hover:text-black/70 mt-1">Written in English letters (e.g., "Selam")</span>
              </a>

              <a 
                  href="https://forms.gle/3rCo71d57gDZgr4y9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex flex-col items-center justify-center w-full p-4 border border-black rounded-2xl hover:bg-brand-pink transition-colors group cursor-pointer"
              >
                  <span className="font-bold text-lg group-hover:text-white">Amharic Fidel</span>
                  <span className="text-sm text-gray-500 group-hover:text-white/80 mt-1">Written in Amharic script (e.g., "ሰላም")</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AssessmentModal;
