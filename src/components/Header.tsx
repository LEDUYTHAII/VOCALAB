import React, { useState } from 'react';
import { Menu, X, BookOpen, Sparkles, Globe, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenSignUp: () => void;
  onOpenBrandSpecs: () => void;
  language: 'en' | 'vi';
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSignUp,
  onOpenBrandSpecs,
  language,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 group text-slate-900 font-display font-extrabold text-2xl tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <span>
            EZ<span className="text-blue-600">VOCA</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 mb-2"></span>
        </a>

        {/* Zone 2: 4-6 Clean Text Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#extractor-demo"
            className="hover:text-blue-600 transition-colors py-1"
          >
            {language === 'en' ? 'AI Extractor' : 'Trích xuất từ AI'}
          </a>
          <a
            href="#words-of-the-day"
            className="hover:text-blue-600 transition-colors py-1"
          >
            {language === 'en' ? 'Words of the Day' : 'Từ vựng mỗi ngày'}
          </a>
          <a
            href="#features"
            className="hover:text-blue-600 transition-colors py-1"
          >
            {language === 'en' ? 'Features' : 'Tính năng'}
          </a>
          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition-colors py-1"
          >
            {language === 'en' ? 'How It Works' : 'Quy trình học'}
          </a>
          <a
            href="#progress-tracker"
            className="hover:text-blue-600 transition-colors py-1"
          >
            {language === 'en' ? 'Progress' : 'Tiến độ'}
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 transition-colors py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Actions & Language Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title="Toggle English / Tiếng Việt"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={onOpenBrandSpecs}
            className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
          >
            {language === 'en' ? 'Sitemap & Specs' : 'Sitemap & Đặc tả'}
          </button>

          <button
            onClick={onOpenSignUp}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/20 active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <span>{language === 'en' ? 'Start Learning Free' : 'Học miễn phí ngay'}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleLanguage}
            className="p-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-md"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2.5 text-base font-medium text-slate-700">
            <a
              href="#extractor-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {language === 'en' ? 'AI Text Extractor' : 'Trích xuất từ AI'}
            </a>
            <a
              href="#words-of-the-day"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {language === 'en' ? 'Words of the Day' : 'Từ vựng mỗi ngày'}
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {language === 'en' ? 'Core Features' : 'Tính năng cốt lõi'}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {language === 'en' ? 'How It Works' : 'Quy trình học'}
            </a>
            <a
              href="#progress-tracker"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {language === 'en' ? 'Progress Tracker' : 'Theo dõi tiến độ'}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandSpecs();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              {language === 'en' ? 'View Recommended Sitemap & Specs' : 'Xem Sitemap & Đặc tả'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignUp();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
            >
              {language === 'en' ? 'Start Learning for Free' : 'Đăng ký học miễn phí'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
