import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../stores/authContext';
// import Head from 'next/head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<Header />
			<Component {...pageProps} />
		</AuthContextProvider>
	);
}

export default MyApp;
