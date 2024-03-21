import { cn } from '@/lib/utils';
import Image from 'next/image';
import selfie from '@/assets/img/selfie.webp';
import JavascriptLogo from '@/assets/img/javascript-logo.webp';
import AngularLogo from '@/assets/img/angular-logo.webp';
import ReduxLogo from '@/assets/img/redux-logo.webp';
import { ProgressCard } from './progress-card';
import { CardsGrid } from './cards-grid';

export function AboutMe() {
  return (
    <main className={cn('flex flex-col items-center')}>
      <div className={cn('relative w-32 lg:w-60 h-32 lg:h-60 mb-3')}>
        <Image
          src={selfie}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 16rem, 8rem"
          priority
          className={cn('rounded-full object-contain border-solid border-2 border-white')}
        />
      </div>
      <h1 className={cn('lg:text-5xl text-lg font-bold text-center my-2 lg:my-5 lg:mt-0')}>Hi, I&#39;m Marcos.</h1>
      <h2 className={cn('lg:text-3xl text-sm font-bold text-center mb-5')}>
        <span className={cn('bg-white text-primary py-1 px-2 rounded mr-1 lg:mr-2')}>Frontend</span>
        {' '}
        developer specialized in
      </h2>
      <CardsGrid>
        <ProgressCard title="Angular" level={75} dialog="" icon={AngularLogo} titleUrl="https://angular.io/">
          <p className={cn('mb-2 lg:text-base text-sm')}>
            <strong>More than 2 years of experience</strong>
            {' '}
            as
            {' '}
            <strong><a href="https://angular.io/">Angular</a></strong>
            {' '}
            frontend developer.
          </p>
          <p className={cn('mb-2 lg:text-base text-sm')}>
            Currently working with
            {' '}
            <strong>
              <a href="https://angular.io/">Angular</a>
              {' '}
              15+
            </strong>
            {' '}
            as
            {' '}
            <strong>Vodafone</strong>
            {' '}
            internal frontend developer.
          </p>
        </ProgressCard>
        <ProgressCard title="JavaScript" level={65} dialog="" icon={JavascriptLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript">
          <p className={cn('mb-2 lg:text-base text-sm')}>
            <strong>Strong foundations</strong>
            {' '}
            in JavaScript thanks to:
          </p>
          <ul className={cn('list-disc ml-5 lg:text-base text-sm')}>
            <li className={cn('mb-3')}>
              Exceling in the
              {' '}
              <strong>Frontend/JS</strong>
              {' '}
              related subjects at my
              {' '}
              <strong><a href="https://www.uoc.edu/en/studies/bachelors-degrees/degree-software-development">Software Engineering degree</a></strong>
            </li>
            <li>
              Working
              {' '}
              <strong>professionally</strong>
              {' '}
              with JavaScript for more than 2 years.
            </li>
          </ul>
        </ProgressCard>
        <ProgressCard title="Redux/RxJs" level={50} dialog="" icon={ReduxLogo} titleUrl="https://ngrx.io/">
          <p className={cn('mb-2 lg:text-base text-sm')}>
            Highly skilled in
            {' '}
            <strong>state management</strong>
            {' '}
            and
            {' '}
            <strong>reactive programming</strong>
            {' '}
            thanks to intensive use of
            {' '}
            <strong><a href="https://ngrx.io/">NgRx</a></strong>
            {' '}
            (Redux for Angular) and
            {' '}
            <strong><a href="https://rxjs.dev/">RxJs</a></strong>
            .
          </p>
        </ProgressCard>
      </CardsGrid>
    </main>
  );
}
