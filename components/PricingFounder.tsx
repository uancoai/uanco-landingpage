
import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

const PricingFounder: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartSetup = () => {
    setIsLoading(true);
    // Redirecting directly to the user-provided Stripe checkout link
    window.location.href = 'https://buy.stripe.com/test_8x23cuewBaBMbX9a5Z63K01';
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#F0FFF4]/40 via-[#F9F9FB] to-[#F0F7FF]/40" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            Founder <span className="font-serif italic font-light text-zinc-400">Access.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Join a select group of high-standard practitioners shaping the future of clinical protection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[4rem] border border-zinc-100 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-12 lg:p-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] leading-tight">Exclusive offer</h3>
                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                    ENDING SOON
                  </p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-500 line-through mb-1">
                    £99
                  </span>
                  <div>
                    <span className="text-5xl font-bold text-[#1A1A1A]">£49</span>
                    <span className="text-zinc-400 font-medium">/mo</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "3-month minimum commitment",
                  "Structured clinical triage workflow", 
                  "Defensible clinical audit trails", 
                  "Clinic insight dashboard", 
                  "Priority feature access", 
                  "Dedicated implementation support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleStartSetup}
                disabled={isLoading}
                className="w-full py-4 rounded-full bg-[#1A1A1A] text-white font-bold text-lg hover:bg-black transition-all active:scale-95 shadow-xl shadow-black/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Redirecting to Secure Checkout...
                  </>
                ) : (
                  'Sign up now'
                )}
              </button>
              <p className="mt-4 text-center text-[10px] text-zinc-400 uppercase tracking-widest">
                Secure checkout by Stripe
              </p>
            </div>

            <div className="md:w-[320px] bg-zinc-50 border-l border-zinc-100 p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6">
                 <div>
                   <h4 className="text-xl font-bold mb-2">Clinical Implementation</h4>
                   <div className="flex items-center gap-2">
                     <p className="text-3xl font-bold text-[#1A1A1A]">£150</p>
                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-500 line-through">
                       £300
                     </span>
                   </div>
                   <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">One-time Implementation Fee</p>
                 </div>
                 <div className="space-y-3 pt-6 border-t border-zinc-200">
                   <p className="text-xs leading-relaxed text-gray-500">
                     We don't just give you a login. We build your clinic profile, align your tone-of-voice and integrate your specific medical policies.
                   </p>
                   <ul className="space-y-2">
                     <li className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                       <div className="w-1 h-1 bg-black rounded-full"></div> Profile Build
                     </li>
                     <li className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                       <div className="w-1 h-1 bg-black rounded-full"></div> Policy Alignment
                     </li>
                     <li className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                       <div className="w-1 h-1 bg-black rounded-full"></div> Staff Onboarding
                     </li>
                   </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFounder;
