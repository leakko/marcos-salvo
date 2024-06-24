'use client';

import { createContext, useContext, useState } from 'react';

export interface ToggleContext {
  toggle: '👔 Experience' | '✍️ Education';
  setToggle: (toggle: '👔 Experience' | '✍️ Education') => void;
}

export const toggleContext = createContext<ToggleContext>({
  toggle: '👔 Experience',
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
  const [toggle, setToggle] = useState<'👔 Experience' | '✍️ Education'>('👔 Experience');

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
