import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SubheadingCard } from '@/components/subheading-card';
import { CardsGrid } from '@/components/cards-grid';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import WorkExperience from '@/assets/img/work-experience-icon.webp';
import geogramaLogo from '@/assets/img/geograma-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience | Marcos Salvo',
  description: 'Explore my last work experiences.',
};

export default function Page() {
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
        <SubheadingCard title="Frontend Developer" startDate="08/22" dialog="" icon={vodafoneLogo} institution="Vodafone" institutionUrl="https://www.vodafone.es/c/conocenos/es/vodafone-espana/trabaja-con-nosotros/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              Maintain and
              {' '}
              <strong>develop features</strong>
              {' '}
              for
              {' '}
              <a href="https://www.vodafone.es/c/particulares/es/"><strong>Vodafone&#39;s website</strong></a>
              {' '}
              using
              {' '}
              <a href="https://angular.io/">Angular</a>
              {' '}
              15+, and secondarily
              {' '}
              <a href="https://stenciljs.com/">Stencil.js.</a>
            </li>
            <li className={cn('mb-3')}>
              <strong>Optimize analytics architecture</strong>
              {' '}
              using directives,
              {' '}
              <a href="https://rxjs.dev/">RxJs</a>
              , and
              {' '}
              <a href="https://ngrx.io/">NgRx</a>
              .
            </li>
            <li>
              <strong>Unit testing</strong>
              {' '}
              with
              {' '}
              <a href="https://jestjs.io/">Jest</a>
              .
            </li>
          </ul>
        </SubheadingCard>
        <SubheadingCard title="Frontend Developer" startDate="01/22" finishDate="06/22" dialog="" icon={geogramaLogo} institution="Geograma" institutionUrl="https://www.geograma.com/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              <strong>Main</strong>
              {' '}
              frontend
              {' '}
              <strong>developer</strong>
              {' '}
              of Álava&#39;s (province of Spain)
              {' '}
              <a href="https://www.geo.euskadi.eus/geobisorea"><strong>public map visualizer</strong></a>
              .
            </li>
            <li className={cn('mb-3')}>
              <strong>Develop</strong>
              {' '}
              the
              {' '}
              <strong>frontend</strong>
              {' '}
              side of GIS (
              <strong>Geographic Information Systems</strong>
              ),
              mainly through
              {' '}
              <a href="https://angular.io/">Angular</a>
              {' '}
              framework.
            </li>
            <li>
              Use
              {' '}
              <a href="https://openlayers.org/">OpenLayers</a>
              {' '}
              to transform Geographic Information into maps.
            </li>
          </ul>
        </SubheadingCard>
        <SubheadingCard title="Frontend Developer" startDate="10/21" finishDate="01/22" dialog="" icon={guadaltechLogo} institution="Guadaltech" institutionUrl="https://www.guadaltech.es/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              <strong>Develop</strong>
              {' '}
              <strong>cross-platform applications</strong>
              {' '}
              using
              {' '}
              <a href="https://ionicframework.com/">Ionic</a>
              {' '}
              and
              {' '}
              <a href="https://angular.io/">Angular</a>
              .
            </li>
          </ul>
        </SubheadingCard>
      </CardsGrid>
    </main>
  );
}
