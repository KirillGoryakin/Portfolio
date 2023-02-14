import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { AppProps } from 'next/app';

import '@/styles/global.scss';
import '@/styles/fonts.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}