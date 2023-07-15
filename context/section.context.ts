import { sections } from '@/data/sections';
import { SectionProviderValue } from '@/models/section';
import { createContext } from 'react';

export const SectionContext = createContext<SectionProviderValue>(
  { section: sections[0], setSectionByName: () => {}, navigateToSectionByName: () => {} },
);
