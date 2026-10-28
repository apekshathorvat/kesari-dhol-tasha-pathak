import React from 'react';
import { ShieldCheck, HeartHandshake, Flame, Sparkles, Edit3, Award } from 'lucide-react';
import { PATHAK_CONFIG } from '../config/pathakConfig';

interface AboutProps {
  onOpenGuide: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenGuide }) => {
  const pillarIcons = [
    <Flame className="w-5 h-5 text-orange-600" key="culture" />,
    <Sparkles className="w-5 h-5 text-orange-600" key="tradition" />,
    <ShieldCheck className="w-5 h-5 text-orange-600" key="discipline" />,
    <HeartHandshake className="w-5 h-5 text-orange-600" key="ganeshotsav" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2 tracking-wider">
            <span>{PATHAK_CONFIG.about.badge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B2500]">इचलकरंजी</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#8B2500] tracking-tight mb-4">
            {PATHAK_CONFIG.about.title}
          </h2>

          <p className="text-lg text-orange-600 font-bold mb-3">
            {PATHAK_CONFIG.about.mainHeading}
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-[#8B2500] mx-auto rounded-full" />
        </div>

        {/* Narrative & 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Cultural Philosophy (Col 7) */}
          <div className="lg:col-span-7 bg-stone-50/70 p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-bold text-[#8B2500]">
                    इचलकरंजीची शान व वादन वारसा
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="flex items-center gap-1.5 text-xs text-orange-700 hover:text-white font-semibold bg-orange-100/80 hover:bg-orange-600 px-3 py-1.5 rounded-lg border border-orange-300 transition-colors"
                  title="हा इतिहास कसा बदलावा?"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>इतिहास संपादित करा</span>
                </button>
              </div>

              <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
                <p>{PATHAK_CONFIG.about.descriptionP1}</p>
                <p>{PATHAK_CONFIG.about.descriptionP2}</p>
              </div>

              {/* Quote Block with Motto */}
              <div className="mt-8 p-5 bg-white rounded-xl border border-orange-200 shadow-xs">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                  पथकाचे ब्रीद
                </div>
                <blockquote className="font-display text-lg sm:text-xl text-[#8B2500] font-bold">
                  &ldquo;स्वयमेव मृगेन्द्रता — स्वतःच्या पराक्रमाने आणि शिस्तीने मिळवलेले स्थान!&rdquo;
                </blockquote>
                <p className="mt-2 text-xs text-stone-600">
                  महाराष्ट्राची संस्कृती, ढोल-ताशाची पवित्र लय आणि बाप्पाच्या चरणी अखंड सेवा.
                </p>
              </div>
            </div>

            {/* Beginner-friendly notice */}
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>📌 हा इतिहास तुम्ही `src/config/pathakConfig.ts` मध्ये कधीही बदलू शकता.</span>
              <a href="#contact" className="text-orange-600 hover:underline font-bold">
                संपर्क साधा →
              </a>
            </div>
          </div>

          {/* 4 Core Required Pillars (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[#8B2500] mb-1 px-1">
              पथकाची मूलभूत उद्दिष्टे व वैशिष्ट्ये:
            </h3>

            {PATHAK_CONFIG.about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-white p-5 rounded-2xl border border-stone-200 hover:border-orange-400 hover:shadow-sm transition-all shadow-xs group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#8B2500] group-hover:text-orange-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
