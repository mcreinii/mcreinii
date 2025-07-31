import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Who? - mcreinii',
  description: 'A simple portfolio to enhance and practice my coding skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
