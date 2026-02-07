
import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { ViewType } from '../constants';

interface HeroProps {
  onNavigate: (view: ViewType, anchor?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-16 pb-20 md:pt-32 md:pb-40 overflow-hidden bg-white">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-emerald-50/40 blur-[120px] rounded-full pointer-events-none -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h1 className="flex flex-col gap-0.5 mb-8 md:mb-10">
          <span className="text-[40px] md:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.05] md:leading-[1.1]">
            Stay protected
          </span>
          <span className="text-[40px] md:text-7xl font-bold tracking-tight leading-[1.05] md:leading-[1.1] text-[#1A1A1A]">
            Get <span className="text-[#1A1A1A]">Uanco</span>
          </span>
        </h1>

        {/* Subtext */}
        <div className="max-w-[320px] md:max-w-xl mx-auto mb-8 md:mb-10">
          <p className="text-[17px] md:text-2xl text-zinc-600 leading-[1.5] md:leading-relaxed font-normal">
            In <strong>2026</strong> new regulatory direction requires <strong>aesthetic practitioners</strong> to have records of all clients screening.
          </p>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-2 mb-8 md:mb-10 text-zinc-500 font-medium text-sm md:text-base">
          <CheckCircle2 size={16} className="text-[#00D37F]" />
          <span className="uppercase tracking-wider">1000+ SUCCESSFUL PRE-SCREENS</span>
        </div>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[280px] sm:max-w-none">
          <button 
            onClick={() => onNavigate('home', '#pricing')}
            className="w-full sm:w-auto px-12 py-5 rounded-full text-white font-bold text-lg bg-[#000000] hover:bg-zinc-900 transition-all shadow-2xl shadow-black/10 active:scale-95 flex items-center justify-center"
          >
            Get Early Access
          </button>
          <p className="text-[11px] md:text-sm font-medium text-zinc-400 uppercase tracking-widest">
            Limited spots available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;