import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function devCarrinho({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    </>)    
}

export default devCarrinho
