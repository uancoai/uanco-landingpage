
import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { ViewType } from '../constants';

interface HeroProps {
  onNavigate: (view: ViewType, anchor?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const VideoElement = ({ isMobile = false }) => (
    <div className={`relative w-full ${isMobile ? 'max-w-[260px] mb-6' : 'max-w-[480px] ml-auto'} mx-auto`}>
      <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-tr from-purple-100/20 via-transparent to-blue-100/20 rounded-[3rem] md:rounded-[4.5rem] blur-2xl -z-10 animate-pulse"></div>
      
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] border-[4px] md:border-[12px] border-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] aspect-[4/5] bg-zinc-50 group transform hover:-translate-y-1 transition-transform duration-700 ease-out">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
          className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dermatologist-examining-a-patients-face-with-a-magnifying-glass-40321-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
      </div>

      {!isMobile && (
        <div className="hidden lg:block absolute -left-12 top-1/4 p-4 bg-white rounded-2xl shadow-xl border border-zinc-100 animate-bounce-slow">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <ShieldCheck size={18} />
            </div>
            <div className="pr-4">
              <p className="text-[10px] font-bold text-zinc-400 uppercase">Status</p>
              <p className="text-xs font-bold text-[#1A1A1A]">Verified Record</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative pt-16 pb-6 md:pt-32 md:pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-white">
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-50/20 rounded-full blur-[80px] md:blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:items-center lg:text-left">
          
          <div className="flex flex-col items-center lg:items-start relative max-w-2xl">
            <h1 className="flex flex-col gap-0.5 mb-4 md:mb-10">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold tracking-tight leading-[1.1] text-red-600">
                Are you covered?
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold tracking-tight leading-[1.1] text-[#1A1A1A]">
                We're here to help.
              </span>
            </h1>

            <div className="max-w-[280px] sm:max-w-md lg:max-w-xl mb-6 md:mb-12">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-zinc-400 leading-snug font-light">
                In 2026 new regulatory direction requires aesthetic practitioners to have records of all clients screening.
              </p>
            </div>

            <div className="block lg:hidden w-full">
              <VideoElement isMobile={true} />
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full mb-8 lg:mb-0">
              <button 
                onClick={() => onNavigate('home', '#pricing')}
                className="w-full sm:w-auto px-10 md:px-16 py-3.5 md:py-5 rounded-full text-white font-bold text-sm sm:text-base bg-[#1A1A1A] hover:bg-black transition-all shadow-lg active:scale-95"
              >
                Get Access Now
              </button>
              <button 
                onClick={() => onNavigate('about')} 
                className="group flex items-center gap-2 text-[9px] sm:text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.3em] hover:opacity-70 transition-all outline-none py-1"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <VideoElement />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;