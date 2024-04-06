import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface TimelineItemProps {
  title: string;
  institution: string;
  dates: string;
  description: string;
  image: StaticImageData;
  lastItem?: boolean;
}

const TimelineItem: FC<TimelineItemProps> = ({
  title, institution, dates, description, image, lastItem,
}) => (
  <li className={cn('ms-6', lastItem ? 'mb-1' : 'mb-10')}>
    <span className={cn('absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700')}>
      <Image src={image} alt="Business Icon" width={50} height={50} />
    </span>
    <div className={cn('pl-3')}>
      <h3 className={cn('md:text-2xl text-sm font-semibold text-primary-200 leading-tight')}>
        { institution }
        {' '}
        |
        {' '}
        { title }
      </h3>
      <h2 className={cn('text-xs md:text-sm mb-2 text-white/60')}>{ dates }</h2>
      <p className={cn('text-sm')}>{ description }</p>
    </div>
  </li>
);

export default TimelineItem;