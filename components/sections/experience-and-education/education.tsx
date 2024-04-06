import TimelineItem from '@/components/sections/experience-and-education/timeline-item';
import { cn } from '@/lib/utils';
import { educations } from '@/data/educations';

export default function Education() {
  return (
    <div id="education" className={cn('flex flex-col justify-center md:items-center bg-primary text-left md:w-5/12')}>
      <h1 className={cn('md:text-5xl text-xl font-bold mb-6 text-center')}>Education.</h1>
      <ol className={cn('relative border-s border-gray-200 dark:border-gray-700 dark:text-gray-400')}>
        {
            educations.map((education, i) => (
              <TimelineItem
                key={education.title}
                {...education}
                lastItem={i === educations.length - 1}
              />
            ))
        }
      </ol>
    </div>
  );
}