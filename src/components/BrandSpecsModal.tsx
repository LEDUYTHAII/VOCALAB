import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Compass,
  FileText,
  Sparkles,
  Layers,
  Palette,
  Layout,
  Globe,
  Share2,
} from 'lucide-react';
import { BRAND_SPECS } from '../data/mockData';

interface BrandSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandSpecsModal: React.FC<BrandSpecsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'positioning' | 'sitemap' | 'headlines' | 'cta' | 'seo' | 'design'>('positioning');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 my-8 max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Brand Architecture &amp; Delivery Specifications</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            EZVOCA System &amp; Strategic Blueprint
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Complete strategic breakdown: positioning statement, sitemap, headlines, CTA matrix, SEO metadata, and UI design guidelines.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
          {[
            { id: 'positioning', label: 'Positioning Statement', icon: Sparkles },
            { id: 'sitemap', label: 'Recommended Sitemap', icon: Layers },
            { id: 'headlines', label: 'Headline Options', icon: FileText },
            { id: 'cta', label: 'CTA Variations', icon: Compass },
            { id: 'seo', label: 'SEO Title & Meta', icon: Globe },
            { id: 'design', label: 'UI & Layout Guidelines', icon: Palette },
          ].map((tab) => {
            const TIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                <TIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="flex-1 space-y-6 text-sm text-slate-700">
          {/* Tab 1: Positioning */}
          {activeTab === 'positioning' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Official Brand Positioning Statement
                  </span>
                  <button
                    onClick={() => handleCopy(BRAND_SPECS.positioningStatement, 'pos')}
                    className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500 transition-colors flex items-center gap-1 text-xs"
                  >
                    {copiedKey === 'pos' ? (
                      <Check className="w-3.5 h-3.5 text-teal-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedKey === 'pos' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-base text-slate-800 font-medium leading-relaxed italic">
                  "{BRAND_SPECS.positioningStatement}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Target Audience</span>
                  <p className="text-xs text-slate-700">
                    English learners globally &amp; in Vietnam (IELTS, TOEIC, students, working tech professionals).
                  </p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Primary Differentiator</span>
                  <p className="text-xs text-slate-700">
                    100% Free forever + Contextual extraction calibrated directly to CEFR levels A1–C2.
                  </p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Brand Voice</span>
                  <p className="text-xs text-slate-700">
                    Intelligent, accessible, encouraging, sleek, minimalist, student-championing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Sitemap */}
          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Recommended information architecture and routing structure for the complete EZVOCA platform:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
                {BRAND_SPECS.sitemap.map((page) => (
                  <div key={page.path} className="p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">
                          {page.path}
                        </span>
                        <h4 className="font-semibold text-sm text-slate-900">
                          {page.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {page.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Headlines */}
          {activeTab === 'headlines' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Hero Headline Options
                </h4>
                <div className="space-y-2">
                  {BRAND_SPECS.headlineOptions.hero.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900"
                    >
                      <span>{hl}</span>
                      <button
                        onClick={() => handleCopy(hl, `hero-${i}`)}
                        className="text-slate-400 hover:text-slate-700 p-1 rounded"
                      >
                        {copiedKey === `hero-${i}` ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Value Proposition Headlines
                </h4>
                <div className="space-y-2">
                  {BRAND_SPECS.headlineOptions.valueProps.map((vp, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-700"
                    >
                      <span>{vp}</span>
                      <button
                        onClick={() => handleCopy(vp, `vp-${i}`)}
                        className="text-slate-400 hover:text-slate-700 p-1 rounded"
                      >
                        {copiedKey === `vp-${i}` ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: CTA Variations */}
          {activeTab === 'cta' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 mb-2">
                Conversion-optimized Call-to-Action text variations mapped to user intent and funnel stages:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
                {BRAND_SPECS.ctaVariations.map((cta, i) => (
                  <div key={i} className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-sm text-blue-600">
                        "{cta.label}"
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        <span className="font-semibold text-slate-700">Intent:</span> {cta.intent} · <span className="font-semibold text-slate-700">Context:</span> {cta.context}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(cta.label, `cta-${i}`)}
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 text-xs flex items-center gap-1"
                    >
                      {copiedKey === `cta-${i}` ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">Copy</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: SEO */}
          {activeTab === 'seo' && (
            <div className="space-y-4">
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                    Homepage Title Tag (&lt;title&gt;)
                  </span>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-900 flex items-center justify-between">
                    <span>EZVOCA – Free AI-Powered English Vocabulary &amp; Reading Platform</span>
                    <button
                      onClick={() => handleCopy('EZVOCA – Free AI-Powered English Vocabulary & Reading Platform', 'seo-title')}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      {copiedKey === 'seo-title' ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">62 characters · Optimal for Google SERP display</span>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                    Meta Description
                  </span>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed flex items-start justify-between gap-3">
                    <span>
                      Master English vocabulary and reading comprehension with EZVOCA. 100% free AI text extractor, CEFR level filtering, interactive flashcards, and adaptive reading tests.
                    </span>
                    <button
                      onClick={() => handleCopy('Master English vocabulary and reading comprehension with EZVOCA. 100% free AI text extractor, CEFR level filtering, interactive flashcards, and adaptive reading tests.', 'seo-desc')}
                      className="text-slate-400 hover:text-slate-700 shrink-0 mt-0.5"
                    >
                      {copiedKey === 'seo-desc' ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">154 characters · Within 120–160 character recommendation</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 6: Design System */}
          {activeTab === 'design' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                    Color Architecture (60-30-10)
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li><strong>60% Canvas:</strong> Light Grey UI (#F8FAFC, #F1F5F9)</li>
                    <li><strong>30% Surface:</strong> Crisp White Cards (#FFFFFF) with 1px border (#E2E8F0)</li>
                    <li><strong>10% Accent:</strong> Modern Tech Blue (#2563EB) &amp; Vibrant Teal (#14B8A6)</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                    Typography Pairing (2+1 Rule)
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li><strong>Display Headings:</strong> Outfit (Bold, geometric, friendly)</li>
                    <li><strong>Prose &amp; Body:</strong> Plus Jakarta Sans (Ergonomic line-height, crisp legibility)</li>
                    <li><strong>Data &amp; CEFR:</strong> Tabular monospace figures (JetBrains Mono style)</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800 mb-2">
                  Icon &amp; Layout Suggestions
                </h4>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• <strong>Functional Icons Only:</strong> Use icons strictly for interactive affordances (Volume2 for native pronunciation audio, Bookmark for saving, RotateCw for flashcard flip, Sparkles for AI extractor).</li>
                  <li>• <strong>Zero-Pill Metadata Rule:</strong> Display category, read time, and dates with clean typographic separators (·) rather than bordered static badge chips.</li>
                  <li>• <strong>Balanced Viewport Math:</strong> 1440px baseline container with nested radius formula (r_inner = r_outer - padding).</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
          >
            Close Specifications
          </button>
        </div>
      </div>
    </div>
  );
};
