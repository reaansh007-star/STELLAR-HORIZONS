import React, { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export const CosmicDispatch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          Weekly Scientific Digest
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
          Join The Cosmic Dispatch
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
          Receive curated weekly intelligence on deep-space discoveries, astrophysics breakthroughs, and commercial launch schedules directly in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-4">
          <div className="relative flex-grow">
            <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your academic or personal email..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20 whitespace-nowrap"
          >
            <span>Subscribe</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {subscribed && (
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-4 py-2.5 rounded-xl transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Demonstration Mode: You have successfully subscribed to The Cosmic Dispatch!</span>
          </div>
        )}

        <p className="text-[11px] text-slate-500 pt-1">
          Zero marketing spam. Unsubscribe at any time with one click.
        </p>

      </div>
    </section>
  );
};
