import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import  netlifyIdentity from 'netlify-identity-widget';

function MyApp({ Component, pageProps }: AppProps) {
  // netlifyIdentity.init()
  return <Component {...pageProps} />
}
export default MyApp
