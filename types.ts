import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to provide access to the React namespace for ReactNode
  icon: React.ReactNode;
}

export interface NavigationItem {
  label: string;
  href: string;
}