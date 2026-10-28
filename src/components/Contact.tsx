import React, { useState } from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle, ChevronDown } from 'lucide-react';
import { PATHAK_CONFIG } from '../config/pathakConfig';

interface ContactProps {
  onOpenGuide: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenGuide }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roleInterest: 'वादन शिकणे (नवीन वादक)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const whatsappDirectUrl1 = `https://wa.me/${PATHAK_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    PATHAK_CONFIG.contact.whatsappMessage
  )}`;

  const whatsappDirectUrl2 = `https://wa.me/${PATHAK_CONFIG.contact.whatsappRaw2}?text=${encodeURIComponent(
    PATHAK_CONFIG.contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2 tracking-wider">
            <span>केसरी परिवार संवाद</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B2500]">इचलकरंजी</span>
          </div>

          {/* Title in proper Marathi words */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#8B2500] tracking-tight mb-4">
            आमच्याशी संपर्क साधा
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            पथकात सहभागी होण्यासाठी किंवा आपल्या उत्सवामध्ये वादनाचे निमंत्रण देण्यासाठी आजच संपर्क करा
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-[#8B2500] mx-auto rounded-full mt-4" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact Channels (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold font-display text-[#8B2500] mb-6 pb-3 border-b border-stone-100 flex items-center justify-between">
                <span>थेट संपर्क माहिती</span>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  इचलकरंजी
                </span>
              </h3>

              <div className="space-y-6">
                
                {/* Contact Number 1 */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/80">
                  <div className="w-11 h-11 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-orange-800 uppercase tracking-wide block">
                      संपर्क क्रमांक १
                    </span>
                    <a
                      href={`tel:${PATHAK_CONFIG.contact.phone1}`}
                      className="text-lg sm:text-xl font-extrabold text-[#8B2500] hover:text-orange-600 transition-colors block mt-0.5"
                    >
                      {PATHAK_CONFIG.contact.phone1Display}
                    </a>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={whatsappDirectUrl1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>व्हॉट्सॲप चॅट</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Number 2 */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/80">
                  <div className="w-11 h-11 rounded-xl bg-[#8B2500] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-orange-800 uppercase tracking-wide block">
                      संपर्क क्रमांक २
                    </span>
                    <a
                      href={`tel:${PATHAK_CONFIG.contact.phone2}`}
                      className="text-lg sm:text-xl font-extrabold text-[#8B2500] hover:text-orange-600 transition-colors block mt-0.5"
                    >
                      {PATHAK_CONFIG.contact.phone2Display}
                    </a>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={whatsappDirectUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>व्हॉट्सॲप चॅट</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location: Kolhapur / Ichalkaranji */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-11 h-11 rounded-xl bg-stone-200 flex items-center justify-center text-stone-700 shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wide block">
                      पत्ता व सराव मैदान
                    </span>
                    <span className="text-base font-bold text-stone-900 block mt-0.5">
                      {PATHAK_CONFIG.contact.location}
                    </span>
                    <span className="text-xs text-stone-600 block mt-0.5">
                      {PATHAK_CONFIG.contact.locationDetails}
                    </span>
                  </div>
                </div>

              </div>

              {/* Instant Social Action Buttons (WhatsApp & Instagram) */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-3">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                  त्वरित संपर्क माध्यमे:
                </span>

                {/* WhatsApp Button 1 */}
                <a
                  href={whatsappDirectUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>व्हॉट्सॲपवर संपर्क करा ({PATHAK_CONFIG.contact.phone1})</span>
                </a>

                {/* Instagram Profile Button */}
                <a
                  href={PATHAK_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:opacity-95 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>इन्स्टाग्रामवर फॉलो करा ({PATHAK_CONFIG.contact.instagramHandle})</span>
                </a>
              </div>
            </div>

            {/* Cultural Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#8B2500] to-orange-600 text-white flex items-center justify-between shadow-xs">
              <div>
                <h4 className="font-display font-bold text-lg">
                  केसरी वादक व्हा!
                </h4>
                <p className="text-xs text-orange-100 mt-0.5">
                  कोल्हापूर जिल्ह्यातील पहिल्या मानाच्या पथकात सामील व्हा. विनामूल्य मार्गदर्शन.
                </p>
              </div>
              <span className="text-3xl font-bold">🚩</span>
            </div>

          </div>

          {/* Right Column: Inquiry Form & FAQs (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Interactive Form */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#8B2500] mb-2">
                ऑनलाइन चौकशी व सहभाग फॉर्म
              </h3>
              <p className="text-stone-600 text-sm mb-6">
                खालील माहिती भरा, आम्ही लवकरच आपल्याशी संपर्क करू.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-orange-50 rounded-2xl border border-orange-200 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2 font-display">
                    धन्यवाद, {formData.name}!
                  </h4>
                  <p className="text-stone-700 text-sm max-w-md mx-auto mb-6">
                    आपला संदेश केसरी ढोल ताशा पथक, इचलकरंजी यांच्याकडे यशस्वीरीत्या पोहोचला आहे. आम्ही लवकरच <strong>{formData.phone}</strong> वर संपर्क करू.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        roleInterest: 'वादन शिकणे (नवीन वादक)',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-[#8B2500] text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    नवीन संदेश पाठवा
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      आपले पूर्ण नाव <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. राहुल पाटील"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm text-stone-900 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        मोबाईल क्रमांक (WhatsApp) <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="उदा. 75882 28543"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm text-stone-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        सहभागाचा उद्देश <span className="text-orange-600">*</span>
                      </label>
                      <select
                        value={formData.roleInterest}
                        onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm text-stone-900 bg-white transition-all"
                      >
                        <option value="वादन शिकणे (नवीन वादक)">वादन शिकणे (नवीन वादक)</option>
                        <option value="ध्वज पथकात सहभाग">ध्वज पथकात सहभाग (भगवा ध्वज)</option>
                        <option value="उत्सवासाठी वादन आमंत्रण">उत्सवासाठी वादन आमंत्रण (Booking)</option>
                        <option value="सांस्कृतिक कार्यक्रम">सांस्कृतिक कार्यक्रम</option>
                        <option value="इतर विचारणा">इतर विचारणा</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      आपला संदेश / विचारणा (पर्यायी)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="आपला संदेश येथे लिहा..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-sm text-stone-900 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-[#8B2500] active:bg-[#691B00] text-white font-bold text-base shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>माहिती पाठवा (Submit Inquiry)</span>
                  </button>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
              <h4 className="text-base font-bold text-[#8B2500] mb-4 flex items-center gap-2">
                <span>वारंवार विचारले जाणारे प्रश्न (FAQ)</span>
              </h4>

              <div className="space-y-3">
                {PATHAK_CONFIG.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-4 py-3 text-left font-bold text-sm text-stone-800 flex items-center justify-between gap-2 hover:text-orange-600 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-orange-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3.5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
