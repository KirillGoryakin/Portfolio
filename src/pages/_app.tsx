import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { AppProps } from 'next/app';

import '@/styles/global.scss';
import '@/styles/fonts.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Kirill Goryakin portfolio</title>
        <link rel='icon' type='image/x-icon' href='/images/favicon.svg' />
      </Head>
      
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}