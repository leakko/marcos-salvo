import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface TimelineItemProps {
  title: string;
  institution: string;
  dates: string;
  image: StaticImageData;
  description: string;
  lastItem?: boolean;
  mainItemsTitle: string;
  secondaryItemsTitle?: string;
  mainItems: string[];
  secondaryItems?: string[];
}

const TimelineItem: FC<TimelineItemProps> = ({
  title, institution, dates, image, lastItem, mainItemsTitle,
  description, secondaryItemsTitle, mainItems, secondaryItems,
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
      <h2 className={cn('text-xs md:text-sm text-white/60')}>{ dates }</h2>
      <Accordion type="single" collapsible className={cn('w-full')}>
        <AccordionItem value="item-1">
          <AccordionTrigger>{ description }</AccordionTrigger>
          <AccordionContent>
            <div className={cn('max-w-4xl')}>
              <h3 className={cn('font-semibold text-primary-200')}>{ mainItemsTitle }</h3>
              <ul className={cn('pl-8 mb-2 list-disc')}>
                { mainItems.map((activity) => <li key={activity}>{ activity }</li>) }
              </ul>
              { secondaryItems && (
                <>
                  <h3 className={cn('font-semibold text-primary-200')}>{ secondaryItemsTitle }</h3>
                  <ul className={cn('pl-8 mb-2 list-disc')}>
                    { secondaryItems.map((activity) => <li key={activity}>{ activity }</li>) }
                  </ul>
                </>
              ) }
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </li>
);

export default TimelineItem;
