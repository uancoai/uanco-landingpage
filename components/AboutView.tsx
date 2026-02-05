
import React, { useEffect } from 'react';
import { Shield, FileText, CheckCircle2, UserCheck, Network, ZapOff, User, AlertTriangle, Check, UserCircle, ChevronLeft, ArrowRight } from 'lucide-react';
import { ViewType } from '../constants';

const SUPPORT_DATA = [
  { 
    title: "Practitioners", 
    desc: "Experienced injectors who prioritise clinical standards and want support around early screening and decision-making.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Clinic Owners", 
    desc: "Forward-thinking owners preparing for 2026, requiring consistent oversight across teams and patient journeys.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Educators", 
    desc: "Academies supporting graduates beyond the classroom, helping them transition into practice with safer processes.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  }
];

interface AboutViewProps {
  onNavigate: (view: ViewType, anchor?: string) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 bg-white">
      {/* Back Button Container */}
      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12">
        <button 
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2 text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-[#1A1A1A] transition-colors outline-none"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
      </div>

      {/* 1. Hero: Why Uanco Exists */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-36 overflow-hidden border-b border-zinc-100">
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.03] hidden md:block">
          <svg width="100%" height="100%" viewBox="0 0 400 800" fill="none">
            <path d="M100 0V800M200 0V800M300 0V800" stroke="black" strokeWidth="1" />
            <path d="M0 200H400M0 400H400M0 600H400" stroke="black" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div className="flex flex-col items-start relative max-w-3xl">
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-6 md:mb-10 reveal">The Mission</p>
              
              <h1 className="flex flex-col gap-1 mb-8 md:mb-10 reveal reveal-delay-1">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.15] text-[#1A1A1A]">
                  Supporting safer decisions
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.15] text-[#1A1A1A]">
                  before booking.
                </span>
              </h1>

              <div className="max-w-xl mb-10 space-y-4 md:space-y-6 reveal reveal-delay-2">
                <p className="text-sm md:text-lg lg:text-xl text-gray-500 leading-relaxed font-light">
                  In aesthetic practice, risk doesn’t usually start during treatment. 
                  It starts earlier in enquiries and suitability decisions.
                </p>
                <p className="text-sm md:text-lg lg:text-xl text-gray-500 leading-relaxed font-light">
                  Uanco brings structure to this stage, helping practitioners save time, reduce risk and gain clarity without changing how they practise.
                </p>
                <p className="text-base md:text-xl leading-relaxed font-medium text-[#1A1A1A]">
                  It doesn’t replace judgement. It supports it.
                </p>
              </div>

              {/* Hero CTA Button */}
              <div className="reveal reveal-delay-3 mb-10 lg:mb-0">
                <button 
                  onClick={() => onNavigate('home', '#pricing')}
                  className="px-10 py-4 rounded-full bg-[#1A1A1A] text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-[0.98] flex items-center gap-3"
                >
                  Sign up now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Visual Card Component - Proportionally Optimized */}
            <div className="relative reveal reveal-delay-3 flex justify-center lg:block">
              <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-tr from-zinc-100 to-transparent rounded-[2.5rem] md:rounded-[4rem] -z-10 opacity-50"></div>
              <div className="w-full max-w-[360px] md:max-w-[400px] bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-zinc-100 relative overflow-hidden">
                <div className="flex items-center justify-between mb-8 md:mb-10">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
                      <User size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-xl font-serif font-bold text-[#1A1A1A]">Emily Davis</h4>
                      <p className="text-[10px] md:text-xs text-zinc-400">emily.davis@example.com</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[8px] md:text-[10px] font-bold text-amber-700 uppercase tracking-widest shadow-sm">
                    Review
                  </div>
                </div>

                <div className="space-y-3 mb-8 md:mb-10">
                  <p className="text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Treatment</p>
                  <div className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                      <p className="text-xs md:text-base font-bold text-[#1A1A1A] tracking-tight">Lip Dissolve & Refill</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-10 md:mb-12">
                  <p className="text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Results</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-50">
                      <p className="text-[11px] md:text-sm font-medium text-zinc-600">Over 18?</p>
                      <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] md:text-[13px]">
                        <Check size={12} strokeWidth={3} /> Yes
                      </div>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-amber-50/50 flex items-center justify-between">
                      <p className="text-[11px] md:text-sm font-bold text-[#1A1A1A]">Filler?</p>
                      <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] md:text-[13px]">
                        <AlertTriangle size={12} strokeWidth={3} /> Migration
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-[#1A1A1A] text-white font-bold text-[11px] md:text-sm text-center shadow-xl shadow-black/10">
                  Approve for Booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Values */}
      <section className="py-16 md:py-24 lg:py-32 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
            <div className="lg:col-span-1 reveal">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">Our Core <span className="font-serif italic font-light">Beliefs</span></h2>
              <p className="text-xs md:text-base text-zinc-500 leading-relaxed">
                Clinical safety begins the moment a patient reaches out.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-16">
              {[
                { title: "Judgement remains human", desc: "Technology supports professional judgement, not replaces it.", icon: <UserCircle size={20} className="text-zinc-300" /> },
                { title: "Safety is pre-treatment", desc: "Early-stage triage is the foundation of a safe clinical outcome.", icon: <CheckCircle2 size={20} className="text-zinc-300" /> },
                { title: "Structure supports review", desc: "Uanco provides the structured data needed for expert review.", icon: <UserCheck size={20} className="text-zinc-300" /> },
                { title: "Documentation is protection", desc: "If it isn't documented, it didn't happen. We build the audit trail.", icon: <FileText size={20} className="text-zinc-300" /> }
              ].map((item, i) => (
                <div key={i} className="space-y-3 md:space-y-4 reveal">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base">{item.title}</h4>
                  <p className="text-[11px] md:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who Uanco Is For */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-20 text-center reveal">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Who We <span className="font-serif italic font-light text-zinc-400">Support.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {SUPPORT_DATA.map((target, i) => (
              <div key={i} className="group cursor-default reveal">
                <div className="mb-6 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-video relative bg-zinc-100 shadow-sm border border-zinc-100">
                   <img 
                    src={target.image} 
                    alt={target.title} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 opacity-0"
                    onLoad={(e) => (e.currentTarget.classList.add('opacity-100'))}
                   />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 flex items-center gap-3">
                  {target.title}
                  <div className="w-6 h-px bg-zinc-200"></div>
                </h4>
                <p className="text-[11px] md:text-sm text-zinc-500 leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-24 lg:py-36 bg-[#F9F9FB] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
              Ready to <span className="font-serif italic font-light text-zinc-400">standardise</span> your <br className="hidden md:block" /> clinical protection?
            </h2>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('home', '#pricing')}
                className="w-full sm:w-auto px-12 py-5 rounded-full bg-[#1A1A1A] text-white font-bold text-sm md:text-base uppercase tracking-widest hover:bg-black transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Sign up now
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pt-4">Limited availability for Founder Access</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;