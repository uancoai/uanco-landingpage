
import React, { useState } from 'react';
import { Check, Loader2, Sparkles, Users } from 'lucide-react';

const PricingFounder: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartSetup = () => {
    setIsLoading(true);
    window.location.href = 'https://buy.stripe.com/test_8x23cuewBaBMbX9a5Z63K01';
  };

  return (
    <section className="py-20 md:py-32 bg-zinc-50/30" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-[42px] md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-4">
            Founder <span className="font-serif italic font-light text-zinc-400">Access.</span>
          </h2>
          <p className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto">
            Join a select group of high-standard practitioners shaping the future of clinical protection.
          </p>
        </div>

        <div className="max-w-[480px] mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] border border-zinc-100 shadow-2xl p-8 md:p-12">
          {/* Header Badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100">
              <Users size={14} className="text-rose-500" />
              <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest">ONLY 10 SPOTS LEFT</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-white">
              <Sparkles size={14} className="text-zinc-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">SAVING £200</p>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="bg-zinc-50/50 rounded-[2rem] p-8 mb-12 border border-zinc-100">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">MONTHLY SUBSCRIPTION</p>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-6xl font-bold text-red-600 tracking-tighter">£49</span>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-zinc-400">/mo <span className="line-through text-zinc-300 ml-2">£99</span></span>
              </div>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">LIFETIME FOUNDER RATE</p>
            
            <div className="h-px bg-zinc-200 my-8"></div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-zinc-500">Implementation setup</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-red-600">£0</span>
                <span className="text-lg font-bold text-zinc-300 line-through">£150</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
              <Sparkles size={12} className="text-emerald-500 fill-emerald-500" />
              <p className="text-[9px] font-bold text-emerald-700 uppercase tracking-widest">FREE TODAY - CODE: FOUNDERACCESS</p>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-10 mb-12">
            <div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-6">What's included</h4>
              <ul className="space-y-4">
                {[
                  "Lifetime founder rate",
                  "Clinical triage workflow",
                  "Audit-ready documentation",
                  "Clinic insights dashboard",
                  "Priority feature access",
                  "Dedicated support team"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-medium text-zinc-600">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Details Sub-card */}
            <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">IMPLEMENTATION INCLUDES</p>
              <ul className="space-y-4">
                {['Clinic profile build', 'Policy alignment setup', 'Staff onboarding session'].map((benefit) => (
                  <li key={benefit} className="text-sm font-bold text-zinc-700 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00D37F] rounded-full"></div> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <button 
            onClick={handleStartSetup}
            disabled={isLoading}
            className="w-full py-5 rounded-full bg-black text-white font-bold text-lg hover:bg-zinc-900 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl shadow-black/10"
          >
            {isLoading ? <Loader2 size={24} className="animate-spin" /> : 'Claim founder access'}
          </button>
          
          <div className="mt-8 text-center">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">SECURE CHECKOUT BY STRIPE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFounder;
