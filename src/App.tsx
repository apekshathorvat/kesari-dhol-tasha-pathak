/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditGuideModal } from './components/EditGuideModal';
import { HelpCircle } from 'lucide-react';

export default function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-800 antialiased font-devanagari">
      {/* 1. Sticky Navigation Bar with Official Kesari Logo */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Homepage / Hero Section */}
        <Hero onOpenGuide={() => setIsGuideOpen(true)} />

        {/* 3. आमच्याबद्दल (About Us) */}
        <About onOpenGuide={() => setIsGuideOpen(true)} />

        {/* 4. गॅलरी (Unified Gallery - Photos & Videos in one place) */}
        <Gallery onOpenGuide={() => setIsGuideOpen(true)} />

        {/* 5. आमच्याशी संपर्क साधा (Contact Us) */}
        <Contact onOpenGuide={() => setIsGuideOpen(true)} />
      </main>

      {/* 7. Footer (White background, Dark Maroon text, Orange highlights) */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* 8. Beginner Friendly Edit & Publish Guide Modal */}
      <EditGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />

      {/* Floating Beginner Helper Button */}
      <div className="fixed bottom-5 left-5 z-40 hidden md:block">
        <button
          onClick={() => setIsGuideOpen(true)}
          type="button"
          className="flex items-center gap-2 px-3.5 py-2 bg-[#8B2500] hover:bg-orange-600 text-white rounded-full text-xs font-bold shadow-lg transition-all hover:scale-105 border border-orange-300"
          title="वेबसाइट संपादन मार्गदर्शक उघडा"
        >
          <HelpCircle className="w-4 h-4 text-orange-200" />
          <span>वेबसाइट संपादन मार्गदर्शक (Edit Guide)</span>
        </button>
      </div>
    </div>
  );
}
