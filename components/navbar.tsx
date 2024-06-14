'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import logo from '@/assets/img/logo.webp';
import { sections } from '@/data/sections';
import useScreenSize from '@/hooks/use-screen-resize';
import Link from 'next/link';
import { useToggleContext } from '@/providers/toggle';
import { Section } from '@/models/section';
import { DropdownMenuRadio } from './drop-down-menu';

export function Navbar() {
  const { width } = useScreenSize();
  const { setToggle } = useToggleContext();

  const onLinkClick = (section: Section) => {
    const name = section.name.toLocaleLowerCase();
    if (['experience', 'education'].includes(name)) setToggle(name as 'experience' | 'education');
  };

  const getMenu = () => {
    if (!width) return null;
    return width < 640
      ? <DropdownMenuRadio />
      : sections.map((sect) => (
        <li key={sect.id}>
          <Link className={cn('no-underline hover:text-white')} href={sect.path} onClick={() => onLinkClick(sect)}>{sect.name}</Link>
        </li>
      ));
  };
  return (
    <nav className={cn('w-full bg-primary/95 py-4 px-8 border-b-2 border-white/60 sticky top-0 z-10 flex justify-center')}>
      <div className={cn('w-full max-w-5xl flex justify-between')}>
        <Link href={sections[0].path}>
          <div className={cn('relative mr-2')} style={{ width: '100px', height: '25px' }}>
            <Image src={logo} alt="Website logo" fill sizes="100px" className={cn('rounded object-contain')} />
          </div>
        </Link>
        <ul className={cn('flex gap-x-4 text-white/80 font-semibold')}>
          { getMenu() }
        </ul>
      </div>
    </nav>
  );
}
