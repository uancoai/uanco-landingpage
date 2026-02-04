
import React from 'react';
import { BarChart3, TrendingUp, Search } from 'lucide-react';

const BusinessInsight: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4">Operational Intelligence</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            Insight & <span className="font-serif italic font-light text-zinc-400">Clarity.</span>
          </h2>
          <p className="text-lg text-gray-500">
            Gain deep visibility into what’s happening in your clinic before clients ever arrive. Understand inquiry trends and identify friction points in your patient journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <BarChart3 />,
              title: "Inquiry Trends",
              desc: "See exactly which treatments are being discussed and where your highest consultation volume originates."
            },
            {
              icon: <Search />,
              title: "Suitability Gaps",
              desc: "Identify common questions and concerns that cause patients to stall before a professional review."
            },
            {
              icon: <TrendingUp />,
              title: "Clinical Patterns",
              desc: "Monitor why inquiries are being marked as unsuitable to refine your patient targeting and safety standards."
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center text-[#1A1A1A] mb-8">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInsight;
