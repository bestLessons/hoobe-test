import '../assets/styles/globals.scss';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import styles from './layout.module.scss';
import { LayoutFooter } from '@/components/layoutFooter/layoutFooter';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'hoo.be coding exercise',
  description:
    "hoo.be coding exercise's hoo.be page. check out their latest content, links, social profiles & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layoutContainer}>
          <div className={styles.contentContainer}>
            {children}
          </div>
          <LayoutFooter />
        </div>
      </body>
    </html>
  );
}
