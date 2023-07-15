'use client';

import * as React from 'react';

import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.primitives';
import { cn } from '@/lib/utils';

export function DropdownMenuRadio() {
  const [position, setPosition] = React.useState('bottom');

  return (
    <div className={cn('flex', 'justify-end')}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className={cn('IconButton', 'bg-white', 'p-3', 'rounded-full')} aria-label="Dropdown menu button">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top" className={cn('hover:cursor-pointer')}>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom" className={cn('hover:cursor-pointer')}>Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right" className={cn('hover:cursor-pointer')}>Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
