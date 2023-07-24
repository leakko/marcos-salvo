import React from 'react';
import { AboutMe } from '@/components/about-me';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me | Marcos Salvo',
  description: 'This is a short presentation about myself.',
};

export default function Page() {
  return (
    <AboutMe />
  );
}
