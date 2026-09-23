import React, { useState } from 'react';
import { X, Check, Sparkles, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { CEFRLevel } from '../types';

interface FreeSignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  language: 'en' | 'vi';
}

export const FreeSignUpModal: React.FC<FreeSignUpModalProps> = ({
  isOpen,
  onClose,
  initialEmail = '',
  language,
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState('');
  const [targetGoal, setTargetGoal] = useState<'ielts' | 'toeic' | 'work' | 'general'>('ielts');
  const [currentLevel, setCurrentLevel] = useState<CEFRLevel>('B1');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Welcome to EZVOCA, {name || 'Learner'}!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your 100% free account has been activated for <strong className="text-blue-600">{email || 'your email'}</strong>. Your AI Text Extractor, flashcards, and diagnostic progress tracking are immediately ready.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-1 text-left">
              <div className="flex justify-between">
                <span>Target Track:</span>
                <span className="font-semibold uppercase text-blue-600">{targetGoal}</span>
              </div>
              <div className="flex justify-between">
                <span>Calibrated CEFR:</span>
                <span className="font-semibold text-teal-600">{currentLevel} Level</span>
              </div>
              <div className="flex justify-between">
                <span>Subscription Status:</span>
                <span className="font-semibold text-emerald-600">100% Free Forever</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              Start Exploring Your Dashboard
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900">
                EZVOCA Free Registration
              </span>
            </div>

            <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
              {language === 'en' ? 'Create Your 100% Free Account' : 'Tạo tài khoản học miễn phí 100%'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              No credit card required. No hidden paywalls. Instant access to all AI tools.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Minh Tran"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={targetGoal}
                    onChange={(e) => setTargetGoal(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 bg-white"
                  >
                    <option value="ielts">IELTS Academic</option>
                    <option value="toeic">TOEIC Reading</option>
                    <option value="work">Work &amp; Tech Reading</option>
                    <option value="general">Everyday Fluency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Level
                  </label>
                  <select
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 bg-white"
                  >
                    <option value="A1">A1 – Beginner</option>
                    <option value="A2">A2 – Elementary</option>
                    <option value="B1">B1 – Intermediate</option>
                    <option value="B2">B2 – Upper Intermediate</option>
                    <option value="C1">C1 – Advanced</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Complete Free Sign-Up</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>We never sell data or send spam. Free forever.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
