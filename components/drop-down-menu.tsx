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

export function DropdownMenuRadio() {
  const [section, setSection] = React.useState('about-me');

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
            <DropdownMenuRadioGroup value={section} onValueChange={setSection}>
              <DropdownMenuRadioItem value="about-me" className={cn('hover:cursor-pointer')}>About me</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem value="work-exprience" className={cn('hover:cursor-pointer')}>Work Experience</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem value="education" className={cn('hover:cursor-pointer')}>Education</DropdownMenuRadioItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem value="technologies" className={cn('hover:cursor-pointer')}>Technologies</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
}
