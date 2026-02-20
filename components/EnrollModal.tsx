import React, { useState, useRef, useEffect } from "react";
import { Send, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES } from "../constants";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, defaultCourse }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(defaultCourse || "General Inquiry");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedSubject(defaultCourse || "General Inquiry");
  }, [defaultCourse]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const subjectOptions = [
    "General Inquiry",
    ...COURSES.map((c) => `${c.title}`),
  ];

  if (!isOpen) return null;

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-lg bg-white rounded-[2rem] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 relative z-10 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-3xl font-bold mb-2">Start Learning</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below to enroll, and we will get back to you with the next steps!
            </p>
            <form
              id="enroll-form"
              action="https://formsubmit.co/chebses2014@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value={`New Enrollment: ${selectedSubject}`}
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Contact Info (Email, Phone, or WhatsApp)
                </label>
                <input
                  type="text"
                  name="contact_info"
                  required
                  placeholder="How should we reach you?"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-bold text-black mb-2">
                  Course
                </label>
                <input type="hidden" name="course" value={selectedSubject} />
                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div
                    className={`w-full bg-brand-bg border ${isDropdownOpen ? "border-black ring-1 ring-black" : "border-gray-300"} rounded-xl px-4 py-3 pr-6 text-black transition-colors flex items-center justify-between`}
                  >
                    <span className="truncate">{selectedSubject}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 w-full mt-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden flex flex-col max-h-60 overflow-y-auto"
                    >
                      {subjectOptions.map((option, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedSubject(option);
                            setIsDropdownOpen(false);
                          }}
                          className={`px-4 py-3 cursor-pointer hover:bg-brand-lime transition-colors text-black ${selectedSubject === option ? "bg-brand-pink text-white font-bold hover:bg-brand-pink/90" : ""}`}
                        >
                          {option}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any specific goals or questions?"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border border-transparent hover:border-black"
              >
                <Send className="w-5 h-5" /> Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;
