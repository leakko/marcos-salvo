import MySection from '@/components/my-section';
import { getSectionFromPath } from '@/lib/utils';
import { Section } from '@/models/section';
import React from 'react';

export default function Home() {
  const section = getSectionFromPath('about-me');
  return (
    <MySection section={(section as Section)} />
  );
}
