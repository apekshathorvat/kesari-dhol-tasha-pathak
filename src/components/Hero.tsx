import React from 'react';
import { Camera, Video } from 'lucide-react';
import { PATHAK_CONFIG } from '../config/pathakConfig';

interface HeroProps {
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Decorative Traditional Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Prominent Official Logo on one side and Headline + Description on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Main Content Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Traditional Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-[#8B2500] mb-3 tracking-wide">
              <span>॥ श्री गणेशाय नमः ॥</span>
              <span aria-hidden="true">·</span>
              <span className="text-orange-600">{PATHAK_CONFIG.historicNote}</span>
            </div>

            {/* Main Title: केसरी ढोल ताशा पथक */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-[#8B2500] tracking-tight leading-[1.15] mb-3">
              {PATHAK_CONFIG.pathakName}
            </h1>

            {/* City / Location Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-sm sm:text-base font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                📍 {PATHAK_CONFIG.locationBadge}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-600">
                {PATHAK_CONFIG.sanskritMotto}
              </span>
            </div>

            {/* Slogan with proper Marathi spelling: नाद केसरीचा, अभिमान महाराष्ट्राचा! */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-orange-600 mb-4 tracking-tight">
              &ldquo;नाद केसरीचा, अभिमान महाराष्ट्राचा!&rdquo;
            </div>

            {/* Description: परंपरा, शिस्त, एकजूट आणि महाराष्ट्राच्या संस्कृतीचा अभिमान! */}
            <p className="text-lg sm:text-xl font-bold text-stone-800 leading-snug mb-3">
              {PATHAK_CONFIG.heroDescription}
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8 max-w-2xl">
              {PATHAK_CONFIG.welcomeText}
            </p>

            {/* Two Required Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Button 1: आमचे फोटो पहा */}
              <a
                href="#gallery"
                className="px-6 py-3.5 bg-orange-600 hover:bg-[#8B2500] active:bg-[#691B00] text-white font-bold text-base rounded-xl shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2.5"
              >
                <Camera className="w-5 h-5" />
                <span>आमचे फोटो पहा</span>
              </a>

              {/* Button 2: आमचे व्हिडिओ पहा */}
              <a
                href="#gallery-videos"
                className="px-6 py-3.5 bg-white hover:bg-orange-50 text-[#8B2500] hover:text-orange-600 font-bold text-base rounded-xl border-2 border-orange-300 hover:border-orange-500 shadow-xs transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2.5"
              >
                <Video className="w-5 h-5 text-orange-600" />
                <span>आमचे व्हिडिओ पहा</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Display of the Official Kesari Pathak Logo (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200/90 shadow-xl flex flex-col items-center text-center">
              
              {/* Subtle Sunburst Aura */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-transparent to-amber-50/50 rounded-3xl -z-10" />

              {/* Official Logo Display - Exact Uploaded Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 p-2 flex items-center justify-center mb-4 transition-transform hover:scale-102">
                <img
                  src={PATHAK_CONFIG.logoPath}
                  alt="केसरी ढोल ताशा पथक, इचलकरंजी अधिकृत लोगो"
                  className="w-full h-full object-contain drop-shadow-md"
                  loading="eager"
                />
              </div>

              {/* Sub-Card Details */}
              <div className="w-full pt-4 border-t border-orange-100 flex flex-col items-center">
                <span className="text-base font-bold font-display text-[#8B2500]">
                  केसरी ढोल ताशा पथक
                </span>
                <span className="text-xs font-semibold text-orange-600 mt-0.5">
                  इचलकरंजी (जि. कोल्हापूर)
                </span>
                <span className="text-[11px] text-stone-500 mt-1">
                  स्थापनेपासून अविरत सेवा आणि संस्कृतीचे जतन
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between w-full text-xs font-semibold text-stone-600 px-2 pt-3 border-t border-stone-100">
                <span>🚩 भगवा ध्वज</span>
                <span className="text-orange-600">🥁 ढोल-ताशा नाद</span>
                <span>🙏 बाप्पा आगमन</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pathak Key Highlights / Stats Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {PATHAK_CONFIG.about.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-3 rounded-xl bg-orange-50/50 border border-orange-100/60">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8B2500] font-display tabular-nums">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-stone-700 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
