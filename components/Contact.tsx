import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

import { COURSES } from '../constants'; // Import COURSES

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
       {/* Background Image Accent */}
       <div 
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none bg-contain bg-no-repeat bg-bottom-left"
        style={{ backgroundImage: 'url(/images/ethiopia-buna.png)' }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Loved by <span className="inline-block bg-brand-pink px-4 py-1 rounded-full text-white border border-black transform rotate-1">learners,</span> <br />
                supported by experts.
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions? We are here to help you start your journey.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
                    <div className="bg-brand-lime p-3 rounded-full border border-black">
                        <Mail className="text-black w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold">Email Us</h4>
                        <p className="text-gray-500 text-sm">amharic@chiraro.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
                    <div className="bg-brand-pink p-3 rounded-full border border-black">
                        <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold">Call Us</h4>
                        <p className="text-gray-500 text-sm">+251 901 116 044</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
                     <div className="bg-brand-blue p-3 rounded-full border border-black">
                        <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold">Visit Us</h4>
                        <p className="text-gray-500 text-sm">Gotera, Addis Ababa, Ethiopia</p>
                    </div>
                </div>
            </div>
          </div>

          <form action="https://formsubmit.co/chebses2014@gmail.com" method="POST" className="bg-white p-8 rounded-[2rem] border border-black shadow-[10px_10px_0px_0px_#000]">
            
             {/* FormSubmit Configuration */}
             <input type="hidden" name="_subject" value="New Submission from Chiraro Website" />
             <input type="hidden" name="_captcha" value="false" />
             {/* <input type="hidden" name="_next" value="https://your-domain.com/thanks.html" />  -- Optional: Add thank you page later */}

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-black mb-2">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Enter your full name" 
                        className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-black mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Your email address" 
                        className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-black mb-2">Subject</label>
                    <select 
                        name="subject"
                        className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        {COURSES.map(course => (
                            <option key={course.id} value={`Course Inquiry: ${course.title}`}>
                                {course.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-black mb-2">Message</label>
                    <textarea 
                        name="message"
                        required
                        rows={4} 
                        placeholder="How can we help you?" 
                        className="w-full bg-brand-bg border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-lime hover:text-black transition-all flex items-center justify-center gap-2 border border-transparent hover:border-black"
                >
                    <Send className="w-5 h-5" /> Send Message
                </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;