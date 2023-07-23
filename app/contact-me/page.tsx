import { ContactMeForm } from '@/components/contact-me-form';
import Image from 'next/image';
import emailIcon from '@/assets/img/email-icon.webp';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <main className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('relative', 'w-20', 'lg:w-52', 'h-20', 'lg:h-52')}>
        <Image
          src={emailIcon}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 13rem, 5rem"
          priority
          className={cn('object-contain')}
        />
      </div>
      <h1 className={cn('lg:text-5xl', 'text-lg', 'font-bold', 'text-center', 'my-2', 'lg:my-5', 'lg:mt-0')}>Contact me</h1>
      <ContactMeForm />
    </main>
  );
}
