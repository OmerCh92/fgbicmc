import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'FG Inter College | Admissions Open 2026',
  description: 'Federal Government Educational Institutions (C/G) Mardan Cantt, KP',
};

export const viewport: Viewport = {
  themeColor: '#18813c',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center text-sm mt-auto">
          <p className="mb-2">FG Boys Inter College &bull; Affiliated with Board of Intermediate &amp; Secondary Education Mardan</p>
          <p>&copy; {new Date().getFullYear()} FG Boys Inter College Mardan Cantt. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}