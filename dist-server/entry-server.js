import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import { GraduationCap, MessageCircle, CheckCircle, Heart, X, Info, AlertCircle, ChevronDown, Send, Menu, ArrowDown, Sparkles, Clock, BookOpen, Mail, Phone, Facebook, Instagram, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";
const COURSES = [
  {
    id: "survival-amharic",
    title: "Survival Amharic",
    description: "Speak quickly and confidently in real-life situations like greetings, directions, shopping, and emergencies.",
    level: "Beginner",
    color: "border-l-chiraro-gold",
    duration: "15 Weeks",
    price: "$17/lesson",
    curriculum: [
      "Greetings & Introductions",
      "Directions & Transportation",
      "Shopping & Bargaining",
      "Ordering Food & Drinks",
      "Emergency & Health Phrases",
      "Cultural Insights & Etiquette"
    ]
  },
  {
    id: "conversational-amharic-1",
    title: "Conversational Amharic 1",
    description: "Build your foundation! Form simple sentences, ask/answer questions, and hold basic conversations.",
    level: "Intermediate",
    color: "border-l-chiraro-red",
    duration: "30 Weeks",
    price: "$20/lesson",
    curriculum: [
      "Greetings & Cultural Icebreakers",
      "Directions, Taxis & Public Transport",
      "Shopping, Bargaining & Transactions",
      "Ordering Food & Navigating Menus",
      "Emergencies & Health Needs",
      "Social Etiquette & Polite Requests"
    ]
  },
  {
    id: "conversational-amharic-2",
    title: "Conversational Amharic 2",
    description: "Reach B2-level fluency. Communicate naturally, express opinions, and understand complex conversations.",
    level: "Advanced",
    color: "border-l-chiraro-green",
    duration: "30 Weeks",
    price: "$20/lesson",
    curriculum: [
      "Opinions & Current Events",
      "Humor, Sarcasm & Storytelling",
      "Professional & Formal Interactions",
      "Emotional Conversations & Advice",
      "Media, Proverbs & Cultural Analysis"
    ]
  },
  {
    id: "travel-amharic",
    title: "Travel Amharic",
    description: "Communicate effortlessly in airports, hotels, and dining. Perfect for tourists and business travelers.",
    level: "Beginner",
    color: "border-l-blue-400",
    duration: "5 Weeks",
    price: "$17/lesson",
    curriculum: [
      "Key travel phrases",
      "Asking for directions",
      "Improve pronunciation",
      "Cultural tips for travel"
    ]
  },
  {
    id: "amharic-writing-reading",
    title: "Amharic Writing & Reading",
    description: "Master the Fidel! Learn to recognize characters, form words, and read basic texts.",
    level: "All Levels",
    color: "border-l-brand-orange",
    duration: "5 Weeks",
    price: "$17/lesson",
    curriculum: [
      "All Amharic Fidel characters & sounds",
      "Reading & Writing common words",
      "Pronunciation & Spelling",
      "History of Amharic Script"
    ]
  },
  {
    id: "industry-amharic",
    title: "Industry-Specific Amharic",
    description: "Tailored to your field: Medicine, Engineering, Social Work, or Business.",
    level: "Professional",
    color: "border-l-brand-pink",
    duration: "Custom",
    price: "Course Dependent",
    curriculum: [
      "Medicine & Healthcare Terminology",
      "Engineering & Construction Vocabulary",
      "Social Work & Humanitarian Language",
      "Business Negotiations & Trade"
    ]
  }
];
const FEATURES = [
  {
    id: "tesol",
    title: "TESOL Certified",
    description: "Instructors certified by Arizona State University (ASU) to help you master Amharic.",
    icon: /* @__PURE__ */ jsx(GraduationCap, { className: "w-6 h-6 text-chiraro-gold" })
  },
  {
    id: "clt",
    title: "CLT Methodology",
    description: "Modern curriculum based on Communicative Language Teaching (CLT) for effectiveness.",
    icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-chiraro-gold" })
  },
  {
    id: "practice",
    title: "Real-Life Practice",
    description: "Lessons focus on practical, real-world usage so you can speak confidently.",
    icon: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-chiraro-gold" })
  },
  {
    id: "engaging",
    title: "Fun & Engaging",
    description: "We make learning Amharic an enjoyable experience with interactive lessons.",
    icon: /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-chiraro-gold" })
  }
];
const TESTIMONIALS = [
  {
    id: 1,
    name: "Noah Wossen",
    role: "Student",
    text: "Learning Amharic with Yohannes has been an incredible experience. He’s kind, patient, and genuinely excited to see me improve. His encouragement keeps me motivated, and his flexibility with scheduling makes lessons easy to stick with. In just a few weeks, I went from not being able to read or write anything to forming sentences. Highly recommend to anyone starting, or growing in their Amharic journey!"
  }
];
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Select Course",
    description: "Choose from Survival, Conversational, or Specialized courses."
  },
  {
    id: 2,
    title: "Enroll",
    description: "Contact us to sign up for your chosen path."
  },
  {
    id: 3,
    title: "Learn",
    description: "Engage in fun, effective lessons with expert instructors."
  },
  {
    id: 4,
    title: "Master",
    description: "Speak Amharic with confidence and connect with the culture."
  }
];
const FAQ$1 = [
  {
    question: "Do I need any prior knowledge of Amharic to enroll?",
    answer: "No! We offer courses for all levels, from absolute beginners to advanced learners."
  },
  {
    question: "What is your teaching methodology?",
    answer: "We use Communicative Language Teaching (CLT), focusing on real-life conversations and practical usage."
  },
  {
    question: "Can I take the lesson online?",
    answer: "Yes, we offer online lessons via Google Meet. We also offer in-person lessons in Addis Ababa, Ethiopia."
  },
  {
    question: "Are your instructors certified?",
    answer: "Yes, all our instructors are TESOL certified by Arizona State University (ASU)."
  },
  {
    question: "Can I switch courses after enrolling?",
    answer: "Yes, you can switch courses at any time based on your progress and needs."
  },
  {
    question: "Do you offer flexible scheduling?",
    answer: "Yes, we offer flexible scheduling to accommodate your needs."
  }
];
const PHRASES = [
  {
    amharic: "እንደምን አለህ?",
    phonetic: "Endämən alläh?",
    english: "How are you? (to a male)",
    icon: "👋"
  },
  {
    amharic: "እንደምን አለሽ?",
    phonetic: "Endämən alläsh?",
    english: "How are you? (to a female)",
    icon: "👋"
  },
  {
    amharic: "ስምህ ማን ነው?",
    phonetic: "Səməh man näw?",
    english: "What is your name? (to a male)",
    icon: "🤝"
  },
  {
    amharic: "አመሰግናለሁ",
    phonetic: "Amäsäggənallähw",
    english: "Thank you",
    icon: "🙏"
  },
  {
    amharic: "ይቅርታ",
    phonetic: "Yəqərta",
    english: "Excuse me / Sorry",
    icon: "✋"
  },
  {
    amharic: "እንኳን ደህና መጣህ",
    phonetic: "Enkwan dähna mäṭṭah",
    english: "Welcome (to a male)",
    icon: "🏠"
  },
  {
    amharic: "ጥሩ ነው",
    phonetic: "Ṭəru näw",
    english: "It is good",
    icon: "👍"
  },
  {
    amharic: "አዎ / አይደለም",
    phonetic: "Awo / Ayidälläm",
    english: "Yes / No (formal)",
    icon: "✅"
  },
  {
    amharic: "ስንት ነው?",
    phonetic: "Səntə näw?",
    english: "How much is it?",
    icon: "💰"
  },
  {
    amharic: "የት ነው?",
    phonetic: "Yätə näw?",
    english: "Where is it?",
    icon: "📍"
  },
  {
    amharic: "ውሃ እፈልጋለሁ",
    phonetic: "Wəha efälləgallähw",
    english: "I want water",
    icon: "💧"
  },
  {
    amharic: "በጣም ቆንጆ",
    phonetic: "Bäṭam qonjo",
    english: "Very beautiful",
    icon: "✨"
  },
  {
    amharic: "ምንድነው?",
    phonetic: "Məndənäw?",
    english: "What is it?",
    icon: "🤔"
  },
  {
    amharic: "ደህና እደር",
    phonetic: "Dähna edär",
    english: "Good night (to a male)",
    icon: "🌙"
  },
  {
    amharic: "ደህና እደሪ",
    phonetic: "Dähna edäri",
    english: "Good night (to a female)",
    icon: "🌙"
  },
  {
    amharic: "እወድሃለሁ",
    phonetic: "Ewäddəhallähw",
    english: "I love you (to a male)",
    icon: "❤️"
  },
  {
    amharic: "እወድሻለሁ",
    phonetic: "Ewäddəšallähw",
    english: "I love you (to a female)",
    icon: "❤️"
  },
  {
    amharic: "እባክህ",
    phonetic: "Ebakəh",
    english: "Please (to a male)",
    icon: "🙋‍♂️"
  },
  {
    amharic: "እባክሽ",
    phonetic: "Ebakəš",
    english: "Please (to a female)",
    icon: "🙋‍♀️"
  },
  {
    amharic: "አልገባኝም",
    phonetic: "Algäbaññəm",
    english: "I don't understand",
    icon: "🤷"
  },
  {
    amharic: "ቻው",
    phonetic: "Ciao",
    english: "Goodbye (informal)",
    icon: "👋"
  }
];
const Toast = ({ message, type = "info", isVisible, onClose, duration = 5e3 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  const getThemeStyles = () => {
    switch (type) {
      case "success":
        return "bg-brand-lime text-black border-black";
      case "error":
        return "bg-brand-pink text-white border-black";
      case "info":
      default:
        return "bg-white text-black border-black";
    }
  };
  const getIcon = () => {
    switch (type) {
      case "success":
        return /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 shrink-0" });
      case "error":
        return /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 shrink-0" });
      case "info":
      default:
        return /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 shrink-0" });
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -50, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, scale: 0.95, y: -20 },
      transition: { duration: 0.2 },
      className: "fixed top-6 left-0 right-0 z-[200] flex justify-center px-4 pointer-events-none",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center gap-3 px-6 py-4 rounded-[1.5rem] border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto max-w-md w-full ${getThemeStyles()}`,
          children: [
            getIcon(),
            /* @__PURE__ */ jsx("p", { className: "flex-1 font-bold text-sm md:text-base", children: message }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "p-1 rounded-full border border-black/20 hover:bg-black/10 transition-colors shrink-0",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
              }
            )
          ]
        }
      )
    }
  ) });
};
const EnrollModal = ({
  isOpen,
  onClose,
  defaultCourse
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(
    defaultCourse || "General Inquiry"
  );
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    contact_info: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setIsToastVisible(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
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
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.contact_info,
            subject: `Enrollment: ${selectedSubject}`,
            message: formData.message || "No additional message"
          })
        }
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
          "success"
        );
        setTimeout(() => {
          onClose();
          setStatus("idle");
        }, 3e3);
      } else {
        throw new Error(result.message || "Failed to send enrollment request.");
      }
    } catch (error) {
      setStatus("error");
      showToast(
        error instanceof Error ? error.message : "An unknown error occurred.",
        "error"
      );
    }
  };
  useEffect(() => {
    setSelectedSubject(defaultCourse || "General Inquiry");
  }, [defaultCourse]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    ...COURSES.map((c) => `${c.title}`)
  ];
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx(
      Toast,
      {
        message: toastMessage,
        type: toastType,
        isVisible: isToastVisible,
        onClose: () => setIsToastVisible(false)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        className: "w-full max-w-lg bg-white rounded-[2rem] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 relative z-10 max-h-[90vh] overflow-y-auto",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-4 right-4 w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors z-20",
              children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-2", children: "Start Learning" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Fill out the form below to enroll, and we will get back to you with the next steps!" }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              id: "enroll-form",
              onSubmit: handleSubmit,
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      required: true,
                      value: formData.name,
                      onChange: handleInputChange,
                      placeholder: "Enter your name",
                      className: "w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Contact Info (Email, Phone, or WhatsApp)" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "contact_info",
                      required: true,
                      value: formData.contact_info,
                      onChange: handleInputChange,
                      placeholder: "How should we reach you?",
                      className: "w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Course" }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "course", value: selectedSubject }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "relative cursor-pointer",
                      onClick: () => setIsDropdownOpen(!isDropdownOpen),
                      children: /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: `w-full bg-brand-bg border ${isDropdownOpen ? "border-black ring-1 ring-black" : "border-gray-300"} rounded-xl px-4 py-3 pr-6 text-black transition-colors flex items-center justify-between`,
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "truncate", children: selectedSubject }),
                            /* @__PURE__ */ jsx(
                              ChevronDown,
                              {
                                className: `w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`
                              }
                            )
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: isDropdownOpen && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: -10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.2 },
                      className: "absolute z-50 w-full mt-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden flex flex-col max-h-60 overflow-y-auto",
                      children: subjectOptions.map((option, idx) => /* @__PURE__ */ jsx(
                        "div",
                        {
                          onClick: () => {
                            setSelectedSubject(option);
                            setIsDropdownOpen(false);
                          },
                          className: `px-4 py-3 cursor-pointer hover:bg-brand-lime transition-colors text-black ${selectedSubject === option ? "bg-brand-pink text-white font-bold hover:bg-brand-pink/90" : ""}`,
                          children: option
                        },
                        idx
                      ))
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Message (Optional)" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      name: "message",
                      value: formData.message,
                      onChange: handleInputChange,
                      rows: 3,
                      placeholder: "Any specific goals or questions?",
                      className: "w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: status === "submitting",
                    className: "w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border border-transparent hover:border-black disabled:opacity-70 disabled:cursor-not-allowed",
                    children: status === "submitting" ? "Submitting..." : /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }),
                      " Submit"
                    ] })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] }) });
};
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
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
    { name: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-bg/90 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-6"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("a", { href: "#", className: "block", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "./logo.png",
                  alt: "Chiraro Language School",
                  className: "h-16 w-auto object-contain",
                  onError: (e) => {
                    var _a;
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = "none";
                    (_a = e.currentTarget.nextElementSibling) == null ? void 0 : _a.classList.remove("hidden");
                  }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "hidden flex items-center gap-2 group", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-black rounded-full flex items-center justify-center font-ethiopic font-bold text-brand-lime text-xl border-2 border-transparent group-hover:border-brand-lime", children: "ጭ" }),
                /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-tight text-black", children: "Chiraro Amharic" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
              navLinks.map((link) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  className: "text-sm font-bold text-gray-600 hover:text-black transition-colors",
                  children: link.name
                },
                link.name
              )),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#assessment",
                  className: "text-sm font-bold text-gray-600 hover:text-black transition-colors",
                  children: "Take Assessment"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsEnrollModalOpen(true),
                  className: "px-6 py-3 text-sm font-bold bg-black text-white rounded-full hover:bg-brand-lime hover:text-black transition-all border border-black",
                  children: "Start Learning"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "md:hidden text-black hover:text-gray-600",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
              }
            )
          ] }),
          mobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b border-black/10 p-6 flex flex-col gap-4 shadow-xl", children: [
            navLinks.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: "text-lg font-bold text-gray-800 hover:text-brand-blue",
                onClick: () => setMobileMenuOpen(false),
                children: link.name
              },
              link.name
            )),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#assessment",
                onClick: () => setMobileMenuOpen(false),
                className: "text-lg font-bold text-gray-800 hover:text-brand-blue",
                children: "Take Assessment"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setMobileMenuOpen(false);
                  setIsEnrollModalOpen(true);
                },
                className: "text-center px-5 py-3 text-sm font-bold bg-black text-white rounded-full hover:bg-brand-lime hover:text-black transition-colors",
                children: "Start Learning"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      EnrollModal,
      {
        isOpen: isEnrollModalOpen,
        onClose: () => setIsEnrollModalOpen(false)
      }
    )
  ] });
};
const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWords, setDisplayWords] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    const shuffled = [...PHRASES].sort(() => 0.5 - Math.random());
    setDisplayWords(shuffled.slice(0, 5));
  }, []);
  useEffect(() => {
    if (!isAutoPlaying || displayWords.length === 0) return;
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % displayWords.length);
    }, 4e3);
    return () => clearInterval(timer);
  }, [isAutoPlaying, displayWords]);
  const [direction, setDirection] = useState(0);
  const handleDragEnd = (e, info) => {
    setIsAutoPlaying(false);
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setDirection(1);
      setCurrentWordIndex((prev) => (prev + 1) % displayWords.length);
    } else if (info.offset.x > swipeThreshold) {
      setDirection(-1);
      setCurrentWordIndex(
        (prev) => (prev - 1 + displayWords.length) % displayWords.length
      );
    }
  };
  const variants = {
    enter: (direction2) => {
      return {
        x: direction2 > 0 ? 50 : -50,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction2) => {
      return {
        zIndex: 0,
        x: direction2 < 0 ? 50 : -50,
        opacity: 0
      };
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex items-center pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-brand-bg",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-20 left-0 w-64 h-64 opacity-20 pointer-events-none bg-contain bg-no-repeat rotate-12",
            style: { backgroundImage: "url(/images/adey-abeba.png)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-96 h-96 opacity-15 pointer-events-none bg-contain bg-no-repeat bg-bottom-right",
            style: { backgroundImage: "url(/images/lalibela.png)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-8 lg:gap-20", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "lg:w-1/2 text-center lg:text-left",
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-[1.1] mb-5 md:mb-8 font-sans text-brand-text", children: [
                  "Speak",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-2", children: "Amharic," }),
                  /* @__PURE__ */ jsx("br", {}),
                  "Live",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-pink px-4 py-1 rounded-full text-white border border-black transform rotate-1", children: "Amharic," }),
                  /* @__PURE__ */ jsx("br", {}),
                  "Make Friends!"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-gray-600 mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium", children: [
                  "Learn Amharic easily with expert guidance, real-life practice, and a structured curriculum. Classes available ",
                  /* @__PURE__ */ jsx("strong", { children: "Online" }),
                  " ",
                  "and ",
                  /* @__PURE__ */ jsx("strong", { children: "In-Person" }),
                  "."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#courses",
                      className: "px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border-2 border-transparent hover:border-black",
                      children: "Our Courses"
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#about",
                      className: "px-8 py-4 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2",
                      children: [
                        "Learn More ",
                        /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center justify-center lg:justify-start gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex -space-x-3", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "w-10 h-10 rounded-full border-2 border-white object-cover",
                        src: "https://picsum.photos/id/64/100/100",
                        alt: "Student"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "w-10 h-10 rounded-full border-2 border-white object-cover",
                        src: "https://picsum.photos/id/65/100/100",
                        alt: "Student"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "w-10 h-10 rounded-full border-2 border-white object-cover",
                        src: "https://picsum.photos/id/91/100/100",
                        alt: "Student"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-brand-blue", children: "150+" }),
                    " Students Enrolled"
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "lg:w-1/2 relative",
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              children: /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-3/4 h-3/4 bg-brand-lime/30 rounded-full blur-3xl -z-10 animate-pulse" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute bottom-0 left-0 w-3/4 h-3/4 bg-brand-pink/20 rounded-full blur-3xl -z-10 animate-pulse",
                    style: { animationDelay: "1s" }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2.5rem] border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 w-[90vw] sm:w-[400px] h-[400px] flex flex-col relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4 border-b border-black/10 pb-4 shrink-0", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-brand-pink border border-black" }),
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-brand-lime border border-black" }),
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-brand-blue border border-black" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full animate-bounce pointer-events-none shadow-sm", children: "Phrase of the Day" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-center flex-1 flex flex-col items-center justify-center relative select-none", children: displayWords.length > 0 && /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      custom: direction,
                      variants,
                      initial: "enter",
                      animate: "center",
                      exit: "exit",
                      transition: { duration: 0.3 },
                      className: "flex flex-col items-center justify-center absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y",
                      drag: "x",
                      dragConstraints: { left: 0, right: 0 },
                      dragElastic: 1,
                      onDragEnd: handleDragEnd,
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-6xl mb-2", children: displayWords[currentWordIndex].icon }),
                        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold font-ethiopic mb-3 pointer-events-none px-4 leading-tight", children: displayWords[currentWordIndex].amharic }),
                        /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-brand-blue mb-2 pointer-events-none px-4", children: displayWords[currentWordIndex].phonetic }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-500 font-medium pointer-events-none px-4", children: displayWords[currentWordIndex].english })
                      ]
                    },
                    currentWordIndex
                  ) }) }),
                  /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center gap-2 shrink-0", children: displayWords.map((_, idx) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        setIsAutoPlaying(false);
                        setCurrentWordIndex(idx);
                      },
                      "aria-label": `Go to word ${idx + 1}`,
                      className: `h-2 rounded-full transition-all duration-300 ${idx === currentWordIndex ? "w-8 bg-black" : "w-2 bg-gray-200 hover:bg-brand-lime"}`
                    },
                    idx
                  )) })
                ] })
              ] })
            }
          )
        ] }) })
      ]
    }
  );
};
const About = () => {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "py-24 bg-brand-bg relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat bg-bottom-left",
        style: { backgroundImage: "url(/images/tej.png)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
          "Why",
          " ",
          /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-1", children: "Chiraro" }),
          "?"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mt-2", children: "Master Amharic with Ease" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 relative order-2 lg:order-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 shrink-0 bg-brand-orange rounded-full flex items-center justify-center border border-black", children: /* @__PURE__ */ jsx(Sparkles, { className: "text-white w-5 h-5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-xl", children: "Learn Amharic the Fun & Effective Way" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-gray-700 leading-relaxed text-lg", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Looking to learn Amharic in a fun and effective way? At",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "Chiraro Language School" }),
              ", we bring years of experience and a TESOL certification from Arizona State University (ASU) to help students master Amharic as a second language."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Using a modern curriculum based on Communicative Language Teaching (CLT), our lessons focus on real-life practice. Whether you prefer learning ",
              /* @__PURE__ */ jsx("strong", { children: "Online" }),
              " from anywhere in the world, or ",
              /* @__PURE__ */ jsx("strong", { children: "In-Person" }),
              " with us here locally, we offer flexible options to fit your lifestyle."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-4 text-center sm:text-left", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#courses",
                className: "inline-block bg-brand-blue text-white font-bold py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full border border-black hover:bg-brand-pink transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap",
                children: "🚀 Start Your Journey Today!"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 order-1 lg:order-2 flex justify-center w-full", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[500px]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/about.jpg",
              alt: "Ethiopian Culture",
              className: "rounded-[2.5rem] border-2 border-black object-cover w-full aspect-[1592/1194] z-10 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 w-full h-full rounded-[2.5rem] border-2 border-black bg-brand-blue -z-0" })
        ] }) })
      ] })
    ] })
  ] });
};
const Features = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "features",
      className: "py-24 bg-white border-y border-black/5 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat rotate-12 transform translate-x-1/4 -translate-y-1/4",
            style: { backgroundImage: "url(/images/axum-obelisk.png)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
              "Everything You",
              " ",
              /* @__PURE__ */ jsx("span", { className: "inline-block border border-black bg-brand-pink px-4 rounded-full text-white", children: "Need" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-2xl mx-auto text-lg", children: "We combine expert instruction with modern methods to help you succeed." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20", children: FEATURES.map((feature, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "bg-brand-bg p-8 rounded-[2rem] border border-black/10 hover:border-black transition-all hover:shadow-lg text-center flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `mb-6 w-20 h-20 rounded-full flex items-center justify-center border-2 border-black ${idx % 2 === 0 ? "bg-brand-lime" : "bg-brand-blue"}`,
                    children: React.cloneElement(feature.icon, {
                      className: "w-8 h-8 text-black"
                    })
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: feature.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: feature.description })
              ]
            },
            feature.id
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-brand-bg rounded-[2.5rem] p-8 md:p-12 border border-black flex flex-col lg:flex-row items-center gap-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]", children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2", children: [
              /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4", children: "IMPACT" }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-4", children: "Real Results" }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-6 leading-relaxed", children: [
                "With over ",
                /* @__PURE__ */ jsx("strong", { children: "150+ students" }),
                " and",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "300+ hours" }),
                " of content, our alumni consistently report ",
                /* @__PURE__ */ jsx("strong", { children: "2x faster" }),
                " language acquisition. Join us",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Online" }),
                " or ",
                /* @__PURE__ */ jsx("strong", { children: "In-Person" }),
                " to see the difference."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-bold", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-brand-lime border border-black" }),
                  " ",
                  "Chiraro Method"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-gray-500", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-gray-300" }),
                  " ",
                  "Traditional"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 w-full h-64 bg-white rounded-2xl p-4 border border-black/5 relative", children: [
              /* @__PURE__ */ jsx("p", { className: "absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-gray-400 whitespace-nowrap", children: "Vocabulary Size" }),
              /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(
                AreaChart,
                {
                  data: [
                    { name: "Month 1", traditional: 50, chiraro: 150 },
                    { name: "Month 2", traditional: 120, chiraro: 350 },
                    { name: "Month 3", traditional: 200, chiraro: 600 },
                    { name: "Month 4", traditional: 300, chiraro: 900 },
                    { name: "Month 6", traditional: 450, chiraro: 1500 }
                  ],
                  children: [
                    /* @__PURE__ */ jsxs("defs", { children: [
                      /* @__PURE__ */ jsxs("linearGradient", { id: "colorChiraro", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                        /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#D4F853", stopOpacity: 0.8 }),
                        /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#D4F853", stopOpacity: 0 })
                      ] }),
                      /* @__PURE__ */ jsxs("linearGradient", { id: "colorTrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                        /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#E5E7EB", stopOpacity: 0.8 }),
                        /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#E5E7EB", stopOpacity: 0 })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      XAxis,
                      {
                        dataKey: "name",
                        stroke: "#9CA3AF",
                        fontSize: 12,
                        tickLine: false,
                        axisLine: false
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      YAxis,
                      {
                        stroke: "#9CA3AF",
                        fontSize: 12,
                        tickLine: false,
                        axisLine: false
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Tooltip,
                      {
                        contentStyle: {
                          backgroundColor: "#fff",
                          borderColor: "#000",
                          borderRadius: "12px",
                          color: "#000",
                          boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.1)"
                        },
                        itemStyle: { color: "#000", fontWeight: "bold" },
                        formatter: (value) => [`${value} words`, void 0]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Area,
                      {
                        type: "monotone",
                        dataKey: "traditional",
                        stroke: "#9CA3AF",
                        strokeWidth: 2,
                        fillOpacity: 1,
                        fill: "url(#colorTrad)"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Area,
                      {
                        type: "monotone",
                        dataKey: "chiraro",
                        stroke: "#000",
                        strokeWidth: 3,
                        fillOpacity: 1,
                        fill: "url(#colorChiraro)"
                      }
                    )
                  ]
                }
              ) })
            ] })
          ] })
        ] })
      ]
    }
  );
};
const Courses = () => {
  const hideScrollbarClass = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']";
  const courseImages = [
    "/images/red-fox.png",
    "/images/ethiopia-buna.png",
    "/images/axum-obelisk.png",
    "/images/fasiledes.png",
    "/images/adey-abeba.png",
    "/images/ethiopian-kirar.png"
  ];
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };
  const handleCloseModal = () => {
    setSelectedCourse(null);
  };
  const handleInquireClick = (e) => {
    e.stopPropagation();
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "courses",
      className: "py-24 bg-brand-bg relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
              "Choose Your",
              " ",
              /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-blue px-4 py-1 rounded-full text-white transform rotate-1", children: "Path" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Find the perfect course to start your Amharic journey. Available",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "Online" }),
              " & ",
              /* @__PURE__ */ jsx("strong", { children: "In-Person" }),
              ". Tap a card for details."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: COURSES.map((course, idx) => {
            const bgImage = courseImages[idx % courseImages.length];
            return /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: () => handleCardClick(course),
                className: "bg-white p-8 rounded-[2rem] border border-black hover:shadow-[8px_8px_0px_0px_rgba(212,248,83,1)] transition-all group cursor-pointer relative overflow-hidden",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute top-6 right-4 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity bg-contain bg-no-repeat bg-right-top pointer-events-none",
                      style: { backgroundImage: `url(${bgImage})` }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `w-14 h-14 rounded-full border border-black flex items-center justify-center text-xl font-bold font-ethiopic text-white ${course.title.includes("Conversational") ? "bg-brand-pink" : course.id === "survival-amharic" ? "bg-brand-blue" : course.id === "travel-amharic" ? "bg-brand-orange" : course.id === "amharic-writing-reading" ? "bg-brand-lime !text-black" : "bg-[#9b5de5]"}`,
                        children: course.title.charAt(0)
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-brand-bg border border-black/10 rounded-full text-xs font-bold uppercase tracking-wider", children: course.level })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-lg text-brand-pink text-sm font-bold", children: course.duration }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-black mb-3 group-hover:text-brand-blue transition-colors", children: course.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8 min-h-[48px]", children: course.description }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#contact-form",
                      onClick: handleInquireClick,
                      className: "w-full block text-center py-3 rounded-xl border border-black font-bold hover:bg-black hover:text-white transition-all z-10 relative",
                      "aria-label": `Inquire about ${course.title}`,
                      children: "Inquire Now"
                    }
                  )
                ]
              },
              course.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: selectedCourse && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: handleCloseModal,
              className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 20 },
              className: `relative bg-brand-bg w-full max-w-2xl rounded-[2.5rem] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto ${hideScrollbarClass} overflow-hidden`,
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-10 right-10 w-64 h-64 opacity-25 bg-contain bg-no-repeat bg-right-top pointer-events-none",
                    style: {
                      backgroundImage: `url(${courseImages[COURSES.findIndex((c) => c.id === selectedCourse.id) % courseImages.length]})`,
                      transform: "rotate(10deg)"
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handleCloseModal,
                    className: "absolute top-6 right-6 p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors z-10",
                    children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-6 pr-12 md:pr-8 lg:pr-0 pt-6 md:pt-0", children: [
                    /* @__PURE__ */ jsx("span", { className: "px-4 py-1.5 bg-brand-lime border border-black rounded-full text-xs font-bold uppercase tracking-wider", children: selectedCourse.level }),
                    /* @__PURE__ */ jsxs("span", { className: "px-4 py-1.5 bg-brand-blue border border-black rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                      " ",
                      selectedCourse.duration
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "px-4 py-1.5 bg-brand-pink border border-black rounded-full text-xs font-bold text-white uppercase tracking-wider", children: selectedCourse.price })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold mb-4", children: selectedCourse.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg mb-8 leading-relaxed", children: selectedCourse.description }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-black/10 p-6 mb-8", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 font-bold text-xl mb-4", children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5 text-brand-pink" }),
                      "Curriculum Highlights"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: selectedCourse.curriculum.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-brand-lime shrink-0 mt-0.5 fill-black" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: item })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#contact-form",
                      onClick: handleCloseModal,
                      className: "flex-1 py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black hover:border-black border border-transparent transition-all text-center",
                      children: "Enroll Now"
                    }
                  ) })
                ] })
              ]
            }
          )
        ] }) })
      ]
    }
  );
};
const Process = () => {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white border-t border-black/5 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-0 left-0 w-96 h-96 opacity-5 pointer-events-none bg-contain bg-no-repeat bg-top-left -translate-x-10 -translate-y-10 rotate-45",
        style: { backgroundImage: "url(/images/ethiopian-kirar.png)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
        "Language Learning For All ",
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-pink border border-black px-4 rounded-full text-white transform -rotate-2", children: "People" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-8", children: PROCESS_STEPS.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
        index !== PROCESS_STEPS.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-10 left-1/2 w-full h-[3px] bg-gray-100 z-0" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: `w-20 h-20 rounded-full border-2 border-black flex items-center justify-center text-3xl font-bold mb-6 bg-white group-hover:scale-110 transition-transform ${index === 0 ? "text-brand-lime shadow-[4px_4px_0px_0px_#D4F853]" : index === 1 ? "text-brand-blue shadow-[4px_4px_0px_0px_#5B91F5]" : index === 2 ? "text-brand-pink shadow-[4px_4px_0px_0px_#E983D8]" : "text-brand-orange shadow-[4px_4px_0px_0px_#FF9F2E]"}`, children: step.id }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-black mb-3", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 max-w-[200px]", children: step.description })
        ] })
      ] }, step.id)) })
    ] })
  ] });
};
const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setIsToastVisible(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
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
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: selectedSubject,
            message: formData.message
          })
        }
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
          "success"
        );
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      showToast(
        error instanceof Error ? error.message : "An unknown error occurred.",
        "error"
      );
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const subjectOptions = [
    "General Inquiry",
    ...COURSES.map((c) => `${c.title}`)
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      className: "py-24 bg-brand-bg relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          Toast,
          {
            message: toastMessage,
            type: toastType,
            isVisible: isToastVisible,
            onClose: () => setIsToastVisible(false)
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none bg-contain bg-no-repeat bg-bottom-left",
            style: { backgroundImage: "url(/images/ethiopia-buna.png)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
              "Loved by",
              " ",
              /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-pink px-4 py-1 rounded-full text-white border border-black transform rotate-1", children: "learners," }),
              " ",
              /* @__PURE__ */ jsx("br", {}),
              "supported by experts."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8 text-lg", children: "Have questions? We are here to help you start your journey." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:amharic@chiraro.com",
                  className: "flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-brand-lime p-3 rounded-full border border-black group-hover:bg-black group-hover:text-brand-lime transition-colors", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-black", children: "Email Us" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "amharic@chiraro.com" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "tel:+251901116044",
                  className: "flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-brand-pink p-3 rounded-full border border-black text-white group-hover:bg-black group-hover:text-brand-pink transition-colors", children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-black", children: "Call Us" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "+251 901 116 044" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://wa.me/251901116044",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-[#25D366] p-3 rounded-full border border-black text-white group-hover:bg-black group-hover:text-[#25D366] transition-colors", children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-5 h-5",
                        children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-black", children: "WhatsApp Us" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Chat with our team" })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "form",
            {
              id: "contact-form",
              onSubmit: handleSubmit,
              className: "bg-white p-8 rounded-[2rem] border border-black shadow-[10px_10px_0px_0px_#000]",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      required: true,
                      value: formData.name,
                      onChange: handleInputChange,
                      placeholder: "Enter your name",
                      className: "w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      required: true,
                      value: formData.email,
                      onChange: handleInputChange,
                      placeholder: "Your email address",
                      className: "w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Subject" }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "subject", value: selectedSubject }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "relative cursor-pointer",
                      onClick: () => setIsDropdownOpen(!isDropdownOpen),
                      children: /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: `w-full bg-brand-bg border ${isDropdownOpen ? "border-black ring-1 ring-black" : "border-gray-300"} rounded-xl px-4 py-3 pr-6 text-black transition-colors flex items-center justify-between`,
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "truncate", children: selectedSubject }),
                            /* @__PURE__ */ jsx(
                              ChevronDown,
                              {
                                className: `w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`
                              }
                            )
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: isDropdownOpen && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: -10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.2 },
                      className: "absolute z-50 w-full mt-2 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden flex flex-col max-h-60 overflow-y-auto",
                      children: subjectOptions.map((option, idx) => /* @__PURE__ */ jsx(
                        "div",
                        {
                          onClick: () => {
                            setSelectedSubject(option);
                            setIsDropdownOpen(false);
                          },
                          className: `px-4 py-3 cursor-pointer hover:bg-brand-lime transition-colors text-black ${selectedSubject === option ? "bg-brand-pink text-white font-bold hover:bg-brand-pink/90" : ""}`,
                          children: option
                        },
                        idx
                      ))
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-black mb-2", children: "Message" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      name: "message",
                      required: true,
                      value: formData.message,
                      onChange: handleInputChange,
                      rows: 4,
                      placeholder: "How can we help you?",
                      className: "w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: status === "submitting",
                    className: "w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border border-transparent hover:border-black disabled:opacity-70 disabled:cursor-not-allowed",
                    children: status === "submitting" ? "Sending..." : /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }),
                      " Send Message"
                    ] })
                  }
                )
              ] })
            }
          )
        ] }) })
      ]
    }
  );
};
const AssessmentModal = ({ isOpen, onClose }) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        className: "relative bg-white w-full max-w-md rounded-[2.5rem] border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 text-center",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-6 right-6 p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors",
              "aria-label": "Close modal",
              children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 pr-6", children: "Choose Your Assessment" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8 max-w-sm mx-auto", children: "How would you prefer to take the competency test?" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://forms.gle/jLcnEoZ8v116YrKu9",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: onClose,
                className: "flex flex-col items-center justify-center w-full p-4 border border-black rounded-2xl hover:bg-brand-lime transition-colors group cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-lg group-hover:text-black", children: "English Phonetic" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 group-hover:text-black/70 mt-1", children: 'Written in English letters (e.g., "Selam")' })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://forms.gle/3rCo71d57gDZgr4y9",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: onClose,
                className: "flex flex-col items-center justify-center w-full p-4 border border-black rounded-2xl hover:bg-brand-pink transition-colors group cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-lg group-hover:text-white", children: "Amharic Fidel" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 group-hover:text-white/80 mt-1", children: 'Written in Amharic script (e.g., "ሰላም")' })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
};
const Footer = () => {
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      id: "assessment",
      className: "bg-brand-bg pt-12 pb-6 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat bg-bottom-right",
            style: { backgroundImage: "url(/images/buna-seed.png)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 mb-24 relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-black rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-[12px_12px_0px_0px_#D4F853] border-2 border-brand-lime flex flex-col md:flex-row items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-[500px] h-full opacity-20 pointer-events-none bg-cover bg-center mix-blend-overlay",
              style: { backgroundImage: "url(/images/mursi-girl.png)" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 relative z-10 text-left", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-bold text-white mb-6 leading-tight", children: [
              "Take a Free ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-blue", children: "Amharic Placement Test" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg mb-8 max-w-md", children: "Find out exactly where you stand. Take our quick online competency test in either Amharic Fidel or English Phonetics." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setShowAssessmentModal(true),
                  className: "bg-brand-lime text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all border border-transparent shadow-[4px_4px_0px_0px_white]",
                  children: "Take Assessment"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/251901116044",
                  className: "bg-transparent border border-gray-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-pink hover:border-brand-pink transition-all",
                  children: "Chat with Us"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:w-1/2 relative z-10 flex justify-center md:justify-end mt-8 md:mt-0", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-blue rounded-[2.5rem] rotate-6 opacity-50 blur-sm" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/adey-abeba.png",
                alt: "Student",
                className: "relative w-full max-w-sm rounded-[2.5rem] border-4 border-white object-cover shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
              }
            )
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-12 mb-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#",
                  className: "block mb-6",
                  onClick: (e) => e.preventDefault(),
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-black rounded-full flex items-center justify-center font-ethiopic font-bold text-brand-lime text-xl border border-black", children: "ጭ" }),
                    /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-black", children: "Chiraro" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: "Chiraro Amharic is a premier language school dedicated to keeping the Amharic language alive and accessible globally." }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.tiktok.com/@chiraro.amharic?_t=ZM-8vGEea4ZJw&_r=1",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full border border-black flex items-center justify-center text-white bg-black hover:bg-gray-800 transition-all hover:-translate-y-1",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-5 h-5",
                        children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.facebook.com/share/15EH4mRXQR/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full border border-black flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-1",
                    children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.instagram.com/chiraroamharic?igsh=MTVicnhzbWFva2JreQ==",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full border border-black flex items-center justify-center text-white bg-pink-600 hover:bg-pink-700 transition-all hover:-translate-y-1",
                    children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://wa.me/251901116044",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full border border-black flex items-center justify-center text-white bg-green-500 hover:bg-green-600 transition-all hover:-translate-y-1",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-5 h-5",
                        children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://linktr.ee/chiraroamharic",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full border border-black flex items-center justify-center text-black bg-[#43E660] hover:bg-[#32b54a] transition-all hover:-translate-y-1",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        viewBox: "0 0 80 97.7",
                        fill: "currentColor",
                        className: "w-4 h-4 ml-[0.5px] mt-[1px]",
                        children: /* @__PURE__ */ jsx("path", { d: "M0.2,33.1h24.2L7.1,16.7l9.5-9.6L33,23.8V0h14.2v23.8L63.6,7.1l9.5,9.6L55.8,33H80v13.5H55.7l17.3,16.7l-9.5,9.4L40,49.1 L16.5,72.7L7,63.2l17.3-16.7H0V33.1H0.2z M33.1,65.8h14.2v32H33.1V65.8z" })
                      }
                    )
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-black font-bold mb-6 text-lg", children: "Quick Links" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-600", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#home",
                    className: "hover:text-brand-blue transition-colors font-medium",
                    children: "Home"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#about",
                    className: "hover:text-brand-blue transition-colors font-medium",
                    children: "About Us"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#courses",
                    className: "hover:text-brand-blue transition-colors font-medium",
                    children: "Courses"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#faq",
                    className: "hover:text-brand-blue transition-colors font-medium",
                    children: "FAQ"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "hover:text-brand-blue transition-colors font-medium",
                    children: "Contact"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-black font-bold mb-6 text-lg", children: "Contact Us" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-600", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: "Email:" }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "mailto:amharic@chiraro.com",
                      className: "hover:text-brand-blue hover:underline",
                      children: "amharic@chiraro.com"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: "Phone:" }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "tel:+251901116044",
                      className: "hover:text-brand-blue hover:underline",
                      children: "+251 901 116 044"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: "Address:" }),
                  /* @__PURE__ */ jsx("span", { children: "Gotera, Addis Ababa, Ethiopia" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-black font-bold mb-6 text-lg", children: "Discover" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-600", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#home",
                    className: "hover:text-brand-lime transition-colors font-medium",
                    children: "Home"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#about",
                    className: "hover:text-brand-pink transition-colors font-medium",
                    children: "Why Chiraro?"
                  }
                ) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "© 2026 Chiraro Amharic. All rights reserved." }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm flex items-center gap-1", children: [
              "Made with",
              " ",
              /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-brand-pink fill-current animate-pulse" }),
              " ",
              "in Addis Ababa"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          AssessmentModal,
          {
            isOpen: showAssessmentModal,
            onClose: () => setShowAssessmentModal(false)
          }
        )
      ]
    }
  );
};
const Testimonials = () => {
  return /* @__PURE__ */ jsx("section", { id: "testimonials", className: "py-24 bg-brand-bg border-t border-black/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
      "What our ",
      /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-1", children: "Students" }),
      " Say"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-1 gap-8 max-w-4xl mx-auto", children: TESTIMONIALS.map((testimonial) => /* @__PURE__ */ jsx("div", { className: "bg-white p-8 md:p-12 rounded-[2.5rem] border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-black overflow-hidden shrink-0 bg-gray-200", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/person_1.jpg",
          alt: testimonial.name,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 justify-center md:justify-start mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-brand-orange text-brand-orange" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed", children: [
          '"',
          testimonial.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-xl", children: testimonial.name }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-blue font-bold text-sm", children: testimonial.role })
        ] })
      ] })
    ] }) }, testimonial.id)) })
  ] }) });
};
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxs("section", { id: "faq", className: "py-24 bg-brand-bg relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat rotate-12 transform translate-x-1/4 translate-y-1/4",
        style: { backgroundImage: "url(/images/axum-obelisk.png)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
          "Frequently Asked ",
          /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand-lime px-4 py-1 rounded-full border border-black transform -rotate-2", children: "Questions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Got questions? We've got answers to help you start your Amharic journey confidently." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: FAQ$1.map((faq, index) => {
        const isOpen = openIndex === index;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border border-black rounded-[1.5rem] bg-white overflow-hidden transition-all duration-300 ${isOpen ? "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => toggleFAQ(index),
                  className: "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg outline-none focus:bg-brand-bg/50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "pr-8", children: faq.question }),
                    /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full border border-black flex items-center justify-center transition-colors shrink-0 ${isOpen ? "bg-brand-pink text-white" : "bg-brand-bg text-black"}`, children: /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { rotate: isOpen ? 180 : 0 },
                        transition: { duration: 0.3 },
                        children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" })
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-gray-600 leading-relaxed border-t border-black/5 mt-2 pt-4", children: faq.answer })
                }
              ) })
            ]
          },
          index
        );
      }) })
    ] })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-brand-bg min-h-screen text-brand-text font-sans", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(Courses, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function render() {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
