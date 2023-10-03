import '@/styles/globals.css'
import { useEffect } from 'react';

import type { AppProps } from 'next/app'
import App from 'next/app';

// import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from 'styled-components'

import { MainContextProvider } from '@context'

import theme from '../styles/theme'
import { Footer, Header } from '@/common';

// next auth

function Main({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //           const loader = document.getElementById('globalLoader');
  //       if (loader)
  //           loader.style.display = 'none';
  //   }
  // }, []);

  return (
    // <SessionProvider session={session}>
      <MainContextProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </MainContextProvider>
    // </SessionProvider>
  )
}

// Main.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default Main;