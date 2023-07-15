'use client';

import * as React from 'react';

import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu.primitives';
import { cn } from '@/lib/utils';
import { SectionContext } from '@/context/section.context';
import { sections } from '@/data/sections';

export function DropdownMenuRadio() {
  const { section, setSectionByName, navigateToSectionByName } = React.useContext(SectionContext);

  const onDropdownItemSelected = (name: string) => {
    setSectionByName(name);
    navigateToSectionByName(name);
  };

  return (
    <div className={cn('flex', 'justify-end', 'text-primary')}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className={cn('IconButton', 'bg-white', 'p-3', 'rounded-full')} aria-label="Dropdown menu button">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuRadioGroup value={section.name} onValueChange={onDropdownItemSelected}>
              {
                sections.map((sect) => (
                  <div key={sect.id}>
                    <DropdownMenuRadioItem value={sect.name} className={cn('hover:cursor-pointer')}>
                      {sect.publicName}
                    </DropdownMenuRadioItem>
                    <DropdownMenuSeparator />
                  </div>
                ))
              }
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
}
