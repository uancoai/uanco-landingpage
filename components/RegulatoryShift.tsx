
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const RegulatoryShift: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-white overflow-hidden relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#1A1A1A] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
          {/* Architectural Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-6">Aesthetics Industry Evolution</p>
              <h2 className="text-4xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                Why this <br />
                <span className="font-serif italic font-light text-zinc-400">matters now.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-zinc-400 leading-relaxed">
                  The UK aesthetics landscape is shifting. With new licensing standards and stricter oversight coming in 2026, clinical documentation is no longer optional.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { 
                  title: "1. Total Journey Oversight", 
                  text: "Regulators now scrutinise the entire client journey from the first enquiry to post-procedure care. Informal records like Instagram DMs are no longer sufficient; every interaction must be documented to avoid \"regulatory blind spots.\"" 
                },
                { 
                  title: "2. Mandatory Licensing", 
                  text: "National licensing makes auditable, digital documentation a legal requirement for every clinic. By 2026, the ability to provide a timestamped \"decision trail\" will be the baseline for professional legitimacy and operation." 
                },
                { 
                  title: "3. Audit-Ready Protection", 
                  text: "Uanco eliminates the \"evidentiary vacuum\" that leaves practitioners vulnerable during claims. We build the defensible paper trail your clinic needs to survive a CQC audit or an insurance challenge." 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
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
