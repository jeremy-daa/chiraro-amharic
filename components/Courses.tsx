import React, { useState } from 'react';
import { COURSES } from '../constants';
import { X, Clock, CheckCircle, BookOpen } from 'lucide-react';
import { Course } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Courses: React.FC = () => {
    // Hide scrollbar utility class
    const hideScrollbarClass = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']";

    // Images for course backgrounds
    const courseImages = [
      "/images/red-fox.png",
      "/images/ethiopia-buna.png",
      "/images/axum-obelisk.png",
      "/images/fasiledes.png",
      "/images/adey-abeba.png",
      "/images/ethiopian-kirar.png",
    ];

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCardClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  // Prevent click propagation for the "Inquire Now" button
  const handleInquireClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section
      id="courses"
      className="py-24 bg-brand-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="inline-block bg-brand-blue px-4 py-1 rounded-full text-white transform rotate-1">
              Path
            </span>
          </h2>
          <p className="text-gray-600">
            Find the perfect course to start your Amharic journey. Available{" "}
            <strong>Online</strong> & <strong>In-Person</strong>. Tap a card for
            details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COURSES.map((course, idx) => {
            const bgImage = courseImages[idx % courseImages.length];
            return (
              <div
                key={course.id}
                onClick={() => handleCardClick(course)}
                className="bg-white p-8 rounded-[2rem] border border-black hover:shadow-[8px_8px_0px_0px_rgba(212,248,83,1)] transition-all group cursor-pointer relative overflow-hidden"
              >
                {/* Background Image Accent */}
                <div
                  className="absolute top-6 right-4 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity bg-contain bg-no-repeat bg-right-top pointer-events-none"
                  style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-14 h-14 rounded-full border border-black flex items-center justify-center text-xl font-bold font-ethiopic text-white ${
                      course.title.includes("Conversational")
                        ? "bg-brand-pink"
                        : course.id === "survival-amharic"
                          ? "bg-brand-blue"
                          : course.id === "travel-amharic"
                            ? "bg-brand-orange"
                            : course.id === "amharic-writing-reading"
                              ? "bg-brand-lime !text-black"
                              : "bg-[#9b5de5]" /* unique purple for industry */
                    }`}
                  >
                    {course.title.charAt(0)}
                  </div>
                  <span className="px-4 py-2 bg-brand-bg border border-black/10 rounded-full text-xs font-bold uppercase tracking-wider">
                    {course.level}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-lg text-brand-pink text-sm font-bold">
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-brand-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-8 min-h-[48px]">
                  {course.description}
                </p>

                <a
                  href="#contact-form"
                  onClick={handleInquireClick}
                  className="w-full block text-center py-3 rounded-xl border border-black font-bold hover:bg-black hover:text-white transition-all z-10 relative"
                  aria-label={`Inquire about ${course.title}`}
                >
                  Inquire Now
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative bg-brand-bg w-full max-w-2xl rounded-[2.5rem] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto ${hideScrollbarClass} overflow-hidden`}
            >
              <div
                className="absolute top-10 right-10 w-64 h-64 opacity-25 bg-contain bg-no-repeat bg-right-top pointer-events-none"
                style={{
                  backgroundImage: `url(${courseImages[COURSES.findIndex((c) => c.id === selectedCourse.id) % courseImages.length]})`,
                  transform: "rotate(10deg)",
                }}
              ></div>
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-brand-lime border border-black rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedCourse.level}
                  </span>
                  <span className="px-4 py-1.5 bg-brand-blue border border-black rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {selectedCourse.duration}
                  </span>
                  <span className="px-4 py-1.5 bg-brand-pink border border-black rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {selectedCourse.price}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {selectedCourse.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {selectedCourse.description}
                </p>

                <div className="bg-white rounded-2xl border border-black/10 p-6 mb-8">
                  <h4 className="flex items-center gap-2 font-bold text-xl mb-4">
                    <BookOpen className="w-5 h-5 text-brand-pink" />
                    Curriculum Highlights
                  </h4>
                  <ul className="space-y-3">
                    {selectedCourse.curriculum.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-lime shrink-0 mt-0.5 fill-black" />
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href="#contact"
                    onClick={handleCloseModal}
                    className="flex-1 py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black hover:border-black border border-transparent transition-all text-center"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;
