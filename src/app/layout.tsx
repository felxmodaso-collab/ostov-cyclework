import type { Metadata } from 'next';
import { Fraunces, JetBrains_Mono } from 'next/font/google';
import { CursorLight } from '@/components/CursorLight';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Ostov — Стальные рандоннёрские рамы ручной сборки',
  description:
    'Частная мастерская. Восемь рам в год, по замерам одного райдера. Москва.',
  openGraph: {
    title: 'Ostov Cyclework',
    description: 'Восемь стальных рандоннёрских рам в год, по замерам.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${fraunces.variable} ${mono.variable}`}>
      <body>
        <div className="ambient-wash" aria-hidden="true" />
        <CursorLight />
        {children}
      </body>
    </html>
  );
}
