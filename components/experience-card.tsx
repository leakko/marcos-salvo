import Image, { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

import { cn } from '@/lib/utils';

export function ExperienceCard({
  title,
  startDate,
  finishDate,
  children,
  dialog,
  icon,
  titleUrl,
}: {
  title: string;
  startDate: React.ReactNode;
  finishDate?: React.ReactNode;
  children: React.ReactNode;
  dialog: React.ReactNode;
  icon: StaticImageData;
  titleUrl: string;
}) {
  return (
    <Card className={cn('w-full', 'lg:w-1/4', 'm-3', 'lg:m-5', !finishDate && 'border-solid border-t-8 border-[rgba(25,25,25,0.7)]')}>
      <CardHeader className={cn('flex', 'flex-nowrap', 'flex-row', 'items-center')}>
        <div className={cn('relative', ' mr-2')} style={{ width: '50px', height: '50px' }}>
          <Image src={icon} alt="Skill logo" className={cn('rounded', 'object-contain')} />
        </div>
        <div className={cn('flex-auto')}>
          <CardTitle className={cn('mb-1', 'lg:text-xl', 'text-lg')}><a href={titleUrl}>{title}</a></CardTitle>
          <CardDescription>
            {startDate}
            {' '}
            -
            {' '}
            {finishDate ?? <strong>Present</strong>}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        {dialog}
      </CardFooter>
    </Card>
  );
}
