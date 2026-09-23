import React, { useState } from 'react';
import { X, Trophy, CheckCircle, AlertCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { SAMPLE_READING_TEST } from '../data/mockData';

interface InteractiveReadingTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignUp: () => void;
}

export const InteractiveReadingTestModal: React.FC<InteractiveReadingTestModalProps> = ({
  isOpen,
  onClose,
  onOpenSignUp,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const questions = SAMPLE_READING_TEST.questions;

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
            CEFR {SAMPLE_READING_TEST.cefrLevel} Diagnostic
          </span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs text-slate-500">Adaptive Comprehension</span>
        </div>

        <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-4">
          {SAMPLE_READING_TEST.title}
        </h3>

        {/* Reading Passage */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
          "{SAMPLE_READING_TEST.passage}"
        </div>

        {/* Questions Section */}
        <div className="space-y-6">
          {questions.map((q, qIndex) => {
            const chosen = selectedAnswers[q.id];
            const isCorrect = chosen === q.correctIndex;

            return (
              <div key={q.id} className="border-b border-slate-100 pb-5">
                <div className="flex items-start gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-blue-600 px-1.5 py-0.5 bg-blue-50 rounded">
                    Q{qIndex + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {q.question}
                  </h4>
                </div>

                <div className="space-y-2 pl-6">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = chosen === optIndex;
                    let optionStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700';

                    if (isSubmitted) {
                      if (optIndex === q.correctIndex) {
                        optionStyle = 'border-teal-500 bg-teal-50 text-teal-900 font-medium';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'border-rose-300 bg-rose-50 text-rose-900';
                      } else {
                        optionStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle = 'border-blue-600 bg-blue-50/60 text-blue-900 font-medium';
                    }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelect(q.id, optIndex)}
                        className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 cursor-pointer ${optionStyle}`}
                      >
                        <span className="font-mono font-bold text-[10px] uppercase w-4 text-slate-400">
                          {String.fromCharCode(65 + optIndex)}.
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Question Explanation if submitted */}
                {isSubmitted && (
                  <div className="mt-3 ml-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                      {isCorrect ? (
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                      )}
                      {isCorrect ? 'Correct Analysis' : 'Explanation'}:
                    </span>
                    <p>{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Score & Action bar */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          {!isSubmitted ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                {Object.keys(selectedAnswers).length} of {questions.length} answered
              </span>
              <button
                disabled={!allAnswered}
                onClick={() => setIsSubmitted(true)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all ${
                  allAnswered
                    ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                Submit Answers &amp; Check CEFR Score
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {score}/{questions.length}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">
                      Estimated CEFR Reading: {score === 3 ? 'C1 Advanced' : score === 2 ? 'B2 Upper-Intermediate' : 'B1 Intermediate'}
                    </h5>
                    <p className="text-xs text-slate-600">
                      Comprehension accuracy: {Math.round((score / questions.length) * 100)}%
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Test</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenSignUp();
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>Save Diagnostic to Free Profile &amp; Unlock Tailored Articles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
