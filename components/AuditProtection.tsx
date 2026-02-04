
import React from 'react';
import { ShieldCheck, Calendar, Clock } from 'lucide-react';

const AuditProtection: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-white" id="compliance">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="p-10 rounded-[3rem] bg-zinc-900 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ShieldCheck size={120} />
               </div>
               
               <div className="relative z-10 space-y-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">The Defensible Record</p>
                    <h3 className="text-3xl font-bold font-serif italic">Verified Audit Trail</h3>
                  </div>

                  <div className="space-y-6">
                    {[
                      { label: "Initial Intake", time: "14:02 GMT", date: "12 Oct 2024" },
                      { label: "Medical Screening Complete", time: "14:08 GMT", date: "12 Oct 2024" },
                      { label: "Practitioner Decision Recorded", time: "15:20 GMT", date: "12 Oct 2024" }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-6 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                         <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                           <Clock size={16} />
                         </div>
                         <div className="flex-1">
                           <p className="text-sm font-bold">{step.label}</p>
                           <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-widest">{step.date} • {step.time}</p>
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Immutable Timestamped Log</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-8">
              Professional <br />
              <span className="font-serif italic font-light text-zinc-400">Protection.</span>
            </h2>
            <div className="space-y-10">
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Documented Rationale</h4>
                <p className="text-gray-500 leading-relaxed max-w-xl">
                  Move beyond unrecorded DMs and fragmented emails. Uanco records the entire dialogue and suitability screening into a timestamped PDF, protecting you from future disputes.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Compliance-First Storage</h4>
                <p className="text-gray-500 leading-relaxed max-w-xl">
                  Every interaction is securely stored and ready for audit. Meet the increasing demands of insurers who now require rigorous proof of pre-treatment screening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditProtection;
