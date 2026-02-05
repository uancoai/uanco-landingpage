
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const RegulatoryShift: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { 
      title: "1. Total Journey Oversight", 
      text: "Regulators now scrutinise the entire client journey from the first enquiry to post-procedure care. Informal records like Instagram DMs are no longer sufficient; every interaction must be documented." 
    },
    { 
      title: "2. Mandatory Licensing", 
      text: "National licensing makes auditable, digital documentation a legal requirement. By 2026, the ability to provide a timestamped \"decision trail\" will be the baseline for professional legitimacy." 
    },
    { 
      title: "3. Audit-Ready Protection", 
      text: "Uanco eliminates the \"evidentiary vacuum\" that leaves practitioners vulnerable during claims. We build the defensible paper trail your clinic needs to survive an audit." 
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 lg:py-40 bg-white overflow-hidden relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[600px] bg-blue-100/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Container: Rounded corners on all screens for luxury feel */}
        <div className="bg-[#1A1A1A] rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
          {/* Architectural Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 hidden md:block"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 md:mb-6">Aesthetics Industry Evolution</p>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.15]">
                Why this <br />
                <span className="font-serif italic font-light text-zinc-400">matters now.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                  The UK aesthetics landscape is shifting. With new licensing standards and stricter oversight coming in 2026, clinical documentation is no longer optional.
                </p>
              </div>
            </div>

            {/* Compact FAQ Section */}
            <div className="space-y-3 md:space-y-4">
              {items.map((item, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => toggleAccordion(i)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group"
                    aria-expanded={openIndex === i}
                  >
                    <h4 className="text-white font-bold text-sm md:text-lg group-hover:text-zinc-300 transition-colors pr-4">
                      {item.title}
                    </h4>
                    <ChevronDown 
                      size={18} 
                      className={`text-zinc-500 transition-transform duration-500 ease-in-out flex-shrink-0 ${openIndex === i ? 'rotate-180 text-white' : ''}`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                        {item.text}
                      </p>
                    </div>
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

export default RegulatoryShift;
