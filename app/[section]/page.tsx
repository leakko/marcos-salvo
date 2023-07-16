import MySection from '@/components/my-section';
import { getSectionFromPath } from '@/lib/utils';
import { Section } from '@/models/section';
import React from 'react';
import { sections } from '@/data/sections';
import { AboutMe } from '@/components/about-me';

export async function generateStaticParams() {
  return sections.map((section) => ({
    section: section.path,
  }));
}

export default function Page({ params: { section } }: { params: { section: string } }) {
  const sectionData = getSectionFromPath(section);
  const jsx = section === 'about-me'
    ? <AboutMe />
    : <MySection section={(sectionData as Section)} />;
  return (
    jsx
  );
}
