
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import RegulatoryShift from './components/RegulatoryShift';
import PricingFounder from './components/PricingFounder';
import Testimonial from './components/Testimonial';
import FooterCTA from './components/FooterCTA';
import AboutView from './components/AboutView';
import SuccessView from './components/SuccessView';
import { ViewType } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  useEffect(() => {
    if (window.location.pathname === '/success' || window.location.search.includes('session_id=')) {
      setCurrentView('success');
    }
  }, []);

  const handleNavigate = (view: ViewType, anchor?: string) => {
    setCurrentView(view);
    
    if (view === 'home' && anchor) {
      const targetId = anchor.startsWith('#') ? anchor.substring(1) : anchor;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <ValuePillars />
            <Testimonial />
            <RegulatoryShift onNavigate={handleNavigate} />
            <PricingFounder />
          </>
        ) : currentView === 'about' ? (
          <AboutView onNavigate={handleNavigate} />
        ) : (
          <SuccessView />
        )}
      </main>

      <FooterCTA />
    </div>
  );
};

export default App;