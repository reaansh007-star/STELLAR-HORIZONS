import React from 'react';
import { ShieldCheck, Award, Globe, Telescope } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const team = [
    {
      name: "Dr. Alistair Vance",
      initials: "AV",
      role: "Senior Cosmologist & Lead Writer",
      bgGradient: "bg-cyan-600",
      bio: "Former research fellow at Cambridge Institute of Astronomy. Focuses on dark matter halos, cosmic microwave background, and early galaxy formation with JWST."
    },
    {
      name: "Cmdr. Sarah Jenkins",
      initials: "SJ",
      role: "Aerospace Systems Analyst",
      bgGradient: "bg-indigo-600",
      bio: "Aerospace propulsion engineer with 14 years analyzing orbital mechanics, closed-loop life support architectures, and magnetic plasma propulsion systems."
    },
    {
      name: "Dr. Maya Lin",
      initials: "ML",
      role: "Astrobiology Specialist",
      bgGradient: "bg-purple-600",
      bio: "Planetary geologist and biochemist studying chemosynthetic ecosystems in extreme environments and transmission spectroscopy of exoplanetary atmospheres."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
            Editorial Mission & Scientific Authority
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            About Stellar Horizons
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-light">
            An open educational publication dedicated to translating complex astrophysical discoveries into clear, accessible research briefings.
          </p>
        </div>

        {/* Mission Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-300 leading-relaxed font-light">
            <p>
              <strong>STELLAR HORIZONS</strong> was founded on the belief that humanity's expansion into the cosmos begins with accessible, scientifically rigorous education. We bridge the gap between high-level astrophysical papers and inquisitive minds worldwide.
            </p>

            <blockquote className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 italic font-normal relative">
              <span className="text-cyan-400 text-2xl font-serif leading-none mr-2">“</span>
              To demystify cosmic phenomena, inspire scientific curiosity, and make knowledge about humanity's future among the stars universally accessible.
            </blockquote>

            <p>
              Every briefing published on Stellar Horizons undergoes rigorous fact-checking against real telemetry, peer-reviewed astrophysics databases, and official space agency mission data (NASA, ESA, JAXA).
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-xs">Empirical Integrity</div>
                  <div className="text-[11px] text-slate-400">Strictly grounded in verified peer review.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                <Telescope className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-xs">Mission Grounded</div>
                  <div className="text-[11px] text-slate-400">Direct telemetry from deep space probes.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Team Panel */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className="text-base font-bold font-display text-white">The Editorial Board</h3>
              <span className="text-[11px] text-cyan-400 font-mono">Academic Fellows</span>
            </div>

            <div className="space-y-4">
              {team.map((member) => (
                <div key={member.name} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl ${member.bgGradient} font-bold text-xs flex items-center justify-center text-white shrink-0 shadow-md`}>
                    {member.initials}
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white">{member.name}</div>
                    <div className="text-[11px] text-cyan-400 font-medium">{member.role}</div>
                    <p className="text-[11px] text-slate-400 leading-snug font-light">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
