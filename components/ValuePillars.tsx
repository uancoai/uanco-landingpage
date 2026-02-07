
import React, { useState, useRef, useEffect } from 'react';

const ValuePillars: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      num: '01',
      title: 'Time Saved.',
      description: 'Pre-screen clients before booking appointments. Automated compliance checks mean less admin work and more time focusing on what matters—your clients.'
    },
    {
      num: '02',
      title: 'Reduce Risk.',
      description: 'Catch suitability concerns early. Ensure every patient journey starts with a structured clinical review, protecting your practice and your patients.'
    },
    {
      num: '03',
      title: 'Total Clarity.',
      description: 'Know exactly what your clients want instantly. Detailed pre-screening results provide the data you need for expert clinical decisions.'
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIdx(index);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-zinc-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-4">THE Uanco FRAMEWORK</p>
          <h2 className="text-[32px] md:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
            Become a <span className="font-serif italic font-light text-zinc-400">safer clinic.</span>
          </h2>
        </div>

        {/* Premium Slider on mobile, Grid on desktop */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-8 lg:gap-10 md:overflow-visible md:pb-0 md:mx-0 items-stretch"
        >
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-full snap-center mr-6 md:mr-0 last:mr-0 flex"
            >
              {/* Fixed height 'h-[480px]' ensures all cards are exactly the same size on mobile */}
              <div className="flex-1 flex flex-col items-start text-left p-10 md:p-12 rounded-[2.5rem] bg-white border-[1.5px] border-[#1A1A1A] transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 h-[480px] md:h-auto md:min-h-[480px]">
                <div className="mb-8 w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-base font-bold tracking-tight shrink-0">
                  {pillar.num}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-[#1A1A1A]">
                  {pillar.title}
                </h4>
                <p className="text-base md:text-lg text-zinc-500 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium Mobile Scroll Indicator */}
        <div className="flex justify-center gap-3 mt-8 md:hidden">
          {pillars.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIdx === i ? 'w-10 bg-zinc-900' : 'w-2 bg-zinc-200'
              }`} 
            />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default ValuePillars;