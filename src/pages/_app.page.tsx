import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from 'styled-components'

import { MainContextProvider } from '@context'

import theme from '../styles/theme'

// next auth

export default function App({ 
  Component,
  pageProps: { session, ...pageProps }
 }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MainContextProvider >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MainContextProvider>
    </SessionProvider>
  )
}
