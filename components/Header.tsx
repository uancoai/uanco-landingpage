
import React from 'react';
import { NAVIGATION, ViewType } from '../constants';

interface HeaderProps {
  onNavigate: (view: ViewType, anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-end group select-none outline-none"
          >
            <span className="text-[28px] font-serif italic font-bold text-[#1A1A1A] lowercase tracking-tighter leading-none">
              uanco
            </span>
            <span className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full mb-[4px] ml-0.5"></span>
          </button>
        </div>
        
        {/* Centered Navigation */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAVIGATION.map((item) => (
            <button 
              key={item.label} 
              onClick={() => onNavigate(item.view || 'home', item.href)}
              className="text-sm font-medium text-gray-400 hover:text-[#1A1A1A] transition-colors outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Placeholder to maintain flex alignment since right CTA was removed */}
        <div className="flex-shrink-0 w-[100px] hidden md:block"></div>
      </div>
    </nav>
  );
};

export default Header;
