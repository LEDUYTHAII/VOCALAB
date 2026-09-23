import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface FinalCtaProps {
  onOpenSignUp: (initialEmail?: string) => void;
  language: 'en' | 'vi';
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenSignUp, language }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSignUp(email);
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden text-center">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-300 border border-white/15 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join 85,000+ Students &amp; Professionals</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight text-balance">
            {language === 'en'
              ? 'Start Reading Smarter Today Without Paying a Single Cent'
              : 'Nâng cấp kỹ năng đọc tiếng Anh ngay hôm nay — Hoàn toàn miễn phí'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed text-balance">
            {language === 'en'
              ? 'Extract vocabulary, test comprehension, and master high-yield words in their real-world context. No trial countdowns. No credit card ever.'
              : 'Trích xuất từ vựng, làm bài đọc hiểu và ghi nhớ từ ngữ trong ngữ cảnh thực tế. Không thời hạn dùng thử. Không yêu cầu thẻ tín dụng.'}
          </p>

          {/* Conversion Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2.5"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="w-full px-4 py-3.5 rounded-xl text-slate-900 bg-white border-0 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:text-slate-400 shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-teal-500 hover:bg-teal-400 active:scale-[0.98] text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>{language === 'en' ? 'Start Free' : 'Đăng ký ngay'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Micro trust guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-blue-200 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-teal-300" />
              100% Free Forever
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-teal-300" />
              No Credit Card Required
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-teal-300" />
              Web, Mobile &amp; Tablet Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
