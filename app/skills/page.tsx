import { cn } from '@/lib/utils';
import Image from 'next/image';
import javascriptLogo from '@/assets/img/javascript-logo.webp';
import angularLogo from '@/assets/img/angular-logo.webp';
import reduxLogo from '@/assets/img/redux-logo.webp';
import typeScriptLogo from '@/assets/img/typescript-logo.webp';
import stencilLogo from '@/assets/img/stencil-logo.webp';
import reactLogo from '@/assets/img/react-logo.webp';
import nextLogo from '@/assets/img/next-logo.webp';
import rxjsLogo from '@/assets/img/rxjs-logo.webp';
import skillsIcon from '@/assets/img/skills-icon.webp';
import { ProgressCard } from '@/components/progress-card';
import { CardsGrid } from '@/components/cards-grid';

export default function Page() {
  return (
    <main className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('relative', 'w-16', 'lg:w-40', 'h-16', 'lg:h-40', 'mb-1', 'lg:mb-4')}>
        <Image
          src={skillsIcon}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 10rem, 4rem"
          priority
          className={cn('object-contain')}
        />
      </div>
      <h1 className={cn('lg:text-5xl', 'text-lg', 'font-bold', 'text-center', 'my-2', 'lg:my-5', 'lg:mt-0')}>Skills</h1>
      <CardsGrid>
        <ProgressCard title="Angular" level={75} dialog="" icon={angularLogo} titleUrl="https://angular.io/" />
        <ProgressCard title="JavaScript" level={65} dialog="" icon={javascriptLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <ProgressCard title="React" level={55} dialog="" icon={reactLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <ProgressCard title="RxJs" level={55} dialog="" icon={rxjsLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <ProgressCard title="Next.js" level={50} dialog="" icon={nextLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <ProgressCard title="TypeScript" level={50} dialog="" icon={typeScriptLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <ProgressCard title="Redux/NgRx" level={50} dialog="" icon={reduxLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <ProgressCard title="Stencil.js" level={35} dialog="" icon={stencilLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript" />
      </CardsGrid>
    </main>
  );
}
