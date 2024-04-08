import { experiences } from '@/data/experiences';
import TimelineItem from '@/components/sections/experience-and-education/timeline-item';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <div id="experience" className={cn('flex flex-col justify-center md:items-center bg-primary text-left')}>
      <ol className={cn('relative border-s border-gray-200 dark:border-gray-700 dark:text-gray-400')}>
        {
            experiences.map((experience, i) => (
              <TimelineItem
                key={experience.dates}
                {...experience}
                lastItem={i === experiences.length - 1}
              />
            ))
        }
      </ol>
    </div>
  );
}
