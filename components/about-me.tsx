import { cn } from '@/lib/utils';
import Image from 'next/image';

export function AboutMe() {
  return (
    <main className={cn('h-[80vh]')}>
      <Image src="/img/avatar.png" alt="Toony Avatar" width="200" height="200" className={cn('mx-auto')} />
      <h1 className={cn('lg:text-5xl text-lg font-bold text-center my-2 lg:my-5')}>Hi, I&#39;m Marcos.</h1>
      <h2 className={cn('lg:text-3xl text-sm font-bold text-center mb-5')}>
        <span className={cn('bg-white text-primary py-1 px-2 rounded mr-1 lg:mr-2 ')}>Frontend</span>
        {' '}
        developer specialized in
      </h2>
      <div className={cn('flex justify-center flex-wrap items-center my-3')}>
        <Image src="/img/typescript-logo.png" alt="Typescript logo" width="80" height="80" />
        <Image src="/img/javascript-logo.png" alt="Javascript logo" width="80" height="80" className={cn('ml-5 rounded mr-0')} />
        <Image src="/img/angular-logo.png" alt="Angular logo" width="100" height="100" />
        <Image src="/img/redux-logo.png" alt="Redux logo" width="80" height="80" />
        <Image src="/img/rxjss-logo.png" alt="Rxjs logo" width="80" height="80" className={cn('mx-5')} />
      </div>
    </main>
  );
}
