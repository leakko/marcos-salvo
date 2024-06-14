'use client';

import { createContext, useContext, useState } from 'react';

export interface ToggleContext {
  toggle: 'experience' | 'education';
  setToggle: (toggle: 'experience' | 'education') => void;
}

export const toggleContext = createContext<ToggleContext>({
  toggle: 'experience',
  setToggle: () => {},
});

export const useToggleContext = () => {
  const context = useContext(toggleContext);
  if (context === undefined) {
    throw new Error('useToggleContext must be used within a ToggleProvider');
  }
  return context;
};

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<'experience' | 'education'>('experience');

  const toggleContextValue: ToggleContext = {
    toggle,
    setToggle,
  };

  return (
    <toggleContext.Provider value={toggleContextValue}>
      {children}
    </toggleContext.Provider>
  );
};
