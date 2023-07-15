import { cn } from '@/lib/utils';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcos Salvo Website',
  description: 'Personal website where you can learn more about me and my work.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-primary')}>
        <div className={cn('max-w-7xl', 'mx-auto', 'my-8', 'w-screen')}>
          {children}
        </div>
      </body>
    </html>
  );
}
