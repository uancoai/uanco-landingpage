
import React from 'react';
import { ICONS, COLORS } from '../constants';

const FeatureSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100" id="about">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F9F9FB] rounded-[2rem] border border-gray-100 mb-10 text-[#1A1A1A]">
          {ICONS.Insight}
        </div>
        
        <h3 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight" style={{ color: COLORS.primary }}>
            Clinical <span className="font-serif italic font-light" style={{ color: COLORS.secondary }}>Oversight</span>
        </h3>
        
        <p className="text-xl text-gray-500 leading-relaxed font-normal max-w-2xl mx-auto">
          Gain powerful suitability insights that help you truly understand your consultation flow and your patient's pre-booking journey in one professional dashboard.
        </p>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
