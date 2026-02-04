
import React from 'react';
import { ShieldCheck, ChevronRight, Play } from 'lucide-react';
import { ViewType } from '../constants';

interface HeroProps {
  onNavigate: (view: ViewType, anchor?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-white">
      {/* Refined Decorative Background Blobs */}
      <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-24 items-center">
          
          {/* Text Content Area */}
          <div className="flex flex-col items-start relative max-w-2xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm border border-zinc-100 text-[#1A1A1A]">
                <ShieldCheck size={14} strokeWidth={1.5} />
              </div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">
                1000+ SUCCESSFUL PRESCREENS
              </p>
            </div>

            <h1 className="flex flex-col gap-1 mb-10">
              <span className="text-4xl lg:text-[62px] font-bold tracking-tight leading-[1.1] text-[#1A1A1A]">
                Protect Your Clinic.
              </span>
              <span className="text-4xl lg:text-[62px] font-bold tracking-tight leading-[1.1] text-[#1A1A1A]">
                UK Regulations Are Coming.
              </span>
            </h1>

            <div className="max-w-xl mb-12 space-y-6">
              <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed font-light">
                Are you prepared for what’s changing in UK aesthetics?
              </p>
              <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed font-light">
                The 2026 regulatory direction requires more than clinical skill, it requires clear, reliable records that show how decisions were made.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10 w-full sm:w-auto">
              <button 
                onClick={() => onNavigate('home', '#pricing')}
                className="w-full sm:w-auto px-12 py-5 rounded-full text-white font-bold text-sm bg-[#1A1A1A] hover:bg-black transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 transform-gpu"
              >
                Get Access Now
              </button>
              <button 
                onClick={() => onNavigate('about')} 
                className="group flex items-center gap-3 text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.3em] hover:opacity-70 transition-all outline-none"
              >
                LEARN MORE
                <ChevronRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Video Holder Area */}
          <div className="relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute -inset-6 bg-gradient-to-tr from-purple-50/30 via-transparent to-blue-50/30 rounded-[4.5rem] blur-2xl -z-10"></div>
              <div className="absolute inset-6 border border-zinc-100 rounded-[4rem] translate-x-4 translate-y-4 -z-10"></div>
              
              <div className="relative overflow-hidden rounded-[4rem] border-[10px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] aspect-[4/5] bg-zinc-50 group">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                >
                  {/* UPLOAD YOUR VIDEO TO THE PROJECT ROOT NAMED 'hero-video.mp4' */}
                  <source 
                    src="/hero-video.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Play size={20} fill="white" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
