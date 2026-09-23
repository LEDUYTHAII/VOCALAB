import React from 'react';
import { BookOpen, Globe, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSignUp: () => void;
  onOpenBrandSpecs: () => void;
  language: 'en' | 'vi';
  onToggleLanguage: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSignUp,
  onOpenBrandSpecs,
  language,
  onToggleLanguage,
}) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 group text-slate-900 font-display font-extrabold text-2xl tracking-tight"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
                <BookOpen className="w-4 h-4" />
              </div>
              <span>
                EZ<span className="text-blue-600">VOCA</span>
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 mb-2"></span>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              The 100% free AI-powered language learning platform helping English learners extract targeted vocabulary by CEFR level, study with smart flashcards, and master reading comprehension without paywalls.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-600 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@ezvoca.app"
                className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Platform Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Platform Tools
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#extractor-demo" className="hover:text-blue-600 transition-colors">
                  AI Text Extractor
                </a>
              </li>
              <li>
                <a href="#words-of-the-day" className="hover:text-blue-600 transition-colors">
                  Words of the Day
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  Spaced Flashcards
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  Vocabulary Mini-Games
                </a>
              </li>
              <li>
                <a href="#progress-tracker" className="hover:text-blue-600 transition-colors">
                  CEFR Progress Tracker
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Learning & CEFR Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Learning Guides
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <button
                  onClick={onOpenBrandSpecs}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Recommended Sitemap
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBrandSpecs}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  CEFR A1–C2 Framework
                </button>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  IELTS Academic Reading
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 transition-colors">
                  TOEIC Reading Mastery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBrandSpecs}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Brand Positioning Specs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Language */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Language &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  Terms of Service (Free)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  Academic Non-Commercial
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onToggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Language: {language === 'en' ? 'English (Global)' : 'Tiếng Việt (Vietnam)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} EZVOCA. 100% Free AI Language Learning Platform. Vietnam &amp; Global.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBrandSpecs}
              className="hover:text-blue-600 transition-colors"
            >
              Brand &amp; SEO Specs
            </button>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-500">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for English learners
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
