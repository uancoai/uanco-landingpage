
import React from 'react';
import { Play } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12">WHAT PRACTITIONERS ARE SAYING</p>
        
        <blockquote className="mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-light leading-relaxed text-zinc-300">
            "Uanco made compliance simple and stress-free. It's exactly what my practice needed."
          </p>
        </blockquote>

        <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-all">
          <Play size={16} fill="black" />
          Watch Testimonial
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
