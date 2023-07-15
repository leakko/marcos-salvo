import MySection from '@/components/my-section';
import { getSectionFromPath } from '@/lib/utils';
import { Section } from '@/models/section';
import React from 'react';
import { sections } from '@/data/sections';

export async function generateStaticParams() {
  return sections.map((section) => ({
    section: section.path,
  }));
}

export default function Page({ params }: { params: { section: string } }) {
  const section = getSectionFromPath(params.section);
  return (
    <MySection section={(section as Section)} />
  );
}
