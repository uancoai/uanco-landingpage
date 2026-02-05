
import React from 'react';
import { ICONS } from '../constants';

const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: React.cloneElement(ICONS.Clock as React.ReactElement<any>, { className: "w-5 h-5 md:w-8 md:h-8" }),
      title: 'Time Saved.',
      description: 'Pre-screen clients before booking.'
    },
    {
      icon: React.cloneElement(ICONS.Shield as React.ReactElement<any>, { className: "w-5 h-5 md:w-8 md:h-8" }),
      title: 'Reduce Risk.',
      description: 'Catch suitability concerns early.'
    },
    {
      icon: React.cloneElement(ICONS.Lightbulb as React.ReactElement<any>, { className: "w-5 h-5 md:w-8 md:h-8" }),
      title: 'Total Clarity.',
      description: 'Know what clients want instantly.'
    }
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#FFF9FA] to-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gray-400 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-2 md:mb-2">The Uanco Framework</p>
          <h2 className="text-[24px] sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-tight mb-2">
            Become a <span className="font-serif italic font-light text-zinc-400">safer clinic.</span>
          </h2>
        </div>

        {/* Compact Horizontal Grid on Mobile, Spacious Grid on Desktop */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-3 md:p-10 rounded-2xl md:rounded-[3rem] bg-white border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
              <div className="mb-3 md:mb-10 p-2.5 md:p-7 rounded-xl md:rounded-[2rem] bg-zinc-50 border border-zinc-50 text-[#1A1A1A] transition-all duration-500 group-hover:scale-105 group-hover:bg-white group-hover:shadow-md">
                {pillar.icon}
              </div>
              <h4 className="text-[11px] md:text-2xl font-bold mb-1 md:mb-5 tracking-tight text-[#1A1A1A] leading-tight">
                {pillar.title}
              </h4>
              <p className="text-[9px] md:text-base text-gray-400 md:text-gray-500 font-normal leading-tight md:leading-relaxed">
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