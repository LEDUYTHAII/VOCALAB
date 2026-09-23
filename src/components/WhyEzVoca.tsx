import React from 'react';
import {
  ShieldCheck,
  Zap,
  BookCheck,
  Sparkles,
  Check,
  X,
  LockOpen,
  Layers,
  HeartHandshake,
} from 'lucide-react';

interface WhyEzVocaProps {
  onOpenSignUp: () => void;
  language: 'en' | 'vi';
}

export const WhyEzVoca: React.FC<WhyEzVocaProps> = ({ onOpenSignUp, language }) => {
  const pillars = [
    {
      title: '100% Free Forever with Zero Paywalls',
      vietnameseTitle: 'Hoàn toàn miễn phí trọn đời',
      description:
        'While Quizlet locks basic features behind $35+/year and other apps charge monthly subscriptions, EZVOCA offers full AI text extraction, unlimited flashcards, and reading tests completely free.',
      icon: LockOpen,
      color: 'teal',
    },
    {
      title: 'Contextual Learning (No Isolated Lists)',
      vietnameseTitle: 'Học từ vựng theo ngữ cảnh thực tế',
      description:
        'Stop memorizing sterile dictionary translations. Learn vocabulary directly inside authentic articles with real grammatical collocations and Vietnamese contextual annotations.',
      icon: BookCheck,
      color: 'blue',
    },
    {
      title: 'Personalized AI Article Feeds',
      vietnameseTitle: 'Gợi ý bài đọc thông minh theo sở thích',
      description:
        'Read what you love. From quantum computing and global finance to literature and psychology, our engine curates real-world texts matched to your exact CEFR level.',
      icon: Sparkles,
      color: 'indigo',
    },
    {
      title: 'Unified Reading-to-Practice Workflow',
      vietnameseTitle: 'Quy trình đọc - học - luyện tập đồng bộ',
      description:
        'No more juggling between browser tabs, dictionary apps, and flashcard tools. Read, extract, review, and test in one distraction-free platform.',
      icon: Layers,
      color: 'amber',
    },
  ];

  const comparisonRows = [
    {
      feature: '100% Free Forever (No Hidden Fees)',
      ezvoca: true,
      quizlet: false,
      duolingo: false,
      anki: true,
    },
    {
      feature: 'Instant AI Text & CEFR Extractor',
      ezvoca: true,
      quizlet: false,
      duolingo: false,
      anki: false,
    },
    {
      feature: 'Contextual Native Sentence Learning',
      ezvoca: true,
      quizlet: 'Partial',
      duolingo: false,
      anki: 'Manual',
    },
    {
      feature: 'Personalized Adaptive Article Feeds',
      ezvoca: true,
      quizlet: false,
      duolingo: false,
      anki: false,
    },
    {
      feature: 'Adaptive Reading Comprehension Tests',
      ezvoca: true,
      quizlet: false,
      duolingo: false,
      anki: false,
    },
    {
      feature: 'No Manual Card Typing Required',
      ezvoca: true,
      quizlet: false,
      duolingo: true,
      anki: false,
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Built for Learners, Not Profit Paywalls</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'Why Learners Choose EZVOCA' : 'Vì sao người học chọn EZVOCA'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'en'
              ? 'Engineered from first principles to eradicate friction in English reading and vocabulary acquisition.'
              : 'Được thiết kế nhằm xóa bỏ rào cản học phí và giúp việc đọc hiểu tiếng Anh trở nên tự nhiên nhất.'}
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((p) => {
            const PIcon = p.icon;
            return (
              <div
                key={p.title}
                className="p-7 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <PIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                    {language === 'en' ? p.title : p.vietnameseTitle}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 overflow-hidden">
          <div className="text-center mb-6">
            <h3 className="font-display font-bold text-xl text-slate-900">
              How EZVOCA Compares to Traditional Tools
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Honest capability comparison across leading language learning platforms
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Platform Feature</th>
                  <th className="py-3 px-4 text-center bg-blue-50/80 text-blue-700 font-bold rounded-t-xl">
                    EZVOCA (Free)
                  </th>
                  <th className="py-3 px-4 text-center">Quizlet Plus ($35+/yr)</th>
                  <th className="py-3 px-4 text-center">Duolingo Super ($84+/yr)</th>
                  <th className="py-3 px-4 text-center">Anki (Manual)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/50 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-blue-50/50 font-bold text-blue-700">
                      <Check className="w-4 h-4 text-blue-600 mx-auto" />
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600">
                      {typeof row.quizlet === 'boolean' ? (
                        row.quizlet ? (
                          <Check className="w-4 h-4 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-rose-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-slate-500 font-medium">{row.quizlet}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600">
                      {typeof row.duolingo === 'boolean' ? (
                        row.duolingo ? (
                          <Check className="w-4 h-4 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-rose-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-slate-500 font-medium">{row.duolingo}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600">
                      {typeof row.anki === 'boolean' ? (
                        row.anki ? (
                          <Check className="w-4 h-4 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-rose-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-slate-500 font-medium">{row.anki}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onOpenSignUp}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
            >
              Get Free Lifetime Access Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
