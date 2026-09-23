import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WordsOfTheDay } from './components/WordsOfTheDay';
import { CoreFeatures } from './components/CoreFeatures';
import { HowItWorks } from './components/HowItWorks';
import { DashboardShowcase } from './components/DashboardShowcase';
import { WhyEzVoca } from './components/WhyEzVoca';
import { SocialProof } from './components/SocialProof';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FreeSignUpModal } from './components/FreeSignUpModal';
import { InteractiveReadingTestModal } from './components/InteractiveReadingTestModal';
import { BrandSpecsModal } from './components/BrandSpecsModal';

export default function App() {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [brandSpecsOpen, setBrandSpecsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

  const handleOpenSignUp = (initialEmail: string = '') => {
    setSignUpEmail(initialEmail);
    setSignUpOpen(true);
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Top Navigation Bar (3-Zone Contract) */}
      <Header
        onOpenSignUp={() => handleOpenSignUp()}
        onOpenBrandSpecs={() => setBrandSpecsOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Live Interactive AI Extractor Sandbox */}
        <HeroSection
          onOpenSignUp={() => handleOpenSignUp()}
          language={language}
        />

        {/* 2. Featured Section - Words of the Day */}
        <WordsOfTheDay
          onOpenSignUp={() => handleOpenSignUp()}
          language={language}
        />

        {/* 3. Core Features (Platform Tools with Interactive Flashcards & Articles) */}
        <CoreFeatures
          onOpenSignUp={() => handleOpenSignUp()}
          onOpenTestModal={() => setTestModalOpen(true)}
          language={language}
        />

        {/* 4. How It Works (Step-by-Step Learning Flow) */}
        <HowItWorks
          onOpenSignUp={() => handleOpenSignUp()}
          language={language}
        />

        {/* 5. Learning Dashboard & Progress Showcase */}
        <DashboardShowcase
          onOpenSignUp={() => handleOpenSignUp()}
          language={language}
        />

        {/* 6. Why EZVOCA (100% Free Forever & Comparison Table) */}
        <WhyEzVoca
          onOpenSignUp={() => handleOpenSignUp()}
          language={language}
        />

        {/* 7. Social Proof & Global Learner Milestones */}
        <SocialProof
          language={language}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection
          language={language}
        />

        {/* 9. Final High-Converting Call to Action */}
        <FinalCta
          onOpenSignUp={handleOpenSignUp}
          language={language}
        />
      </main>

      {/* 10. Footer with Sitemap, Legal, & Language Selector */}
      <Footer
        onOpenSignUp={() => handleOpenSignUp()}
        onOpenBrandSpecs={() => setBrandSpecsOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Interactive Modals */}
      <FreeSignUpModal
        isOpen={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        initialEmail={signUpEmail}
        language={language}
      />

      <InteractiveReadingTestModal
        isOpen={testModalOpen}
        onClose={() => setTestModalOpen(false)}
        onOpenSignUp={() => handleOpenSignUp()}
      />

      <BrandSpecsModal
        isOpen={brandSpecsOpen}
        onClose={() => setBrandSpecsOpen(false)}
      />
    </div>
  );
}
