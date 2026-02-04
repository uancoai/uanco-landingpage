
import React from 'react';
import { Clock, Shield, Lightbulb, LayoutDashboard, Eye, ChevronRight, Target, ShieldAlert, Zap, HeartPulse } from 'lucide-react';

export const COLORS = {
  primary: '#1A1A1A', // Jet Black for headlines and buttons
  secondary: '#A1A1AA', // Muted Gray for the italic serif secondary text
  accent: '#1A1A1A',
  bgLight: '#F9F9FB', // Clinical Off-white background from image
  border: '#E4E4E7', // Zinc-200 for subtle lines
};

export type ViewType = 'home' | 'about' | 'success';

export const NAVIGATION: { label: string; href: string; view?: ViewType }[] = [
  { label: 'About us', href: '#about', view: 'about' },
  { label: 'Solutions', href: '#solutions', view: 'home' },
  { label: 'Sign up', href: '#pricing', view: 'home' },
];

export const ICONS = {
  Clock: <Clock className="w-8 h-8" strokeWidth={1} />,
  Shield: <Shield className="w-8 h-8" strokeWidth={1} />,
  Lightbulb: <Lightbulb className="w-8 h-8" strokeWidth={1} />,
  Insight: <Eye className="w-10 h-10" strokeWidth={0.8} />,
  Dashboard: <LayoutDashboard className="w-5 h-5" />,
  ArrowRight: <ChevronRight className="w-4 h-4" />,
  Target: <Target className="w-6 h-6" />,
  Security: <ShieldAlert className="w-6 h-6" />,
  Innovation: <Zap className="w-6 h-6" />,
  Ethics: <HeartPulse className="w-6 h-6" />,
};
