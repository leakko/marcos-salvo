'use client';

import { sections } from '@/data/sections';
import { Section } from '@/models/section';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SectionContext } from './section.context';

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<Section>(sections[0]);
  const router = useRouter();

  const setSectionByName = useCallback((name: string): void => {
    const sectionToSet = sections.find((sect) => sect.name === name);
    if (sectionToSet) {
      setSection(sectionToSet);
    }
  }, []);

  const navigateToSectionByName = useCallback((sectionName: string): void => {
    router.push(`/${sectionName}`);
  }, [router]);

  const value = useMemo(
    () => (
      { section, setSectionByName, navigateToSectionByName }
    ),
    [section, setSectionByName, navigateToSectionByName],
  );

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
}
