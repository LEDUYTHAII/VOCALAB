import React from 'react';
import { Star, ShieldCheck, CheckCircle, Globe2, BookOpen, Layers } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface SocialProofProps {
  language: 'en' | 'vi';
}

export const SocialProof: React.FC<SocialProofProps> = ({ language }) => {
  const stats = [
    {
      label: 'Articles Read & Analyzed',
      vietnameseLabel: 'Bài báo đã được đọc & phân tích',
      value: '120,000+',
    },
    {
      label: 'Vocabulary Lists Created',
      vietnameseLabel: 'Bộ từ vựng được trích xuất',
      value: '540,000+',
    },
    {
      label: 'Average Learner Rating',
      vietnameseLabel: 'Đánh giá trung bình của người học',
      value: '4.9 / 5.0',
    },
    {
      label: 'Global Learner Community',
      vietnameseLabel: 'Cộng đồng người học toàn cầu',
      value: '85,000+ Students',
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Proven Student Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            {language === 'en'
              ? 'Loved by English Learners Worldwide'
              : 'Được tin dùng bởi hơn 85.000 học viên'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'en'
              ? 'From university students preparing for IELTS to engineers reading global documentation, see how EZVOCA changes the way people master English.'
              : 'Từ sinh viên luyện thi IELTS đến kỹ sư đọc tài liệu quốc tế, hãy xem EZVOCA đã thay đổi phương pháp học từ vựng như thế nào.'}
          </p>
        </div>

        {/* Milestone Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-blue-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-2">
                {language === 'en' ? stat.label : stat.vietnameseLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars and verified indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-teal-600" />
                    Verified Learner
                  </span>
                </div>

                {/* Score improvement highlight badge */}
                <div className="mb-4 inline-block bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-lg">
                  🎯 {t.metricChange}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {t.name}
                  </h4>
                  <div className="text-xs text-slate-500">
                    {t.role} · <span className="text-slate-400">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
