import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Phone, Heart } from 'lucide-react';
import { PATHAK_CONFIG } from '../config/pathakConfig';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-stone-700 pt-16 pb-12 border-t-4 border-orange-500 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Salute Bar */}
        <div className="pb-10 border-b border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* The Official Kesari Pathak Logo in Footer */}
            <div className="w-14 h-14 rounded-xl bg-white border border-orange-200 p-1 shadow-xs flex items-center justify-center shrink-0">
              <img
                src={PATHAK_CONFIG.logoPath}
                alt="केसरी ढोल ताशा पथक लोगो"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🚩</span>
                <h3 className="text-2xl font-bold font-display text-[#8B2500]">
                  {PATHAK_CONFIG.pathakName}
                </h3>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  {PATHAK_CONFIG.locationBadge}
                </span>
              </div>
              <p className="text-orange-600 font-bold text-sm mt-0.5">
                &ldquo;{PATHAK_CONFIG.slogan}&rdquo;
              </p>
            </div>
          </div>

          {/* Social Action Circles */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${PATHAK_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                PATHAK_CONFIG.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-orange-50 hover:bg-emerald-600 text-[#8B2500] hover:text-white transition-all shadow-xs border border-orange-200"
              title="व्हॉट्सॲप"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href={PATHAK_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-orange-50 hover:bg-pink-600 text-[#8B2500] hover:text-white transition-all shadow-xs border border-orange-200"
              title="इन्स्टाग्राम"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href={`tel:${PATHAK_CONFIG.contact.phone1}`}
              className="p-3 rounded-xl bg-orange-50 hover:bg-[#8B2500] text-[#8B2500] hover:text-white transition-all shadow-xs border border-orange-200"
              title="फोन करा"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-orange-600 hover:bg-[#8B2500] text-white transition-all shadow-xs ml-2"
              title="वर जा"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-orange-100 text-sm">
          
          {/* Col 1: About short */}
          <div className="md:col-span-2">
            <h4 className="text-[#8B2500] font-bold text-base mb-3 font-display">
              {PATHAK_CONFIG.historicNote}
            </h4>
            <p className="text-stone-600 leading-relaxed max-w-md text-xs sm:text-sm">
              केसरी ढोल ताशा पथक, इचलकरंजी हे गणेशोत्सव, शिवजयंती आणि महाराष्ट्राच्या पवित्र सणांमध्ये शिस्तबद्ध, ऊर्जावान आणि पारंपारिक वादनासाठी ओळखले जाते. महाराष्ट्राची संस्कृती आणि तरुणाईची एकजूट हाच आमचा ध्यास.
            </p>
            <div className="mt-3 text-xs text-orange-600 font-bold">
              ॥ गणपती बाप्पा मोरया, मंगलमूर्ती मोरया ॥
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-[#8B2500] font-bold text-base mb-3 font-display">
              द्रुत दुवे (Quick Links)
            </h4>
            <ul className="space-y-2 text-stone-600 font-medium">
              <li>
                <a href="#home" className="hover:text-orange-600 transition-colors">
                  मुख्यपृष्ठ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-600 transition-colors">
                  आमच्याबद्दल
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-600 transition-colors">
                  गॅलरी
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600 transition-colors">
                  संपर्क
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Website Management Help */}
          <div>
            <h4 className="text-[#8B2500] font-bold text-base mb-3 font-display">
              माहिती व फोटो संपादन
            </h4>
            <p className="text-xs text-stone-600 mb-3 leading-relaxed">
              स्वतःचे फोटो, व्हिडिओ, फोन नंबर व माहिती सहज बदलण्यासाठी खास मार्गदर्शक उपलब्ध आहे.
            </p>
            <button
              type="button"
              onClick={onOpenGuide}
              className="text-xs px-3.5 py-2 bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white font-bold rounded-lg border border-orange-300 transition-colors"
            >
              संपादन व प्रकाशन मार्गदर्शक उघडा
            </button>
          </div>

        </div>

        {/* Bottom Copyright - Exact Requested Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-4">
          <p className="font-bold text-[#8B2500]">
            © केसरी ढोल ताशा पथक. सर्व हक्क राखीव.
          </p>
          <p className="flex items-center gap-1.5 text-stone-500">
            <span>इचलकरंजी (जि. कोल्हापूर) च्या संस्कृतीस समर्पित</span>
            <Heart className="w-3.5 h-3.5 text-orange-600 fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};
