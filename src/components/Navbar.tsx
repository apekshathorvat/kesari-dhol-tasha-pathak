import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { PATHAK_CONFIG } from '../config/pathakConfig';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'मुख्यपृष्ठ', href: '#home' },
    { name: 'आमच्याबद्दल', href: '#about' },
    { name: 'गॅलरी', href: '#gallery' },
    { name: 'संपर्क', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        isScrolled
          ? 'shadow-md border-orange-200/80 py-2.5'
          : 'border-orange-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Left Zone: Original Kesari Logo & Title */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            {/* The Official Kesari Pathak Logo - Exact Image Used */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-orange-200 bg-white p-0.5 shadow-xs group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <img
                src={PATHAK_CONFIG.logoPath}
                alt="केसरी ढोल ताशा पथक, इचलकरंजी अधिकृत लोगो"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-tight text-[#8B2500] group-hover:text-orange-600 transition-colors">
                  {PATHAK_CONFIG.pathakName}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                  {PATHAK_CONFIG.locationBadge}
                </span>
              </div>
              <span className="text-[11px] text-stone-500 hidden md:block">
                {PATHAK_CONFIG.historicNote}
              </span>
            </div>
          </a>

          {/* Center Zone: Marathi Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-orange-600 transition-colors py-1 border-b-2 border-transparent hover:border-orange-500 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Zone: Primary Contact CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Contact CTA Button */}
            <a
              href="#contact"
              className="px-4 sm:px-5 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-[#8B2500] active:bg-[#691B00] rounded-lg shadow-sm shadow-orange-500/20 transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 hidden sm:inline" />
              <span>संपर्क करा</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors border border-stone-200"
              aria-label="मेनू उघडा किंवा बंद करा"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-orange-100 px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-stone-800 hover:text-orange-600 hover:bg-orange-50 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-orange-600 text-white text-sm font-bold shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>संपर्क करा</span>
              </a>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full text-center py-2 text-xs text-stone-600 hover:text-orange-600 underline"
              >
                वेबसाइट माहिती व फोटो संपादन मार्गदर्शक
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
