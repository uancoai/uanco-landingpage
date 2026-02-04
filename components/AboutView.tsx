
import React, { useEffect, useState } from 'react';
import { FileText, CheckCircle2, UserCheck, User, AlertTriangle, Check, UserCircle, ChevronLeft } from 'lucide-react';
import { ViewType } from '../constants';

interface SupportItem {
  title: string;
  desc: string;
  image: string;
}

interface AboutViewProps {
  onNavigate: (view: ViewType, anchor?: string) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [supportData, setSupportData] = useState<SupportItem[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch dynamic content for "Who We Support"
    fetch('/who-we-support.json')
      .then(res => res.json())
      .then(data => setSupportData(data))
      .catch(err => {
        console.warn("Dynamic support data not found, using fallbacks.", err);
        setSupportData([
          { 
            title: "Practitioners", 
            desc: "Experienced injectors who prioritise clinical standards and want support around early screening and decision-making.",
            image: "https://images.unsplash.com/photo-1590611357128-7a2861587bb2?auto=format&fit=crop&w=800&q=80"
          },
          { 
            title: "Clinic Owners", 
            desc: "Forward-thinking owners preparing for 2026, requiring consistent oversight across teams and patient journeys.",
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80"
          },
          { 
            title: "Educators", 
            desc: "Academies supporting graduates beyond the classroom, helping them transition into practice with safer processes.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
          }
        ]);
      });

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
          type="button"
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

      {/* 3. Who Uanco Is For */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-20 text-center reveal">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Who We <span className="font-serif italic font-light text-zinc-400">Support.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {supportData.map((target, i) => (
              <div key={i} className="group cursor-default reveal">
                <div className="mb-6 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/3] relative bg-zinc-100">
                   <img 
                    src={target.image} 
                    alt={target.title} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 opacity-0"
                    onLoad={(e) => (e.currentTarget.classList.add('opacity-100'))}
                   />
                </div>
                <h4 className="text-base md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-3">
                  {target.title}
                  <div className="w-6 h-px bg-zinc-200"></div>
                </h4>
                <p className="text-[11px] md:text-sm text-zinc-500 leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;