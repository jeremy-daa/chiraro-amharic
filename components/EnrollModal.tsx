import React, { useState, useRef, useEffect } from "react";
import { Send, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES } from "../constants";
import Toast, { ToastType } from "./Toast";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  defaultCourse,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(
    defaultCourse || "General Inquiry",
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    contact_info: "",
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
    if (!formData.name || !formData.contact_info) {
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
            email: formData.contact_info,
            subject: `Enrollment: ${selectedSubject}`,
            message: formData.message || "No additional message",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", contact_info: "", message: "" });
        showToast(
          result.message || "Enrollment request sent successfully!",
          "success",
        );
        setTimeout(() => {
          onClose();
          setStatus("idle");
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to send enrollment request.");
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
          <Toast
            message={toastMessage}
            type={toastType}
            isVisible={isToastVisible}
            onClose={() => setIsToastVisible(false)}
          />
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
              Fill out the form below to enroll, and we will get back to you
              with the next steps!
            </p>
            <form
              id="enroll-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                  Contact Info (Email, Phone, or WhatsApp)
                </label>
                <input
                  type="text"
                  name="contact_info"
                  required
                  value={formData.contact_info}
                  onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any specific goals or questions?"
                  className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border border-transparent hover:border-black disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Submit
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;
