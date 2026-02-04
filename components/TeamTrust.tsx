
import React from 'react';
import { COLORS } from '../constants';

const team = [
  {
    name: 'Elena Vance',
    role: 'Founder & Clinical Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=3&w=400&h=400&q=80',
    bio: '15 years in medical aesthetics. Built Uanco to solve the compliance headaches she faced daily.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Regulatory Affairs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=3&w=400&h=400&q=80',
    bio: 'Former healthcare auditor. Ensuring every Uanco feature exceeds the 2026 standards.'
  },
  {
    name: 'Sophie Chen',
    role: 'Customer Success Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=3&w=400&h=400&q=80',
    bio: 'Dedicated to helping clinics transition seamlessly into a digital-first compliance workflow.'
  }
];

const TeamTrust: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ color: COLORS.primary }}>
            The people behind <br />
            <span className="font-serif italic font-light text-gray-400">your peace of mind.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We aren't just developers. We are clinicians, auditors, and patient advocates committed to your clinic's longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-square shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h4 className="text-2xl font-bold mb-1" style={{ color: COLORS.primary }}>{member.name}</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-500 leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTrust;
