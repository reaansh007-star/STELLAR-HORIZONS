/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { ARTICLES, Article } from './data/articles';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { AboutSection } from './components/AboutSection';
import { CosmicDispatch } from './components/CosmicDispatch';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Satellite, RotateCcw } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Saved bookmark IDs persisted in localStorage
  const [savedIds, setSavedIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem('stellar_saved_articles');
      return stored ? JSON.parse(stored) : [1]; // Article 1 saved by default
    } catch {
      return [1];
    }
  });

  // Dark mode theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('stellar_theme');
      return stored ? stored === 'dark' : true;
    } catch {
      return true;
    }
  });

  // Keep dark class on documentElement in sync
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('stellar_theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleSaveArticle = (id: number) => {
    setSavedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('stellar_saved_articles', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setShowSavedOnly(false);
  };

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return ARTICLES.filter((art) => {
      if (showSavedOnly && !savedIds.includes(art.id)) {
        return false;
      }
      if (activeCategory !== 'All' && art.category !== activeCategory) {
        return false;
      }
      if (query) {
        const matchesTitle = art.title.toLowerCase().includes(query);
        const matchesExcerpt = art.excerpt.toLowerCase().includes(query);
        const matchesAuthor = art.author.toLowerCase().includes(query);
        const matchesCategory = art.category.toLowerCase().includes(query);
        const matchesTakeaways = art.takeaways.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesExcerpt || matchesAuthor || matchesCategory || matchesTakeaways;
      }
      return true;
    });
  }, [activeCategory, searchQuery, showSavedOnly, savedIds]);

  // Modal navigation indices
  const currentIndex = selectedArticle
    ? filteredArticles.findIndex((a) => a.id === selectedArticle.id)
    : -1;
  const hasNext = currentIndex >= 0 && currentIndex < filteredArticles.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (direction === 'next' && hasNext) {
      setSelectedArticle(filteredArticles[currentIndex + 1]);
    } else if (direction === 'prev' && hasPrev) {
      setSelectedArticle(filteredArticles[currentIndex - 1]);
    }
  };

  const isFiltered = activeCategory !== 'All' || Boolean(searchQuery.trim()) || showSavedOnly;

  return (
    <div className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      
      {/* Top Navigation Bar */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDark={isDark}
        toggleTheme={toggleTheme}
        savedCount={savedIds.length}
        showSavedOnly={showSavedOnly}
        setShowSavedOnly={setShowSavedOnly}
        onResetFilters={resetFilters}
      />

      {/* Hero Section with Featured Spotlight */}
      <Hero
        featuredArticle={ARTICLES[0]}
        onOpenArticle={setSelectedArticle}
      />

      {/* Category Segmented Control & Filter Bar */}
      <CategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setShowSavedOnly(false);
        }}
        visibleCount={filteredArticles.length}
        totalCount={ARTICLES.length}
        isFiltered={isFiltered}
        onResetFilters={resetFilters}
      />

      {/* Main Articles Grid Section */}
      <main id="articles" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {showSavedOnly
                ? 'Your Saved Briefings'
                : activeCategory !== 'All'
                ? `${activeCategory}`
                : 'Latest Space Briefings'}
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              {showSavedOnly
                ? `Showing ${filteredArticles.length} research briefings bookmarked for review.`
                : 'Deep dives into planetary science, astrophysics, exoplanets, and aerospace technology.'}
            </p>
          </div>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 self-start sm:self-center hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          )}
        </div>

        {/* 10 Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isSaved={savedIds.includes(article.id)}
                onToggleSave={toggleSaveArticle}
                onOpenArticle={setSelectedArticle}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-20 bg-slate-900/40 rounded-2xl border border-dashed border-slate-800 my-8 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-400 mx-auto">
              <Satellite className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold font-display text-white">
              {showSavedOnly ? 'No Saved Articles' : 'No Research Briefings Found'}
            </h3>
            <p className="text-slate-400 text-xs max-w-sm mx-auto">
              {showSavedOnly
                ? 'You have not bookmarked any articles yet. Click the bookmark icon on any briefing to save it for later.'
                : 'Try adjusting your search keywords or switching category filters to see more results.'}
            </p>
            <div className="pt-2">
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition"
              >
                Reset Search & Filters
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Editorial Mission & Team Section */}
      <AboutSection />

      {/* The Cosmic Dispatch Newsletter */}
      <CosmicDispatch />

      {/* Editorial Team Contact Form */}
      <ContactSection />

      {/* Application Footer */}
      <Footer />

      {/* Full Article Reader Modal with Reading Progress & Takeaways */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          isSaved={savedIds.includes(selectedArticle.id)}
          onToggleSave={toggleSaveArticle}
          onNavigate={handleNavigate}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      )}
    </div>
  );
}
