import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PHRASES } from "@/constants";

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWords, setDisplayWords] = useState<typeof PHRASES>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Randomly select 5 words on mount
  useEffect(() => {
    const shuffled = [...PHRASES].sort(() => 0.5 - Math.random());
    setDisplayWords(shuffled.slice(0, 5));
  }, []);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || displayWords.length === 0) return;

    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % displayWords.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, displayWords]);

  const [direction, setDirection] = useState(0);

  const handleDragEnd = (e: any, info: any) => {
    setIsAutoPlaying(false); // Stop auto-play once user interacts
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped left, go to next
      setDirection(1);
      setCurrentWordIndex((prev) => (prev + 1) % displayWords.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swiped right, go to prev
      setDirection(-1);
      setCurrentWordIndex(
        (prev) => (prev - 1 + displayWords.length) % displayWords.length,
      );
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
      };
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-brand-bg"
    >
      {/* ... backgrounds ... */}
      <div
        className="absolute top-20 left-0 w-64 h-64 opacity-20 pointer-events-none bg-contain bg-no-repeat rotate-12"
        style={{ backgroundImage: "url(/images/adey-abeba.png)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-15 pointer-events-none bg-contain bg-no-repeat bg-bottom-right"
        style={{ backgroundImage: "url(/images/lalibela.png)" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Text Content (Left) */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-5 md:mb-8 font-sans text-brand-text">
              Speak{" "}
              <span className="inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-2">
                Amharic,
              </span>
              <br />
              Live{" "}
              <span className="inline-block bg-brand-pink px-4 py-1 rounded-full text-white border border-black transform rotate-1">
                Amharic,
              </span>
              <br />
              Make Friends!
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Learn Amharic easily with expert guidance, real-life practice, and
              a structured curriculum. Classes available <strong>Online</strong>{" "}
              and <strong>In-Person</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#courses"
                className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border-2 border-transparent hover:border-black"
              >
                Our Courses
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://picsum.photos/id/64/100/100"
                  alt="Student"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://picsum.photos/id/65/100/100"
                  alt="Student"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://picsum.photos/id/91/100/100"
                  alt="Student"
                />
              </div>
              <div className="text-sm font-bold">
                <span className="text-brand-blue">150+</span> Students Enrolled
              </div>
            </div>
          </motion.div>

          {/* Interactive Tool / Visual Side (Right) */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              {/* Background Blobs */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-lime/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-brand-pink/20 rounded-full blur-3xl -z-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* The Widget Card */}
              <div className="bg-white rounded-[2.5rem] border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 w-[90vw] sm:w-[400px] h-[400px] flex flex-col relative overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b border-black/10 pb-4 shrink-0">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-pink border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-lime border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-blue border border-black"></div>
                  </div>
                  {/* Floating 'Live' Badge */}
                  <div className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full animate-bounce pointer-events-none shadow-sm">
                    Phrase of the Day
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col items-center justify-center relative select-none">
                  {displayWords.length > 0 && (
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentWordIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={handleDragEnd}
                      >
                        <div className="text-6xl mb-2">
                          {displayWords[currentWordIndex].icon}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-ethiopic mb-3 pointer-events-none px-4 leading-tight">
                          {displayWords[currentWordIndex].amharic}
                        </h2>
                        <p className="text-xl font-bold text-brand-blue mb-2 pointer-events-none px-4">
                          {displayWords[currentWordIndex].phonetic}
                        </p>
                        <p className="text-gray-500 font-medium pointer-events-none px-4">
                          {displayWords[currentWordIndex].english}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 flex justify-center gap-2 shrink-0">
                  {displayWords.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentWordIndex(idx);
                      }}
                      aria-label={`Go to word ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentWordIndex ? "w-8 bg-black" : "w-2 bg-gray-200 hover:bg-brand-lime"}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};;

export default Hero;
