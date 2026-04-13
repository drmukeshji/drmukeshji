import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Mukesh Kumar',
  description: 'Associate Professor, Department of Engineering and Technology, Gurugram University',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-gray-100 mt-24 py-10 text-center">
          <p className="text-sm text-gray-400 tracking-wide font-inter">
            © {new Date().getFullYear()} Dr. Mukesh Kumar · Gurugram University
          </p>
        </footer>
      </body>
    </html>
  );
}
