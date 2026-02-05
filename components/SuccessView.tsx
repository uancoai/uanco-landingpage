import React, { useEffect } from 'react';
import { Mail, ClipboardList, UserCheck, Shield } from 'lucide-react';

const SuccessView: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-24">
      <div className="max-w-xl w-full">
        {/* Subtle Identity Marker */}
        <div className="flex justify-center mb-16">
          <div className="flex items-end select-none opacity-20">
            <span className="text-2xl font-serif italic font-bold text-[#1A1A1A] lowercase tracking-tighter leading-none">
              uanco.
            </span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full mb-[3px] ml-0.5"></span>
          </div>
        </div>

        {/* Primary Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4">
            Onboarding Initiated
          </h1>
          <p className="text-zinc-500 font-medium">
            Payment received — thank you.
          </p>
        </div>

        {/* Process Explanation */}
        <div className="text-center mb-16">
          <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
            We’ve started setting up your clinic profile so Uanco reflects your treatments, policies and suitability rules.
          </p>
        </div>

        {/* Next Steps - Structured List */}
        <div className="space-y-8 mb-20">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <Mail size={18} className="text-zinc-300" strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#1A1A1A]">Check your email</h4>
              <p className="text-sm text-zinc-400">
                We’ve sent your next steps, including the intake link.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <ClipboardList size={18} className="text-zinc-300" strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#1A1A1A]">Complete the clinical intake form</h4>
              <p className="text-sm text-zinc-400">
                This short form helps us tailor Uanco’s clinical intelligence to your practice — including how enquiries are handled, what suitability rules apply and where practitioner judgement is required.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <UserCheck size={18} className="text-zinc-300" strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#1A1A1A]">Setup review</h4>
              <p className="text-sm text-zinc-400">
                Once your intake is complete, a member of the Uanco team will review your setup and confirm everything is aligned before go-live.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Authority Statement */}
        <div className="border-t border-zinc-100 pt-10 text-center">
          <p className="text-xs text-zinc-400 leading-relaxed font-medium">
            Clinical decisions are never automated — practitioner judgement stays in control.
          </p>
        </div>

        {/* Footer Trust Signals */}
        <div className="mt-24 flex justify-center items-center gap-4 text-zinc-300">
          <Shield size={12} strokeWidth={2} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">ICO registered</span>
          <span className="text-[10px] opacity-30">•</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">GDPR compliant</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
