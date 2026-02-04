
import React from 'react';
import { ICONS, COLORS } from '../constants';

const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: ICONS.Clock,
      title: 'Time Saved.',
      description: 'Pre-screen clients before booking so your time is protected.'
    },
    {
      icon: ICONS.Shield,
      title: 'Reduce Risk.',
      description: 'Catch suitability concerns early and keep clear, reliable records.'
    },
    {
      icon: ICONS.Lightbulb,
      title: 'Total Clarity.',
      description: 'Know what clients want, what’s slowing bookings, and where attention is needed.'
    }
  ];

  return (
    <section className="py-24 lg:py-40 bg-gradient-to-b from-white via-[#FFF9FA] to-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">The Uanco Framework</p>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-[#1A1A1A]">
            Designed for the <span className="font-serif italic font-light text-zinc-400">smart clinic.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-10 rounded-[3rem] bg-white border border-zinc-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/5">
              <div className="mb-10 p-7 rounded-[2rem] bg-zinc-50 border border-zinc-100 text-[#1A1A1A] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-rose-100/50">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold mb-5 tracking-tight text-[#1A1A1A]">
                {pillar.title}
              </h4>
              <p className="text-gray-500 font-normal leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
