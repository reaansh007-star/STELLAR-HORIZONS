import React, { useState } from 'react';
import { Search, Sun, Moon, Bookmark, Menu, X, Rocket } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  savedCount: number;
  showSavedOnly: boolean;
  setShowSavedOnly: (val: boolean) => void;
  onResetFilters: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  isDark,
  toggleTheme,
  savedCount,
  showSavedOnly,
  setShowSavedOnly,
  onResetFilters
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    if (anchor === '#articles') {
      onResetFilters();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onResetFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-3 group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold font-display tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              STELLAR HORIZONS
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400">
              Unveiling the Universe
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm">
          <a
            href="#articles"
            onClick={() => handleNavClick('#articles')}
            className="text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
          >
            Articles
          </a>
          <a
            href="#categories-section"
            className="text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
          >
            Categories
          </a>
          <a
            href="#about"
            className="text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
          >
            About & Team
          </a>
          <a
            href="#contact"
            className="text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Actions & Search */}
        <div className="flex items-center space-x-3 shrink-0">
          {/* Search Box */}
          <div className="relative hidden sm:block w-44 lg:w-60">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white dark:text-white light:text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
            />
          </div>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              showSavedOnly
                ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400'
                : 'bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-300 border-slate-700/60 hover:border-slate-600'
            }`}
            title="View saved articles"
            aria-label="View saved articles"
          >
            <Bookmark className={`w-4 h-4 ${showSavedOnly ? 'fill-cyan-400 text-cyan-400' : ''}`} />
            {savedCount > 0 && (
              <span className="font-mono text-[11px] tabular-nums">{savedCount}</span>
            )}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-700/60"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/60"
            aria-label="Open mobile navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 border-t border-slate-800 bg-slate-950/95 space-y-4">
          <div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 font-medium text-sm">
            <a
              href="#articles"
              onClick={() => handleNavClick('#articles')}
              className="py-1 text-slate-200 hover:text-cyan-400"
            >
              All Articles
            </a>
            <a
              href="#categories-section"
              onClick={() => handleNavClick('#categories-section')}
              className="py-1 text-slate-200 hover:text-cyan-400"
            >
              Research Categories
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('#about')}
              className="py-1 text-slate-200 hover:text-cyan-400"
            >
              About & Editorial Team
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="py-1 text-slate-200 hover:text-cyan-400"
            >
              Contact Editorial Staff
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
