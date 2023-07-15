'use client';

import { SectionContext } from '@/context/section.context';
import React, { useEffect } from 'react';

export default function Page({ params }: { params: { section: string } }) {
  const { section, setSectionByName } = React.useContext(SectionContext);
  useEffect(() => {
    setSectionByName(params.section);
  }, [setSectionByName, params]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">
          {section.publicName}
          <br />
        </h1>
      </div>
    </main>
  );
}
