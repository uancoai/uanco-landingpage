
import React from 'react';
import { MessageSquare, UserCheck, ClipboardList } from 'lucide-react';

const PreBooking: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4">Structure Before Entry</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            What happens <span className="font-serif italic font-light text-zinc-400">before booking?</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Inquiries are often messy, fragmented, and time-consuming. UANCO structures early client conversations to ensure every lead is clinically triaged before they ever reach your diary.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <MessageSquare size={24} />,
              title: "Aligned Tone of Voice",
              desc: "Every interaction reflects your clinic's professional standards, maintaining a calm, medical, and welcoming dialogue from second one."
            },
            {
              icon: <UserCheck size={24} />,
              title: "Early Suitability",
              desc: "Screen for red flags, medical history, and treatment expectations automatically, saving you hours of unproductive consultation time."
            },
            {
              icon: <ClipboardList size={24} />,
              title: "Patient Preparation",
              desc: "Patients arrive better informed, more relaxed, and prepared for their clinical journey, increasing conversion and reducing anxiety."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 transition-hover duration-500 hover:shadow-xl hover:shadow-black/5">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1A1A1A] mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreBooking;
