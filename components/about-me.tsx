import { cn } from '@/lib/utils';
import Image from 'next/image';
import avatar from '@/assets/img/avatar.webp';
import TypescriptLogo from '@/assets/img/typescript-logo.webp';
import JavascriptLogo from '@/assets/img/javascript-logo.webp';
import AngularLogo from '@/assets/img/angular-logo.webp';
import ReduxLogo from '@/assets/img/redux-logo.webp';
import RxjsLogo from '@/assets/img/rxjs-logo.webp';

export function AboutMe() {
  return (
    <main className={cn('h-[80vh] flex flex-col items-center')}>
      <div className={cn('relative w-32 lg:w-80 h-32 lg:h-80')}>
        <Image
          src={avatar}
          alt="Javascript logo"
          fill
          sizes="(min-width: 1024px) 20rem, 8rem"
          priority
          className={cn('rounded-full')}
        />
      </div>
      <h1 className={cn('lg:text-5xl text-lg font-bold text-center my-2 lg:my-5 lg:mt-0')}>Hi, I&#39;m Marcos.</h1>
      <h2 className={cn('lg:text-3xl text-sm font-bold text-center mb-5')}>
        <span className={cn('bg-white text-primary py-1 px-2 rounded mr-1 lg:mr-2 ')}>Frontend</span>
        {' '}
        developer specialized in
      </h2>
      <div className={cn('flex justify-center flex-wrap items-center my-3')}>
        <Image src={TypescriptLogo} alt="Typescript logo" width="80" height="80" />
        <Image src={JavascriptLogo} alt="Javascript logo" width="80" height="80" className={cn('ml-5 rounded mr-0')} />
        <Image src={AngularLogo} alt="Angular logo" width="100" height="100" />
        <Image src={ReduxLogo} alt="Redux logo" width="80" height="80" />
        <Image src={RxjsLogo} alt="Rxjs logo" width="80" height="80" className={cn('mx-5')} />
      </div>
    </main>
  );
}
