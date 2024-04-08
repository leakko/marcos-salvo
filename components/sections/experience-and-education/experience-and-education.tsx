'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

import Education from '@/components/sections/experience-and-education/education';
import Experience from '@/components/sections/experience-and-education/experience';

import { cn } from '@/lib/utils';

export default function ExperienceAndEducation() {
  const [checked, setChecked] = useState(false);
  const onCheckedChange = (doCheck: boolean) => setChecked(doCheck);

  return (
    <section className={cn('w-screen flex flex-col justify-center md:items-center text-left py-16 px-8')}>
      <div className={cn('max-w-5xl flex justify-center items-center gap-2 md:gap-6 flex-col')}>
        <div className={cn('flex justify-center items-center gap-5 mb-6')}>
          <h2 className={cn('md:text-5xl text-xl font-bold text-center', { 'text-gray-400': checked })}>Experience.</h2>
          <Switch checked={checked} onCheckedChange={onCheckedChange} />
          <h2 className={cn('md:text-5xl text-xl font-bold text-center', { 'text-gray-400': !checked })}>Education.</h2>
        </div>
        { checked ? <Education /> : <Experience />}
      </div>
    </section>
  );
}
