import React, { useState } from 'react';
import {
  FileText,
  Sliders,
  Sparkles,
  Trophy,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  BookMarked,
  BrainCircuit,
  Zap,
} from 'lucide-react';

interface HowItWorksProps {
  onOpenSignUp: () => void;
  language: 'en' | 'vi';
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenSignUp, language }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: '01',
      title: 'Paste Text or Pick an Article',
      vietnameseTitle: 'Dán bài đọc hoặc chọn bài viết gợi ý',
      description:
        'Copy-paste any article, essay, or academic paper from the web, or choose from EZVOCA’s curated AI library of articles filtered by your personal interests.',
      icon: FileText,
      color: 'blue',
      badge: 'Input Phase',
      visualPreview: {
        headline: 'Selected Reading: The Future of Quantum Computing',
        meta: 'MIT Technology Review · 6 min read · 820 Lexile',
        snippet:
          '"Quantum processors execute probabilistic algorithms capable of synthesizing complex molecular structures exponentially faster than classical supercomputers..."',
      },
    },
    {
      stepNumber: '02',
      title: 'Set Target CEFR Level & Extract',
      vietnameseTitle: 'Chọn cấp độ CEFR và trích xuất từ vựng',
      description:
        'Specify your target level (A1 to C2). EZVOCA filters out words you already know and extracts high-impact vocabulary with accurate contextual definitions and Vietnamese translations.',
      icon: Sliders,
      color: 'teal',
      badge: 'Analysis Phase',
      visualPreview: {
        headline: 'CEFR Analysis: B2 – C1 Level Isolated',
        meta: '7 Target Words Extracted · 0 Grammatical Clutter',
        snippet:
          '1. synthesize (/ˈsɪn.θə.saɪz/) — verb [B2]\n2. probabilistic (/ˌprɒb.ə.bɪˈlɪs.tɪk/) — adj [C1]\n3. exponentially (/ˌek.spəˈnen.ʃəl.i/) — adv [B2]',
      },
    },
    {
      stepNumber: '03',
      title: 'Master via Flashcards & Games',
      vietnameseTitle: 'Làm chủ từ vựng qua flashcard & trò chơi',
      description:
        'Convert extracted words into spaced-repetition flashcards, quick 60-second matching mini-games, and daily Words of the Day reviews for rapid, lasting memory retention.',
      icon: BrainCircuit,
      color: 'indigo',
      badge: 'Retention Phase',
      visualPreview: {
        headline: 'Active Recall Engine: SM-2 Spaced Repetition',
        meta: 'Review Interval: 1 day → 3 days → 7 days → 30 days',
        snippet:
          '✓ 3D Interactive Card Flip active\n✓ Native audio pronunciation enabled\n✓ Sentence-context reinforcement confirmed',
      },
    },
    {
      stepNumber: '04',
      title: 'Test Comprehension & Level Up',
      vietnameseTitle: 'Làm bài kiểm tra & nâng cấp lộ trình',
      description:
        'Take quick adaptive reading comprehension assessments. Watch your reading score rise and unlock more challenging, engaging articles automatically tailored to your growth.',
      icon: Trophy,
      color: 'amber',
      badge: 'Mastery Phase',
      visualPreview: {
        headline: 'Diagnostic Assessment Result',
        meta: 'Score: 3/3 Correct · Comprehension: 96%',
        snippet:
          '🎉 Recommendation: Your reading proficiency advanced to C1. New recommended feed unlocked: Advanced Scientific Literature.',
      },
    },
  ];

  const currentStepData = steps[activeStep];
  const IconComponent = currentStepData.icon;

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Intuitive 4-Step Cycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'How EZVOCA Works' : 'Cách thức hoạt động của EZVOCA'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'en'
              ? 'A frictionless cycle that transforms any authentic English text into personal vocabulary mastery.'
              : 'Quy trình tinh gọn biến mọi văn bản tiếng Anh thực tế thành vốn từ vựng vững chắc của riêng bạn.'}
          </p>
        </div>

        {/* 4 Steps Interactive Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((s, idx) => {
            const SIcon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all relative cursor-pointer ${
                  isActive
                    ? 'bg-blue-50/70 border-blue-500 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-extrabold px-2 py-0.5 rounded-md ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    STEP {s.stepNumber}
                  </span>
                  <SIcon
                    className={`w-5 h-5 ${
                      isActive ? 'text-blue-600' : 'text-slate-400'
                    }`}
                  />
                </div>
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
                  {language === 'en' ? s.title : s.vietnameseTitle}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {s.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Stage */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Step explanation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-teal-400 text-xs font-bold uppercase tracking-wider">
                Phase {currentStepData.stepNumber} / 04
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-300">
                {currentStepData.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {language === 'en' ? currentStepData.title : currentStepData.vietnameseTitle}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentStepData.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenSignUp}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{language === 'en' ? 'Start Step 1 for Free' : 'Bắt đầu bước 1 miễn phí'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium rounded-xl transition-colors"
              >
                {language === 'en' ? 'Next Step Preview' : 'Xem bước tiếp theo'}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Mockup for active step */}
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
                <span className="font-semibold text-slate-200">
                  {currentStepData.visualPreview.headline}
                </span>
              </div>
              <span className="text-slate-400 text-[11px] font-mono">
                {currentStepData.visualPreview.meta}
              </span>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 font-mono text-xs text-teal-300/90 whitespace-pre-line leading-relaxed">
              {currentStepData.visualPreview.snippet}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Zero setup time required
              </span>
              <span className="text-slate-500">100% Free · No Paywalls</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
