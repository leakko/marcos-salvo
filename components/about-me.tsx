import { cn } from '@/lib/utils';
import Image from 'next/image';
import avatar from '@/assets/img/avatar.webp';
import JavascriptLogo from '@/assets/img/javascript-logo.webp';
import AngularLogo from '@/assets/img/angular-logo.webp';
import ReduxLogo from '@/assets/img/redux-logo.webp';
import { SkillCard } from './skill-card';

export function AboutMe() {
  return (
    <main className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('relative', 'w-32', 'lg:w-80', 'h-32', 'lg:h-80')}>
        <Image
          src={avatar}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 20rem, 8rem"
          priority
          className={cn('rounded-full')}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <h1 className={cn('lg:text-5xl', 'text-lg', 'font-bold', 'text-center', 'my-2', 'lg:my-5', 'lg:mt-0')}>Hi, I&#39;m Marcos.</h1>
      <h2 className={cn('lg:text-3xl', 'text-sm', 'font-bold', 'text-center mb-5')}>
        <span className={cn('bg-white', 'text-primary', 'py-1', 'px-2', 'rounded', 'mr-1', 'lg:mr-2')}>Frontend</span>
        {' '}
        developer specialized in
      </h2>
      <div className={cn('flex', 'justify-center', 'flex-wrap', 'items-start', 'my-3')}>
        <SkillCard title="Angular" level={85} dialog="" icon={AngularLogo}>
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Two years of experience</strong>
            {' '}
            as
            {' '}
            <strong>Angular</strong>
            {' '}
            frontend developer.
          </p>
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            Currently working with
            {' '}
            <strong>Angular 14</strong>
            {' '}
            as
            {' '}
            <strong>Vodafone</strong>
            {' '}
            internal frontend developer.
          </p>
        </SkillCard>
        <SkillCard title="JavaScript" level={75} dialog="" icon={JavascriptLogo}>
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Strong foundations</strong>
            {' '}
            in JavaScript thanks to:
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              Exceling in the
              {' '}
              <strong>Frontend/JS</strong>
              {' '}
              related subjects at my
              {' '}
              <strong>Software Engineering degree</strong>
            </li>
            <li>
              Working
              {' '}
              <strong>professionally</strong>
              {' '}
              with JavaScript for more than 2 years.
            </li>
          </ul>
        </SkillCard>
        <SkillCard title="Redux/RxJs" level={60} dialog="" icon={ReduxLogo}>
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
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
            <strong>NgRx</strong>
            {' '}
            (Redux for Angular) and
            {' '}
            <strong>RxJs</strong>
            .
          </p>
        </SkillCard>
      </div>
    </main>
  );
}
