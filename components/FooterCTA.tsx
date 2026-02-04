
import React from 'react';
import { COLORS } from '../constants';

const FooterCTA: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-end select-none">
              <span className="text-[28px] font-serif italic font-bold text-[#1A1A1A] lowercase tracking-tighter leading-none">
                uanco
              </span>
              <span className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full mb-[5px] ml-0.5"></span>
            </div>
            
            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">© 2026 Uanco.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
