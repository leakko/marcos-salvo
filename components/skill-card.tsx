import Image, { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function SkillCard({
  title,
  level,
  children,
  dialog,
  icon,
}: {
  title: string;
  level: number;
  children: React.ReactNode;
  dialog: React.ReactNode;
  icon: StaticImageData;
}) {
  return (
    <Card className={cn('w-full', 'lg:w-1/4', 'm-3', 'lg:m-5')}>
      <CardHeader className={cn('flex', 'flex-nowrap', 'flex-row', 'items-center')}>
        <div className={cn('relative', ' mr-2')} style={{ width: '50px', height: '50px' }}>
          <Image src={icon} alt="Skill logo" className={cn('rounded', 'object-contain')} />
        </div>
        <div className={cn('flex-auto')}>
          <CardTitle className={cn('mb-1', 'lg:text-xl', 'text-lg')}>{title}</CardTitle>
          <Progress value={level} />
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
