import React, { useState } from 'react';
import {
  Flame,
  BookOpen,
  Award,
  TrendingUp,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface DashboardShowcaseProps {
  onOpenSignUp: () => void;
  language: 'en' | 'vi';
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({
  onOpenSignUp,
  language,
}) => {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('7d');

  // Chart bar heights depending on timeframe
  const retentionData = {
    '7d': [
      { day: 'Mon', words: 24, score: 85 },
      { day: 'Tue', words: 32, score: 88 },
      { day: 'Wed', words: 18, score: 92 },
      { day: 'Thu', words: 45, score: 90 },
      { day: 'Fri', words: 28, score: 94 },
      { day: 'Sat', words: 52, score: 96 },
      { day: 'Sun', words: 38, score: 98 },
    ],
    '30d': [
      { day: 'W1', words: 140, score: 82 },
      { day: 'W2', words: 185, score: 87 },
      { day: 'W3', words: 210, score: 91 },
      { day: 'W4', words: 260, score: 95 },
    ],
    '90d': [
      { day: 'Month 1', words: 480, score: 78 },
      { day: 'Month 2', words: 620, score: 88 },
      { day: 'Month 3', words: 842, score: 95 },
    ],
  };

  const currentChart = retentionData[timeframe];

  return (
    <section id="progress-tracker" className="py-20 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Real Measurable Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {language === 'en'
              ? 'Your Personal Learning Command Center'
              : 'Trung tâm theo dõi tiến độ học tập thông minh'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'en'
              ? 'See your vocabulary retention rates, reading speed improvements, and CEFR level progression at a single glance.'
              : 'Theo dõi tỷ lệ ghi nhớ từ vựng, tốc độ đọc hiểu và sự bứt phá cấp độ CEFR một cách trực quan.'}
          </p>
        </div>

        {/* The Dashboard Mockup UI */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto">
          {/* Top Bar of Dashboard */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm">
                EV
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  Learner Dashboard Preview
                </h3>
                <p className="text-xs text-slate-500">
                  Target: IELTS Reading 7.5+ / Advanced Academic English
                </p>
              </div>
            </div>

            {/* Timeframe Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              {(['7d', '30d', '90d'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeframe(t)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    timeframe === t
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t === '7d' ? 'Last 7 Days' : t === '30d' ? 'Last 30 Days' : 'Quarterly'}
                </button>
              ))}
            </div>
          </div>

          {/* Key Stat Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">Daily Streak</span>
                <Flame className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-2xl font-display font-extrabold text-slate-900">
                14 Days
              </div>
              <div className="text-[11px] text-teal-600 font-medium mt-1 flex items-center gap-1">
                <span>🔥 Top 5% Learner Consistency</span>
              </div>
            </div>

            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">Words Mastered</span>
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl font-display font-extrabold text-slate-900">
                842 Words
              </div>
              <div className="text-[11px] text-blue-600 font-medium mt-1">
                +48 words this week
              </div>
            </div>

            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">Reading Level</span>
                <Award className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-2xl font-display font-extrabold text-slate-900">
                B2+ / C1
              </div>
              <div className="text-[11px] text-purple-600 font-medium mt-1">
                860 Lexile Measure
              </div>
            </div>

            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-medium">Memory Retention</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-display font-extrabold text-slate-900">
                94.2%
              </div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">
                Spaced Repetition Active
              </div>
            </div>
          </div>

          {/* Chart & CEFR Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Vocabulary Acquisition Chart */}
            <div className="lg:col-span-7 bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  Vocabulary Words Acquired ({timeframe.toUpperCase()})
                </span>
                <span className="text-xs text-slate-500 font-mono">Avg 32 words/session</span>
              </div>

              {/* Bar visualization */}
              <div className="h-44 flex items-end justify-between gap-2 pt-6 px-2">
                {currentChart.map((item) => (
                  <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-blue-600 font-semibold transition-colors">
                      {item.words}
                    </span>
                    <div className="w-full bg-slate-200 rounded-t-lg relative overflow-hidden h-32 flex items-end">
                      <div
                        style={{ height: `${Math.min(100, (item.words / 60) * 100)}%` }}
                        className="w-full bg-gradient-to-t from-blue-600 to-teal-400 rounded-t-lg transition-all duration-500 group-hover:brightness-110"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-600">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CEFR Vocabulary Distribution */}
            <div className="lg:col-span-5 bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 space-y-4">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                CEFR Vocabulary Distribution
              </span>

              <div className="space-y-3">
                {[
                  { level: 'C1/C2 Advanced', count: '148 words', pct: 28, color: 'bg-purple-600' },
                  { level: 'B2 Upper-Intermediate', count: '312 words', pct: 45, color: 'bg-blue-600' },
                  { level: 'B1 Intermediate', count: '246 words', pct: 20, color: 'bg-teal-500' },
                  { level: 'A1/A2 Foundations', count: '136 words', pct: 7, color: 'bg-slate-400' },
                ].map((item) => (
                  <div key={item.level} className="text-xs">
                    <div className="flex justify-between font-medium text-slate-700 mb-1">
                      <span>{item.level}</span>
                      <span className="font-mono text-slate-500">{item.count}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.pct * 1.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Auto-adaptive updates</span>
                <button
                  onClick={onOpenSignUp}
                  className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Sync your account</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
