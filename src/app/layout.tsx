import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import TopNavigation from '@/components/TopNavigation';
import FooterMenu from '@/components/FooterMenu';
import ContextProvider from '@/components/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youtube Clone',
  description: 'YouTube',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* {children} */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider>
            <TopNavigation />
            <main className="pt-0">{children}</main>
            <FooterMenu />
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
