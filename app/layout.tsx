import { cn } from '@/lib/utils';
import './globals.css';
import { Inter } from 'next/font/google';
import { DropdownMenuRadio } from '@/components/drop-down-menu';
import Script from 'next/script';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Developer | Marcos Salvo',
  description: 'Welcome to my website. I am Marcos Rodriguez Salvo, a frontend developer from Spain with 2 years of experience.',
  authors: [{ name: 'Marcos Rodriguez Salvo' }],
  creator: 'Marcos Rodriguez Salvo',
  publisher: 'Marcos Rodríguez Salvo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-primary text-white')}>
        <div className={cn('max-w-7xl mx-auto my-8 w-screen px-8')}>
          <DropdownMenuRadio />
          {children}
        </div>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NWLC6RT53D" strategy="afterInteractive" />
      <Script id="data-layer" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-NWLC6RT53D');`}
      </Script>
    </html>
  );
}
