import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import EnrollModal from "./EnrollModal";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-bg/90 backdrop-blur-md border-b border-black/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="block">
            {!logoError ? (
              <img
                src="/images/logo.png"
                alt="Chiraro Language School"
                className="h-16 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-ethiopic font-bold text-brand-lime text-xl border-2 border-transparent group-hover:border-brand-lime">
                  ጭ
                </div>
                <span className="text-2xl font-bold tracking-tight text-black">
                  Chiraro Amharic
                </span>
              </div>
            )}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#assessment"
              className="text-sm font-bold text-gray-600 hover:text-black transition-colors"
            >
              Take Assessment
            </a>
            <button
              onClick={() => setIsEnrollModalOpen(true)}
              className="px-6 py-3 text-sm font-bold bg-black text-white rounded-full hover:bg-brand-lime hover:text-black transition-all border border-black"
            >
              Start Learning
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black hover:text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b border-black/10 p-6 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-gray-800 hover:text-brand-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-gray-800 hover:text-brand-blue"
            >
              Take Assessment
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsEnrollModalOpen(true);
              }}
              className="text-center px-5 py-3 text-sm font-bold bg-black text-white rounded-full hover:bg-brand-lime hover:text-black transition-colors"
            >
              Start Learning
            </button>
          </div>
        )}
      </nav>
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </>
  );
};

export default Navigation;
