import Education from '@/components/sections/experience-and-education/education';
import Experience from '@/components/sections/experience-and-education/experience';
import { cn } from '@/lib/utils';

export default function ExperienceAndEducation() {
  return (
    <section className={cn('w-screen py-16 px-8')}>
      <div className={cn('max-w-5xl mx-auto flex justify-center items-start gap-10 flex-col md:flex-row')}>
        <Experience />
        <Education />
      </div>
    </section>
  );
}
