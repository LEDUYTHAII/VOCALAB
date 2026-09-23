import React, { useState } from 'react';
import {
  Sparkles,
  Gamepad2,
  BookOpen,
  LineChart,
  ArrowRight,
  RotateCw,
  CheckCircle2,
  Layers,
  Volume2,
  Clock,
  Tag,
  Trophy,
} from 'lucide-react';
import { RECOMMENDED_ARTICLES } from '../data/mockData';

interface CoreFeaturesProps {
  onOpenSignUp: () => void;
  onOpenTestModal: () => void;
  language: 'en' | 'vi';
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({
  onOpenSignUp,
  onOpenTestModal,
  language,
}) => {
  // Flashcard demo state
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const sampleFlashcards = [
    {
      word: 'Resilience',
      phonetic: '/rɪˈzɪl.jəns/',
      pos: 'noun',
      cefr: 'B2',
      definition: 'The capacity to recover quickly from difficulties; toughness.',
      vietnamese: 'Khả năng phục hồi, tính kiên cường',
      sentence: 'The educational community demonstrated remarkable resilience.',
    },
    {
      word: 'Pragmatic',
      phonetic: '/præɡˈmæt.ɪk/',
      pos: 'adjective',
      cefr: 'C1',
      definition: 'Focused on practical real-world results rather than theoretical ideals.',
      vietnamese: 'Thực tế, thực dụng',
      sentence: 'We need a pragmatic approach to language acquisition.',
    },
    {
      word: 'Pivotal',
      phonetic: '/ˈpɪv.ə.təl/',
      pos: 'adjective',
      cefr: 'B2',
      definition: 'Of crucial importance in relation to the development of something.',
      vietnamese: 'Then chốt, mang tính quyết định',
      sentence: 'Green corridors play a pivotal role in urban biodiversity.',
    },
  ];

  const currentCard = sampleFlashcards[flashcardIndex];

  // Quick Mini-Game Match state
  const [matchPairs, setMatchPairs] = useState([
    { word: 'Ubiquitous', match: 'Found everywhere', id: 1 },
    { word: 'Eloquent', match: 'Fluent & persuasive', id: 2 },
    { word: 'Augment', match: 'Enhance / expand', id: 3 },
  ]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [completedMatches, setCompletedMatches] = useState<string[]>([]);

  const handleSelectWord = (word: string) => {
    if (completedMatches.includes(word)) return;
    setSelectedWord(word);
    if (selectedMatch) {
      checkMatch(word, selectedMatch);
    }
  };

  const handleSelectMatch = (match: string) => {
    const pair = matchPairs.find((p) => p.match === match);
    if (!pair || completedMatches.includes(pair.word)) return;
    setSelectedMatch(match);
    if (selectedWord) {
      checkMatch(selectedWord, match);
    }
  };

  const checkMatch = (word: string, match: string) => {
    const pair = matchPairs.find((p) => p.word === word && p.match === match);
    if (pair) {
      setCompletedMatches((prev) => [...prev, word]);
      setSelectedWord(null);
      setSelectedMatch(null);
    } else {
      setTimeout(() => {
        setSelectedWord(null);
        setSelectedMatch(null);
      }, 400);
    }
  };

  // Article category filter
  const [articleCategory, setArticleCategory] = useState<string>('All');
  const filteredArticles = articleCategory === 'All'
    ? RECOMMENDED_ARTICLES
    : RECOMMENDED_ARTICLES.filter((a) => a.category === articleCategory);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <section id="features" className="py-20 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Unified Learning Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {language === 'en'
              ? 'Everything You Need to Master English Reading'
              : 'Hệ sinh thái toàn diện cho kỹ năng đọc tiếng Anh'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'en'
              ? 'Four interconnected, free AI-powered tools designed to move you from passive reader to fluent comprehension.'
              : 'Bốn công cụ AI miễn phí được liên kết chặt chẽ, giúp bạn chuyển từ đọc thụ động sang thấu hiểu sâu sắc.'}
          </p>
        </div>

        {/* Feature 1 & Feature 2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feature 1: AI Text Extractor */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
                AI Text Extractor &amp; Word Lists
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Paste any article, academic research paper, or news story. EZVOCA’s engine instantly isolates vocabulary by your exact CEFR level (A1–C2), analyzes grammatical collocations, and organizes terms into custom, exportable study lists.
              </p>

              {/* Interactive preview representation */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Level Filter Engine</span>
                  <span className="text-blue-600 font-semibold">CEFR Calibrated</span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {['A1 Beginner', 'A2 Elementary', 'B1 Intermediate', 'B2 Upper-Int', 'C1 Advanced', 'C2 Mastery'].map((lvl, i) => (
                    <span
                      key={lvl}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        i >= 3
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-600'
                      }`}
                    >
                      {lvl}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  💡 Filters out common filler words so you only memorize high-yield terms that expand your horizon.
                </p>
              </div>
            </div>

            <a
              href="#extractor-demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Try Live Extractor in Hero</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature 2: Flashcards & Mini-Games */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                  Flashcards &amp; Mini-Games
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 bg-teal-100 text-teal-800 rounded-md">
                  Interactive Demo
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Turn your saved word lists into spaced-repetition flashcards and 60-second matching challenges. Click the card below to flip between meaning and context.
              </p>

              {/* Interactive Flashcard Preview */}
              <div className="perspective-1000 my-4">
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`w-full min-h-[170px] bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 cursor-pointer shadow-md transition-transform duration-500 transform-style-3d relative ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div
                    className={`absolute inset-0 p-5 flex flex-col justify-between backface-hidden ${
                      isFlipped ? 'pointer-events-none' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                        {currentCard.cefr}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <RotateCw className="w-3 h-3" /> Click to Flip
                      </span>
                    </div>
                    <div className="text-center my-auto">
                      <div className="text-2xl font-display font-bold tracking-tight">
                        {currentCard.word}
                      </div>
                      <div className="text-xs font-mono text-teal-300 mt-1">
                        {currentCard.phonetic} · <span className="italic">{currentCard.pos}</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-center text-slate-400">
                      Tap card to see definition &amp; context
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 p-5 flex flex-col justify-between rotate-y-180 backface-hidden ${
                      !isFlipped ? 'pointer-events-none' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-teal-300 font-semibold">
                        🇻🇳 {currentCard.vietnamese}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <RotateCw className="w-3 h-3" /> Flip Back
                      </span>
                    </div>
                    <div className="text-center my-auto px-2">
                      <p className="text-xs sm:text-sm text-slate-100">
                        {currentCard.definition}
                      </p>
                      <p className="text-[11px] text-teal-200/80 italic mt-2">
                        "{currentCard.sentence}"
                      </p>
                    </div>
                    <div className="text-[11px] text-center text-slate-400">
                      Tap to flip back
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Switcher buttons */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Try another word:</span>
                <div className="flex gap-1.5">
                  {sampleFlashcards.map((c, i) => (
                    <button
                      key={c.word}
                      onClick={() => {
                        setFlashcardIndex(i);
                        setIsFlipped(false);
                      }}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        flashcardIndex === i
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {c.word}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSignUp}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span>Explore All Mini-Games &amp; Decks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature 3 & Feature 4 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature 3: Personalized Article Recommendations */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
                Personalized Article Recommendations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Never waste time searching for suitable reading materials. EZVOCA’s AI curates authentic articles based on your topics of passion, matching your current Lexile readability score with 10% new stretch vocabulary.
              </p>

              {/* Category pills */}
              <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1">
                {['All', 'Business', 'Science', 'Technology', 'Culture'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setArticleCategory(cat)}
                    className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                      articleCategory === cat
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Article List Preview */}
              <div className="space-y-3 mb-6">
                {filteredArticles.slice(0, 2).map((art) => (
                  <div
                    key={art.id}
                    className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-blue-600">{art.source}</span>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {art.readTimeMinutes} min
                        </span>
                        <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px]">
                          {art.cefrLevel}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-sm font-display font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      {art.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {art.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenSignUp}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Get Your Custom Article Feed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature 4: Reading Tests & Smart Progress Tracker */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
                Reading Tests &amp; Smart Progress Tracker
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Measure reading comprehension through adaptive tests. Our engine updates your CEFR rating in real time and automatically re-calibrates article recommendations as you improve.
              </p>

              {/* Diagnostic Test Card Teaser */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200/70 rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                    Live Diagnostic Available
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    3 Questions · 2 Mins
                  </span>
                </div>
                <h4 className="text-base font-display font-bold text-slate-900">
                  Adaptive Diagnostic: Urban Micro-Ecosystems (B2)
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Test your inference and contextual vocabulary skills right now and get instant level feedback.
                </p>

                <div className="mt-4">
                  <button
                    onClick={onOpenTestModal}
                    className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-blue-600 font-semibold text-xs rounded-xl border border-blue-200 shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    <span>Launch 2-Min Interactive Reading Test</span>
                  </button>
                </div>
              </div>
            </div>

            <a
              href="#progress-tracker"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              <span>View Full Analytics Dashboard Preview</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
