import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { sections } from '@/data/sections';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSectionFromPath(path: string) {
  return sections.find((section) => section.path === path);
}
