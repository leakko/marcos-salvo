import Education from '@/components/sections/experience-and-education/education';
import Experience from '@/components/sections/experience-and-education/experience';
import { cn } from '@/lib/utils';

export default function ExperienceAndEducation() {
  return (
    <div className={cn('w-screen py-16 px-8 flex justify-center gap-10 sm:gap-6 flex-col sm:flex-row')}>
      <Experience />
      <Education />
    </div>
  );
}
