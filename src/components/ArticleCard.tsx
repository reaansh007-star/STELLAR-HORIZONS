import React from 'react';
import { Article } from '../data/articles';
import { ChevronRight, Bookmark, Compass } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (id: number) => void;
  onOpenArticle: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isSaved,
  onToggleSave,
  onOpenArticle
}) => {
  return (
    <article
      onClick={() => onOpenArticle(article)}
      className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
    >
      <div>
        {/* Banner image with overlay and fallbacks */}
        <div className="h-48 overflow-hidden relative border-b border-slate-800 bg-slate-950">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Hide broken image so fallback gradient container is revealed
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback container with domain icon */}
          <div className={`absolute inset-0 bg-gradient-to-br ${article.fallbackGradient} -z-10 flex items-center justify-center text-slate-600`}>
            <Compass className="w-12 h-12 opacity-30 text-cyan-400" />
          </div>

          {/* Clean Category Label */}
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-cyan-400 text-[10px] font-bold uppercase rounded-md tracking-wider">
            {article.category}
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(article.id);
            }}
            className={`absolute top-3 right-3 p-1.5 rounded-lg backdrop-blur-md border transition-all ${
              isSaved
                ? 'bg-cyan-500/90 text-slate-950 border-cyan-400 shadow-sm'
                : 'bg-slate-950/80 text-slate-400 border-slate-700/60 hover:text-white hover:border-slate-500'
            }`}
            title={isSaved ? "Remove from bookmarks" : "Save for later"}
            aria-label={isSaved ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-slate-950 text-slate-950' : ''}`} />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-2">
          {/* Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{article.date}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-slate-400 text-xs line-clamp-2 font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Author & CTA */}
      <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-slate-800/60 mt-2">
        <span className="text-xs font-semibold text-slate-300">
          {article.author}
        </span>
        <span className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Read Article
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
