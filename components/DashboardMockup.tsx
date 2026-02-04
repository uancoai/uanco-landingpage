
import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'M', value: 40 },
  { name: 'T', value: 30 },
  { name: 'W', value: 60 },
  { name: 'T', value: 80 },
  { name: 'F', value: 50 },
  { name: 'S', value: 90 },
  { name: 'S', value: 40 },
];

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative bg-white rounded-[2.5rem] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="flex items-end select-none">
                  <span className="text-xl font-serif italic font-bold text-[#1A1A1A] lowercase tracking-tighter leading-none">
                    u
                  </span>
                  <span className="w-1 h-1 bg-[#1A1A1A] rounded-full mb-[3px] ml-0.5"></span>
                </div>
                <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50"></div>
        </div>

        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-50 space-y-3">
                    <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-5 bg-black/5 rounded"></div>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-50 space-y-3">
                    <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-5 bg-black/5 rounded"></div>
                </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="h-3 w-32 bg-gray-100 rounded"></div>
                    <div className="h-3 w-12 bg-gray-50 rounded"></div>
                </div>
                <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dummyData}>
                            <Bar dataKey="value" fill="#1A1A1A" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="space-y-4 pt-2">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-50"></div>
                        <div className="flex-1 space-y-2">
                            <div className="w-1/3 h-2 bg-gray-200 rounded"></div>
                            <div className="w-1/2 h-1.5 bg-gray-100 rounded"></div>
                        </div>
                        <div className="w-16 h-2 bg-gray-100 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 bg-black text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Securely Synced</span>
      </div>
    </div>
  );
};

export default DashboardMockup;
