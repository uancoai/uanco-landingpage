
import React from 'react';
import { COLORS } from '../constants';

const ClinicalExcellence: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Medical Clinic Interior" 
                className="w-full h-auto grayscale-[0.3]"
              />
            </div>
            {/* Quote Card */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-black text-white p-8 rounded-[2rem] max-w-sm shadow-2xl">
              <p className="text-lg italic font-serif leading-relaxed mb-6">
                "Uanco has completely transformed how we handle patient data. We're finally ready for the 2026 regulation changes."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Dr. Sarah" />
                </div>
                <div>
                  <p className="text-sm font-bold">Dr. Sarah Thompson</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400">Clinical Director, The Skin Clinic</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8" style={{ color: COLORS.primary }}>
              The standard for <br />
              <span className="font-serif italic font-light text-gray-400">clinical safety.</span>
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center font-serif italic text-xl">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Integrated Compliance</h4>
                  <p className="text-gray-500 leading-relaxed">Built from the ground up to meet the rigorous demands of the upcoming 2026 medical aesthetic licensing standards.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center font-serif italic text-xl">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Patient Privacy First</h4>
                  <p className="text-gray-500 leading-relaxed">End-to-end encrypted record keeping that ensures your patient's most sensitive data is stored with military-grade security.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center font-serif italic text-xl">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Expert Workflow Design</h4>
                  <p className="text-gray-500 leading-relaxed">Crafted in collaboration with leading clinicians to ensure the software works with your treatment flow, not against it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalExcellence;
