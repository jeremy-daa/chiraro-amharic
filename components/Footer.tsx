import React from 'react';
import { Facebook, Instagram, Phone, Heart, Music2, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const handlePlaceholderClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    alert(`${name} link clicked`);
  };

  return (
    <footer className="bg-brand-bg pt-12 pb-6 relative overflow-hidden">
        {/* Background Image Accent */}
       <div 
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat bg-bottom-right"
        style={{ backgroundImage: 'url(/images/buna-seed.png)' }}
      ></div>

        {/* Main Call to Action Section (Replaces Newsletter) */}
        <div className="container mx-auto px-6 mb-24 relative z-20">
            <div className="bg-black rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-[12px_12px_0px_0px_#D4F853] border-2 border-brand-lime flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Background Accents */}
                <div 
                    className="absolute top-0 right-0 w-[500px] h-full opacity-20 pointer-events-none bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: 'url(/images/mursi-girl.png)' }}
                ></div>
                
                 <div className="md:w-1/2 relative z-10 text-left">
                    <span className="inline-block bg-brand-lime text-black font-bold px-4 py-1 rounded-full text-sm mb-4 border border-white">
                        Limited Time Offer
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Speak Like a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-blue">Local.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Join over 150+ students connecting with their heritage. Book your free assessment today and start your journey.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#courses" className="bg-brand-lime text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all border border-transparent shadow-[4px_4px_0px_0px_white]">
                            Start Learning
                        </a>
                        <a href="https://wa.me/251901116044" className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-pink hover:border-brand-pink transition-all">
                            Chat with Us
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 relative z-10 flex justify-center md:justify-end mt-8 md:mt-0">
                     <div className="relative">
                        <div className="absolute inset-0 bg-brand-blue rounded-[2.5rem] rotate-6 opacity-50 blur-sm"></div>
                        <img 
                            src="/images/adey-abeba.png" 
                            alt="Student" 
                            className="relative w-full max-w-sm rounded-[2.5rem] border-4 border-white object-cover shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                        />
                         {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-brand-pink text-white p-4 rounded-2xl border-2 border-black rotate-12 shadow-lg">
                            <p className="font-bold text-lg">10% OFF</p>
                            <p className="text-xs">First Month</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
             <a href="#" className="block mb-6" onClick={(e) => e.preventDefault()}>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-ethiopic font-bold text-brand-lime text-xl border border-black">
                        ጭ
                    </div>
                    <span className="text-2xl font-bold text-black">Chiraro</span>
                </div>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Chiraro Amharic is a premier language school dedicated to keeping the Amharic language alive and accessible globally.
            </p>
            <div className="flex gap-4">
                <a href="https://www.tiktok.com/@chiraro.amharic?_t=ZM-8vGEea4ZJw5&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all hover:-translate-y-1">
                    {/* TikTok SVG Icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/share/15EH4mRXQR/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/chiraroamharic?igsh=MTVicnhzbWFva2JreQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/251901116044" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-green-500 hover:text-white transition-all hover:-translate-y-1">
                    {/* WhatsApp SVG Icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-600">
                <li><a href="#home" className="hover:text-brand-blue transition-colors font-medium">Home</a></li>
                <li><a href="#about" className="hover:text-brand-blue transition-colors font-medium">About Us</a></li>
                <li><a href="#courses" className="hover:text-brand-blue transition-colors font-medium">Courses</a></li>
                <li><a href="#contact" className="hover:text-brand-blue transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-black font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                    <span className="font-bold text-black">Email:</span> 
                    <a href="mailto:amharic@chiraro.com" className="hover:text-brand-blue hover:underline">amharic@chiraro.com</a>
                </li>
                <li className="flex items-start gap-3">
                    <span className="font-bold text-black">Phone:</span> 
                    <a href="tel:+251901116044" className="hover:text-brand-blue hover:underline">+251 901 116 044</a>
                </li>
                <li className="flex items-start gap-3">
                    <span className="font-bold text-black">Address:</span> 
                    <span>Gotera, Addis Ababa, Ethiopia</span>
                </li>
            </ul>
          </div>

          <div>
             {/* Empty column or additional info if needed, for now keeping layout balanced */}
              <h4 className="text-black font-bold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-brand-blue transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors font-medium">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2026 Chiraro Amharic. All rights reserved.</p>
            <p className="text-gray-600 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-brand-pink fill-current animate-pulse" /> in Addis Ababa
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;