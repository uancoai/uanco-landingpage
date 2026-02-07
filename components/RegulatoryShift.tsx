
import React from 'react';
import { Calendar, Shield, FileText } from 'lucide-react';
import { ViewType } from '../constants';

interface RegulatoryShiftProps {
  onNavigate?: (view: ViewType, anchor?: string) => void;
}

const RegulatoryShift: React.FC<RegulatoryShiftProps> = ({ onNavigate }) => {
  const cards = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "2026 Regulations",
      desc: "New UK licensing standards mandate comprehensive client screening documentation for all aesthetic practitioners.",
      btnText: "Compliance isn't optional"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Practice Protection",
      desc: "Audit-ready records protect your business from regulatory penalties and demonstrate professional standards.",
      btnText: "Stay audit-ready"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Industry Evolution",
      desc: "The aesthetics landscape is professionalizing. Clinical documentation separates leading practitioners from the rest.",
      btnText: "Lead the industry"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4">THE SHIFT</p>
          <h2 className="text-[32px] md:text-6xl font-bold tracking-tight text-[#1A1A1A]">
            Why this <span className="font-serif italic font-light text-zinc-400">matters.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] text-white flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">{card.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                {card.desc}
              </p>
              <button className="mt-auto px-6 py-2.5 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                {card.btnText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-zinc-400 font-medium">Don't wait until it's too late</p>
          <button 
            onClick={() => onNavigate?.('home', '#pricing')}
            className="text-sm font-bold text-[#1A1A1A] underline decoration-2 underline-offset-8 hover:opacity-70 transition-opacity"
          >
            Secure your founder rate now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryShift;
