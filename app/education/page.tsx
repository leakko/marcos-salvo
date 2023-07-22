import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SubheadingCard } from '@/components/subheading-card';
import { CardsGrid } from '@/components/cards-grid';
import uocLogo from '@/assets/img/uoc-logo.webp';
import ironhackLogo from '@/assets/img/ironhack-logo.webp';
import EducationIcon from '@/assets/img/education-icon.webp';
import sevilleUniversityLogo from '@/assets/img/seville-university-logo.webp';

export default function Page() {
  return (
    <main className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('relative', 'w-16', 'lg:w-40', 'h-16', 'lg:h-40', 'bg-white', 'rounded-full')}>
        <Image
          src={EducationIcon}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 10rem, 4rem"
          priority
          className={cn('object-contain')}
        />
      </div>
      <h1 className={cn('lg:text-5xl', 'text-lg', 'font-bold', 'text-center', 'my-2', 'lg:my-5', 'lg:mt-0')}>Education</h1>
      <CardsGrid>
        <SubheadingCard title="Software Engineering Bach. Degree" titleUrl="https://www.uoc.edu/en/studies/bachelors-degrees/degree-software-development" startDate="09/21" dialog="" icon={uocLogo} institution="UOC" institutionUrl="https://www.uoc.edu/portal/en/index.html">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Topics</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              The
              {' '}
              <strong>programme of study</strong>
              {' '}
              covers the full software lifecycle:
              design, implementation, testing and maintenance.
            </li>
            <li className={cn('mb-3')}>
              <strong>Technologies</strong>
              : JavaScript, TypeScript, Vue, Figma, C,
              assembler, Java, Kotlin, Oracle, MySQL, PostgreSQL, Eclipse, AWS...
            </li>
          </ul>
        </SubheadingCard>
        <SubheadingCard title="Web Development Bootcamp" titleUrl="https://www.ironhack.com/es/en/web-development/madrid" startDate="01/21" finishDate="09/21" dialog="" icon={ironhackLogo} institution="Ironhack" institutionUrl="https://www.ironhack.com/es/en">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Topics</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              <strong>Responsive web design</strong>
              : HTML / CSS / JavaScript
            </li>
            <li className={cn('mb-3')}>
              <strong>Front-end</strong>
              : ReactJS
            </li>
            <li>
              <strong>Back-end</strong>
              : NodeJS / ExpressJS / MongoDB /Axios
            </li>
          </ul>
        </SubheadingCard>
        <SubheadingCard title="Joint Degree in Business Administration and Law" titleUrl="https://derecho.us.es/docencia/grados/doble-grado-en-derecho-y-ade" startDate="09/14" dialog="" icon={sevilleUniversityLogo} institution="Seville University" institutionUrl="https://ics-seville.org/university-of-seville/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>6 years joint degree</strong>
            {' '}
            of Business Administration and Law (408 ECTS Credits)
          </p>
        </SubheadingCard>
      </CardsGrid>
    </main>
  );
}
