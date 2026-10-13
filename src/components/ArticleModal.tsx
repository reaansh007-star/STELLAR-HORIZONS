import React, { useEffect, useRef, useState } from 'react';
import { Article } from '../data/articles';
import { X, Bookmark, Share2, Compass, ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: number) => void;
  onNavigate: (direction: 'next' | 'prev') => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isSaved,
  onToggleSave,
  onNavigate,
  hasNext,
  hasPrev
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNavigate('next');
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onNavigate('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNavigate, hasNext, hasPrev]);

  // Reset scroll and progress when article changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setScrollProgress(0);
    }
  }, [article.id]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const total = scrollHeight - clientHeight;
      if (total > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / total) * 100));
        setScrollProgress(progress);
      }
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        ref={scrollRef}
        onScroll={handleScroll}
        className="bg-slate-900 text-slate-100 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-700/80 shadow-2xl relative my-auto no-scrollbar flex flex-col"
      >
        {/* Real-time Reading Progress Bar */}
        <div className="sticky top-0 left-0 w-full h-1.5 bg-slate-800 z-40">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Sticky Header Bar */}
        <div className="sticky top-1.5 z-30 bg-slate-900/95 backdrop-blur-md px-6 py-3.5 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-[10px] font-bold uppercase rounded-md tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-mono tabular-nums">
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-medium transition"
              title="Toggle reading font size"
            >
              {fontSize === 'normal' ? 'Aa+' : 'Aa-'}
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-2 rounded-xl border transition ${
                isSaved
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700/60'
              }`}
              title={isSaved ? "Saved" : "Save article"}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-cyan-400 text-cyan-400' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition flex items-center gap-1.5"
              title="Share article link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition ml-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Article Content */}
        <div className="p-6 sm:p-10 space-y-8 flex-grow">
          {/* Title and metadata */}
          <div>
            <h1
              id="modal-title"
              className="text-2xl sm:text-4xl font-bold font-display text-white leading-tight mb-4 tracking-tight"
            >
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 py-3 border-y border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="text-slate-500">({article.authorRole})</span>
              </div>
              <span className="text-slate-600">·</span>
              <span>Published {article.date}</span>
              <span className="text-slate-600">·</span>
              <span>100% Peer-Reviewed Educational Material</span>
            </div>
          </div>

          {/* High-res Image Banner */}
          <div className="h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${article.fallbackGradient} -z-10 flex items-center justify-center`}>
              <Compass className="w-16 h-16 opacity-30 text-cyan-400" />
            </div>
          </div>

          {/* Formatted Article Body */}
          <div
            className={`space-y-6 text-slate-300 font-light leading-relaxed ${
              fontSize === 'large' ? 'text-lg sm:text-xl leading-8' : 'text-sm sm:text-base'
            }`}
          >
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                {sec.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white pt-4 pb-1">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-slate-200">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Key Scientific Takeaways
            </h3>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-200 space-y-2 font-light">
              {article.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="leading-relaxed">
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          {/* Article Navigation & Close */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                disabled={!hasPrev}
                onClick={() => onNavigate('prev')}
                className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                  hasPrev
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous Briefing
              </button>

              <button
                disabled={!hasNext}
                onClick={() => onNavigate('next')}
                className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                  hasNext
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                }`}
              >
                Next Briefing
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
