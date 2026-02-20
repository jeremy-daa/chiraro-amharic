import React from 'react';
import { GraduationCap, MessageCircle, Heart, CheckCircle } from 'lucide-react';
import { Course, Feature, ProcessStep } from './types';

export const COURSES: Course[] = [
  {
    id: "survival-amharic",
    title: "Survival Amharic",
    description:
      "Speak quickly and confidently in real-life situations like greetings, directions, shopping, and emergencies.",
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
      "Cultural Insights & Etiquette",
    ],
  },
  {
    id: "conversational-amharic-1",
    title: "Conversational Amharic 1",
    description:
      "Build your foundation! Form simple sentences, ask/answer questions, and hold basic conversations.",
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
      "Social Etiquette & Polite Requests",
    ],
  },
  {
    id: "conversational-amharic-2",
    title: "Conversational Amharic 2",
    description:
      "Reach B2-level fluency. Communicate naturally, express opinions, and understand complex conversations.",
    level: "Advanced",
    color: "border-l-chiraro-green",
    duration: "30 Weeks",
    price: "$20/lesson",
    curriculum: [
      "Opinions & Current Events",
      "Humor, Sarcasm & Storytelling",
      "Professional & Formal Interactions",
      "Emotional Conversations & Advice",
      "Media, Proverbs & Cultural Analysis",
    ],
  },
  {
    id: "travel-amharic",
    title: "Travel Amharic",
    description:
      "Communicate effortlessly in airports, hotels, and dining. Perfect for tourists and business travelers.",
    level: "Beginner",
    color: "border-l-blue-400",
    duration: "5 Weeks",
    price: "$17/lesson",
    curriculum: [
      "Key travel phrases",
      "Asking for directions",
      "Improve pronunciation",
      "Cultural tips for travel",
    ],
  },
  {
    id: "amharic-writing-reading",
    title: "Amharic Writing & Reading",
    description:
      "Master the Fidel! Learn to recognize characters, form words, and read basic texts.",
    level: "All Levels",
    color: "border-l-brand-orange",
    duration: "5 Weeks",
    price: "$17/lesson",
    curriculum: [
      "All Amharic Fidel characters & sounds",
      "Reading & Writing common words",
      "Pronunciation & Spelling",
      "History of Amharic Script",
    ],
  },
  {
    id: "industry-amharic",
    title: "Industry-Specific Amharic",
    description:
      "Tailored to your field: Medicine, Engineering, Social Work, or Business.",
    level: "Professional",
    color: "border-l-brand-pink",
    duration: "Custom",
    price: "Course Dependent",
    curriculum: [
      "Medicine & Healthcare Terminology",
      "Engineering & Construction Vocabulary",
      "Social Work & Humanitarian Language",
      "Business Negotiations & Trade",
    ],
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'tesol',
    title: 'TESOL Certified',
    description: 'Instructors certified by Arizona State University (ASU) to help you master Amharic.',
    icon: <GraduationCap className="w-6 h-6 text-chiraro-gold" />
  },
  {
    id: 'clt',
    title: 'CLT Methodology',
    description: 'Modern curriculum based on Communicative Language Teaching (CLT) for effectiveness.',
    icon: <MessageCircle className="w-6 h-6 text-chiraro-gold" />
  },
  {
    id: 'practice',
    title: 'Real-Life Practice',
    description: 'Lessons focus on practical, real-world usage so you can speak confidently.',
    icon: <CheckCircle className="w-6 h-6 text-chiraro-gold" />
  },
  {
    id: 'engaging',
    title: 'Fun & Engaging',
    description: 'We make learning Amharic an enjoyable experience with interactive lessons.',
    icon: <Heart className="w-6 h-6 text-chiraro-gold" />
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Noah Wossen',
    role: 'Student',
    text: "Learning Amharic with Yohannes has been an incredible experience. He’s kind, patient, and genuinely excited to see me improve. His encouragement keeps me motivated, and his flexibility with scheduling makes lessons easy to stick with. In just a few weeks, I went from not being able to read or write anything to forming sentences. Highly recommend to anyone starting, or growing in their Amharic journey!"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Select Course',
    description: 'Choose from Survival, Conversational, or Specialized courses.',
  },
  {
    id: 2,
    title: 'Enroll',
    description: 'Contact us to sign up for your chosen path.',
  },
  {
    id: 3,
    title: 'Learn',
    description: 'Engage in fun, effective lessons with expert instructors.',
  },
  {
    id: 4,
    title: 'Master',
    description: 'Speak Amharic with confidence and connect with the culture.',
  },
];