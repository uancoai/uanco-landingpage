
import React, { useState } from 'react';
import { Check, Loader2, Sparkles, TrendingDown, Users } from 'lucide-react';

const PricingFounder: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // To update the spots manually, change the number below:
  const spotsLeft = 10;

  const handleStartSetup = () => {
    setIsLoading(true);
    // Redirecting directly to the user-provided Stripe checkout link
    window.location.href = 'https://buy.stripe.com/8x228j7mm8CXaBZcz4bAs02';
  };

  return (
    <section className="pt-8 pb-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#F0FFF4]/40 via-[#F9F9FB] to-[#F0F7FF]/40" id="pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
           <h2 className="text-[32px] sm:text-4xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-4 md:mb-6">
            Founder <span className="font-serif italic font-light text-zinc-400">Access.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-6">
            Join a select group of high-standard practitioners shaping the future of clinical protection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card Container */}
          <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] border border-zinc-100 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] relative">
            
            {/* 1. Subscription Header & Features */}
            <div className="p-8 md:p-12 lg:p-16 pb-6 md:pb-10 relative">
              
              {/* Premium Mobile Badge & Status Area */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-10 md:mb-12 gap-6 sm:gap-4">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">Exclusive offer</h3>
                  
                  {/* Scarcity Badge */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-rose-50 border border-rose-100 w-fit shadow-sm">
                    <Users size={14} className="text-rose-500" />
                    <p className="text-[10px] font-bold text-rose-600 uppercase tracking-[0.1em] leading-none">
                      Only {spotsLeft} founder spots left
                    </p>
                  </div>
                </div>

                {/* Immediate Saving Badge */}
                <div className="flex flex-col items-start sm:items-end group">
                  <div className="bg-[#1A1A1A] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-white/10 mb-2 transition-transform group-hover:scale-105">
                    <TrendingDown size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Saving £200</span>
                  </div>
                  <p className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold ml-1 sm:ml-0 opacity-70">Applied at checkout</p>
                </div>
              </div>

              {/* Price Display */}
              <div className="flex flex-col mb-10 md:mb-12">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-zinc-300 line-through decoration-zinc-400 decoration-2">
                    £99
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-6xl md:text-7xl font-bold text-red-600 tracking-tighter">£49</span>
                    <span className="text-zinc-400 font-bold ml-2 text-xl">/mo</span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] mt-2">Limited Founder Rate</p>
              </div>
              
              <ul className="space-y-5 md:space-y-6">
                {[
                  "Founders rate for lifetime",
                  "Structured clinical triage workflow", 
                  "Defensible clinical audit trails", 
                  "Clinic insight dashboard", 
                  "Priority feature access", 
                  "Dedicated implementation support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex-shrink-0 flex items-center justify-center text-white mt-0 shadow-sm">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="leading-snug font-medium pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Clinical Implementation Sidebar */}
            <div className="md:row-span-2 bg-zinc-50 border-y md:border-y-0 md:border-l border-zinc-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-10">
                 <div className="space-y-4">
                   <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Implementation</h4>
                   <div className="flex items-center gap-3">
                     <p className="text-5xl font-bold text-red-600 tracking-tighter">£0</p>
                     <span className="text-xl font-bold text-zinc-300 line-through">
                       £150
                     </span>
                   </div>
                   <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm w-fit">
                      <Sparkles size={12} className="text-emerald-500 fill-emerald-500" />
                      <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest leading-none">Waiver if you sign up today</p>
                    </div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                      CODE - FOUNDERACCESS
                    </p>
                   </div>
                 </div>

                 <div className="space-y-5 pt-10 border-t border-zinc-200">
                   <p className="text-xs leading-relaxed text-gray-500 font-semibold">
                     Your clinic profile, tone-of-voice alignment and policy integration.
                   </p>
                   <ul className="space-y-4">
                     {['Profile Build', 'Policy Alignment', 'Staff Onboarding'].map((benefit) => (
                       <li key={benefit} className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-sm"></div> {benefit}
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
            </div>

            {/* 3. CTA Action Area */}
            <div className="p-8 md:p-12 lg:p-16 pt-2 md:pt-4 pb-12 md:pb-16 bg-white md:bg-transparent">
              <button 
                onClick={handleStartSetup}
                disabled={isLoading}
                className="w-full py-5 rounded-full bg-[#1A1A1A] text-white font-bold text-base md:text-lg hover:bg-black transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-black/10"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Redirecting...
                  </>
                ) : (
                  'Sign up now'
                )}
              </button>
              <div className="mt-8 flex flex-col items-center gap-1 opacity-50">
                <p className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                  Secure checkout by Stripe
                </p>
                <div className="h-px w-10 bg-zinc-200 mt-1"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFounder;