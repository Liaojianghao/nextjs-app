import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modal/RegisterModal';
import ToastProvider from './providers/ToastProvider';
import LoginModal from './components/modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'airbnb',
  description: 'Airbnb clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
