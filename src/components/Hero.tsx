import React from 'react';
import { ArrowDown, Sparkles, BookOpen } from 'lucide-react';
import { Article } from '../data/articles';

interface HeroProps {
  featuredArticle: Article;
  onOpenArticle: (article: Article) => void;
}

export const Hero: React.FC<HeroProps> = ({ featuredArticle, onOpenArticle }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:py-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Mission */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Educational Science Publishing · 10 Research Briefings
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight leading-tight text-white">
              STELLAR HORIZONS
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-cyan-400 font-display">
              Unveiling the Universe & Beyond
            </p>

            <p className="text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Explore peer-reviewed astronomical discoveries, deep-space cosmology, rocket engineering, and the future of human spaceflight written for students, researchers, and space enthusiasts.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#articles"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-2 text-sm"
              >
                <span>Explore Articles</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-700/80 transition-all text-sm flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Editorial Mission</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-8 text-xs text-slate-400">
              <div>
                <span className="font-mono font-bold text-white text-sm">10</span> Peer-Reviewed Articles
              </div>
              <div>
                <span className="font-mono font-bold text-white text-sm">4</span> Scientific Domains
              </div>
              <div>
                <span className="font-mono font-bold text-white text-sm">100%</span> Open Access Science
              </div>
            </div>
          </div>

          {/* Right Column: Featured Spotlight Card */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onOpenArticle(featuredArticle)}
              className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-cyan-400/60 shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
              <div className="absolute top-4 right-4 z-20 px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Featured
              </div>
              
              <div className="h-56 sm:h-64 rounded-xl overflow-hidden mb-4 relative bg-slate-950">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex items-center gap-2 text-xs text-cyan-400 mb-1.5 font-semibold">
                <span>{featuredArticle.category}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">{featuredArticle.readTime}</span>
              </div>

              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {featuredArticle.title}
              </h3>

              <p className="text-slate-400 text-xs line-clamp-2 font-light leading-relaxed mb-4">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                <span className="text-slate-300 font-medium">{featuredArticle.author}</span>
                <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Analysis &rarr;
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
