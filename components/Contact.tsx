import React, { useState, useRef, useEffect } from "react";
import { Send, Mail, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { COURSES } from "../constants"; // Import COURSES
import Toast, { ToastType } from "./Toast";

const Contact: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("info");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message: string, type: ToastType) => {
    setToastMessage(message);
    setToastType(type);
    setIsToastVisible(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(
        "https://chiraro-mailer.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: selectedSubject,
            message: formData.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        showToast(
          result.message || "Your message has been sent successfully.",
          "success",
        );
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      showToast(
        error instanceof Error ? error.message : "An unknown error occurred.",
        "error",
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const subjectOptions = [
    "General Inquiry",
    ...COURSES.map((c) => `${c.title}`),
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-brand-bg relative overflow-hidden"
    >
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
      {/* Background Image Accent */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none bg-contain bg-no-repeat bg-bottom-left"
        style={{ backgroundImage: "url(/images/ethiopia-buna.png)" }}
      ></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by{" "}
              <span className="inline-block bg-brand-pink px-4 py-1 rounded-full text-white border border-black transform rotate-1">
                learners,
              </span>{" "}
              <br />
              supported by experts.
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions? We are here to help you start your journey.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:amharic@chiraro.com"
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group"
              >
                <div className="bg-brand-lime p-3 rounded-full border border-black group-hover:bg-black group-hover:text-brand-lime transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Email Us</h4>
                  <p className="text-gray-500 text-sm">amharic@chiraro.com</p>
                </div>
              </a>
              <a
                href="tel:+251901116044"
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group"
              >
                <div className="bg-brand-pink p-3 rounded-full border border-black text-white group-hover:bg-black group-hover:text-brand-pink transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Call Us</h4>
                  <p className="text-gray-500 text-sm">+251 901 116 044</p>
                </div>
              </a>
              <a
                href="https://wa.me/251901116044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group"
              >
                <div className="bg-[#25D366] p-3 rounded-full border border-black text-white group-hover:bg-black group-hover:text-[#25D366] transition-colors">
                  {/* WhatsApp SVG Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-black">WhatsApp Us</h4>
                  <p className="text-gray-500 text-sm">Chat with our team</p>
                </div>
              </a>
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-[2rem] border border-black shadow-[10px_10px_0px_0px_#000]"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-bold text-black mb-2">
                  Subject
                </label>
                <input type="hidden" name="subject" value={selectedSubject} />
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
                      className="absolute z-50 w-full mt-2 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden flex flex-col max-h-60 overflow-y-auto"
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
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border border-transparent hover:border-black disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
