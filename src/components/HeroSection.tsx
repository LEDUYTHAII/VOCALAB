import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Bookmark,
  Check,
  Zap,
  Layers,
  Volume2,
  RefreshCw,
  Flame,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';
import { PRESET_SAMPLE_TEXTS, PRECOMPUTED_EXTRACTED_WORDS } from '../data/mockData';
import { CEFRLevel, ExtractedWord } from '../types';

interface HeroSectionProps {
  onOpenSignUp: () => void;
  language: 'en' | 'vi';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSignUp, language }) => {
  const [selectedPresetId, setSelectedPresetId] = useState('preset-tech');
  const [inputText, setInputText] = useState(PRESET_SAMPLE_TEXTS[0].text);
  const [targetLevel, setTargetLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [isExtracting, setIsExtracting] = useState(false);
  const [savedWordIds, setSavedWordIds] = useState<Record<string, boolean>>({
    'w-1': true,
  });

  const currentWords = PRECOMPUTED_EXTRACTED_WORDS[selectedPresetId] || PRECOMPUTED_EXTRACTED_WORDS['preset-tech'];

  const filteredWords = targetLevel === 'ALL'
    ? currentWords
    : currentWords.filter((w) => w.cefr === targetLevel);

  const handleSelectPreset = (presetId: string) => {
    setSelectedPresetId(presetId);
    const preset = PRESET_SAMPLE_TEXTS.find((p) => p.id === presetId);
    if (preset) {
      setInputText(preset.text);
      setIsExtracting(true);
      setTimeout(() => {
        setIsExtracting(false);
      }, 350);
    }
  };

  const handleTriggerExtract = () => {
    setIsExtracting(true);
    setTimeout(() => {
      setIsExtracting(false);
    }, 450);
  };

  const toggleSaveWord = (wordId: string) => {
    setSavedWordIds((prev) => ({
      ...prev,
      [wordId]: !prev[wordId],
    }));
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-[#F8FAFC] to-[#F8FAFC]">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-200/20 to-teal-200/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Trust Banner Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>100% FREE AI Language Platform</span>
            <span className="text-slate-300">·</span>
            <span>Zero Paywalls Forever</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
            {language === 'en' ? (
              <>
                Master English Reading &amp; Vocabulary{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Effortlessly with AI
                </span>
              </>
            ) : (
              <>
                Làm chủ kỹ năng đọc &amp; từ vựng tiếng Anh{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  dễ dàng cùng AI
                </span>
              </>
            )}
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
            {language === 'en' ? (
              <>
                Extract targeted CEFR vocabulary from any article, study with spaced-repetition flashcards, and track your comprehension growth. No subscriptions, credit cards, or locked tiers.
              </>
            ) : (
              <>
                Trích xuất từ vựng theo khung CEFR từ bài báo bất kỳ, ghi nhớ bằng flashcard thông minh và đo lường tiến độ đọc hiểu. Hoàn toàn miễn phí, không thẻ tín dụng, không khóa tính năng.
              </>
            )}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenSignUp}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{language === 'en' ? 'Start Learning for Free' : 'Bắt đầu học miễn phí'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="#extractor-demo"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span>{language === 'en' ? 'Try Live Extractor Below' : 'Trải nghiệm công cụ bên dưới'}</span>
            </a>
          </div>

          {/* Micro Trust Proof */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              100% Free Forever
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              CEFR Levels A1–C2
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-teal-600" />
              Used by 85,000+ Learners
            </span>
          </div>
        </div>

        {/* Visual Highlight: Interactive Hero Mockup (The Real AI Text Extractor Sandbox) */}
        <div id="extractor-demo" className="scroll-mt-24 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden">
            {/* Mockup Window Top Chrome */}
            <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                </div>
                <div className="h-4 w-px bg-slate-200 mx-1"></div>
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  EZVOCA AI Text Extractor Studio
                </span>
              </div>

              {/* Sample Presets Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                <span className="text-xs text-slate-400 font-medium hidden sm:inline mr-1">
                  Presets:
                </span>
                {PRESET_SAMPLE_TEXTS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset.id)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors whitespace-nowrap font-medium ${
                      selectedPresetId === preset.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {preset.name.split(':')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {/* Left Column: Text Input & Level Filtering */}
              <div className="lg:col-span-6 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      Input Text or Article Excerpt
                    </label>
                    <span className="text-xs text-slate-400 font-mono">
                      {inputText.trim().split(/\s+/).filter(Boolean).length} words
                    </span>
                  </div>

                  <div className="relative">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      rows={6}
                      className="w-full text-sm leading-relaxed text-slate-800 bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-sans resize-none"
                      placeholder="Paste any English article, news, book paragraph, or essay here..."
                    />
                  </div>
                </div>

                {/* Level Target Selector */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                      Filter by Target CEFR Level:
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {targetLevel === 'ALL' ? 'Showing All Words' : `Targeting ${targetLevel}+ Only`}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
                    {(['ALL', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setTargetLevel(lvl)}
                        className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                          targetLevel === lvl
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>

                  {/* Extract Button */}
                  <button
                    onClick={handleTriggerExtract}
                    disabled={isExtracting}
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl text-xs font-semibold shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {isExtracting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Analyzing Text Difficulty &amp; Context...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                        <span>Extract Targeted Vocabulary Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Extracted Vocabulary Stream */}
              <div className="lg:col-span-6 p-5 sm:p-6 bg-slate-50/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Extracted Vocabulary
                      </span>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md">
                        {filteredWords.length} terms found
                      </span>
                    </div>

                    <span className="text-[11px] text-teal-700 font-medium">
                      Context-Aware Definitions
                    </span>
                  </div>

                  {/* Vocabulary Cards List */}
                  <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                    {filteredWords.length === 0 ? (
                      <div className="p-8 text-center bg-white rounded-xl border border-dashed border-slate-200">
                        <p className="text-xs text-slate-500">
                          No vocabulary matches the selected level ({targetLevel}). Try selecting "ALL" or "B2".
                        </p>
                      </div>
                    ) : (
                      filteredWords.map((item) => {
                        const isSaved = !!savedWordIds[item.id];
                        return (
                          <div
                            key={item.id}
                            className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {item.word}
                                </span>
                                <span className="text-xs font-mono text-slate-400">
                                  {item.phonetic}
                                </span>
                                <span className="text-[11px] font-semibold text-slate-500 italic">
                                  {item.partOfSpeech}
                                </span>
                                <span
                                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                    item.cefr === 'C2' || item.cefr === 'C1'
                                      ? 'bg-purple-100 text-purple-800'
                                      : item.cefr === 'B2'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-emerald-100 text-emerald-800'
                                  }`}
                                >
                                  {item.cefr}
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => speakWord(item.word)}
                                  className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                  title="Pronounce Word"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => toggleSaveWord(item.id)}
                                  className={`p-1 rounded-md transition-colors ${
                                    isSaved
                                      ? 'text-teal-600 bg-teal-50'
                                      : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                                  }`}
                                  title={isSaved ? 'Saved to List' : 'Save Word'}
                                >
                                  {isSaved ? (
                                    <Check className="w-3.5 h-3.5" />
                                  ) : (
                                    <Bookmark className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                            </div>

                            <p className="mt-1 text-xs text-slate-600 leading-snug">
                              {item.contextMeaning}
                            </p>

                            {/* Vietnamese meaning bridge */}
                            <p className="mt-1 text-[11px] text-teal-700 font-medium">
                              🇻🇳 {item.vietnameseMeaning}
                            </p>

                            <p className="mt-1.5 text-[11px] text-slate-500 bg-slate-50 p-1.5 rounded-lg border border-slate-100 italic">
                              "{item.sentenceContext}"
                            </p>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Bottom Extraction Footer */}
                <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>Instant flashcard generation ready</span>
                  </span>
                  <button
                    onClick={onOpenSignUp}
                    className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Save full word list</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
