import React, { useState } from 'react';
import {
  Volume2,
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  Flame,
  Calendar,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { WORDS_OF_THE_DAY } from '../data/mockData';

interface WordsOfTheDayProps {
  onOpenSignUp: () => void;
  language: 'en' | 'vi';
}

export const WordsOfTheDay: React.FC<WordsOfTheDayProps> = ({ onOpenSignUp, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedWords, setSavedWords] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeWord = WORDS_OF_THE_DAY[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % WORDS_OF_THE_DAY.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + WORDS_OF_THE_DAY.length) % WORDS_OF_THE_DAY.length);
  };

  const toggleSave = (id: string, word: string) => {
    const isNowSaved = !savedWords[id];
    setSavedWords((prev) => ({ ...prev, [id]: isNowSaved }));
    setToastMessage(isNowSaved ? `Added "${word}" to your Free Word List` : `Removed "${word}"`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const speak = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const todayDateString = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <section id="words-of-the-day" className="py-14 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'en' ? "Today's Featured Vocabulary" : 'Từ vựng chọn lọc hôm nay'}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">{todayDateString}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              {language === 'en' ? 'Words of the Day' : 'Từ vựng mỗi ngày'}
            </h2>
            <p className="mt-1 text-sm text-slate-500 max-w-xl">
              {language === 'en'
                ? 'Handpicked high-yield vocabulary calibrated for IELTS, TOEIC, and academic fluency with real sentence context.'
                : 'Từ vựng tần suất cao được chọn lọc cho IELTS, TOEIC và giao tiếp học thuật với ngữ cảnh thực tế.'}
            </p>
          </div>

          {/* Quick Streak Widget */}
          <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 self-start md:self-auto">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">
                12-Day Streak
              </p>
              <p className="text-slate-500">
                {language === 'en' ? 'Review daily words to maintain' : 'Học 5 từ để duy trì chuỗi'}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Vocabulary Banner Card */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
          {/* Subtle geometric background overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar inside Card */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30">
                CEFR {activeWord.cefr}
              </span>
              <span className="text-xs text-slate-300 capitalize font-medium">
                {activeWord.partOfSpeech}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs text-teal-200 hidden sm:inline">
                {activeWord.collocation}
              </span>
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-2">
                {WORDS_OF_THE_DAY.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex ? 'w-6 bg-teal-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to word ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Previous word"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Next word"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Word Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Word & Definition Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                  {activeWord.word}
                </h3>
                <span className="text-lg font-mono text-teal-300">
                  {activeWord.phonetic}
                </span>
                <button
                  onClick={() => speak(activeWord.audioText)}
                  className="p-2 rounded-full bg-white/10 hover:bg-teal-500/30 text-teal-300 transition-all hover:scale-110 active:scale-95"
                  title="Listen to native pronunciation"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Definition */}
              <p className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed">
                {activeWord.definition}
              </p>

              {/* Vietnamese Meaning Banner */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-teal-200 text-sm font-medium">
                <span className="text-xs text-white/60">Nghĩa tiếng Việt:</span>
                <span>{activeWord.vietnameseMeaning}</span>
              </div>

              {/* Sentence Context */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mt-4">
                <div className="text-xs uppercase tracking-wider text-teal-300/80 font-semibold mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Real-World Example in Context
                </div>
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  "{activeWord.sampleSentence}"
                </p>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3">
              <div className="flex items-center justify-between text-xs text-teal-200 font-medium">
                <span>Daily Practice Card</span>
                <span>Word {currentIndex + 1} of 5</span>
              </div>

              <button
                onClick={() => toggleSave(activeWord.id, activeWord.word)}
                className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${
                  savedWords[activeWord.id]
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                {savedWords[activeWord.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved in Word List</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Save to My Word List</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenSignUp}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                <span>Create Flashcard Deck (Free)</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="absolute bottom-4 right-4 bg-teal-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-2">
              {toastMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
