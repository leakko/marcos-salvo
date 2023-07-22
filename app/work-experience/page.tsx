import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ExperienceCard } from '@/components/experience-card';
import { CardsGrid } from '@/components/cards-grid';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import WorkExperience from '@/assets/img/work-experience-icon.webp';
import geogramaLogo from '@/assets/img/geograma-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';

export default function () {
  return (
    <main className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('relative', 'w-16', 'lg:w-40', 'h-16', 'lg:h-40')}>
        <Image
          src={WorkExperience}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 10rem, 4rem"
          priority
          className={cn('object-contain')}
        />
      </div>
      <h1 className={cn('lg:text-5xl', 'text-lg', 'font-bold', 'text-center', 'my-2', 'lg:my-5', 'lg:mt-0')}>Work Experience</h1>
      <CardsGrid>
        <ExperienceCard title="Vodafone" startDate="08/22" dialog="" icon={vodafoneLogo} titleUrl="https://www.vodafone.es/c/conocenos/es/vodafone-espana/trabaja-con-nosotros/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              Maintenance and development of features for Vodafone&#39;s website,
              using Angular 14+ and Stencil.js as main technologies.
            </li>
            <li className={cn('mb-3')}>
              Analytics delivery architecture optimized using directives, RxJS, and NgRX.
            </li>
            <li>
              Unit testing with Jest.
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard title="Geograma" startDate="01/22" finishDate="06/22" dialog="" icon={geogramaLogo} titleUrl="https://www.geograma.com/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              Main frontend developer of the Álava (province of Spain) public map visualizer.
            </li>
            <li className={cn('mb-3')}>
              Develop the frontend side of GIS (Geographic Information Systems),
              mainly through Angular framework.
            </li>
            <li>
              Use OpenLayers to transform Geographic Information into maps.
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard title="Guadaltech" startDate="10/21" finishDate="01/22" dialog="" icon={guadaltechLogo} titleUrl="https://www.guadaltech.es/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              Main frontend developer of the Álava (province of Spain) public map visualizer.
            </li>
          </ul>
        </ExperienceCard>
      </CardsGrid>
    </main>
  );
}
