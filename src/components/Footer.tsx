import React from 'react';
import { ArrowUp, Rocket } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/90 py-12 border-t border-slate-800 text-xs text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white font-display text-sm tracking-tight">
                STELLAR HORIZONS
              </span>
              <p className="text-[11px] text-slate-400">
                Peer-Reviewed Educational Space Publishing & Astrophysics Digest
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <a href="#articles" className="hover:text-cyan-400 transition-colors">
              Briefings
            </a>
            <a href="#categories-section" className="hover:text-cyan-400 transition-colors">
              Categories
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Editorial Board
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 transition ml-2"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Stellar Horizons. Educational space research and public domain cosmology.
          </div>
          <div className="flex items-center gap-4">
            <span>NASA / ESA / JAXA Telemetry References</span>
            <span>·</span>
            <span>CC BY-NC 4.0 Open Science License</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
