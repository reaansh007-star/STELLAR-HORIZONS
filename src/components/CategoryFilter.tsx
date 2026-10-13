import React from 'react';
import { CATEGORIES } from '../data/articles';
import { RotateCcw } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  visibleCount: number;
  totalCount: number;
  isFiltered: boolean;
  onResetFilters: () => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  visibleCount,
  totalCount,
  isFiltered,
  onResetFilters
}) => {
  return (
    <div
      id="categories-section"
      className="sticky top-20 z-40 bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800 py-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full py-0.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Counter & Reset Action */}
        <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400 whitespace-nowrap shrink-0">
          <div>
            Showing <strong className="text-cyan-400 font-mono tabular-nums">{visibleCount}</strong> of{' '}
            <span className="font-mono tabular-nums">{totalCount}</span> articles
          </div>

          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 hover:underline"
              title="Reset all filters and search"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
