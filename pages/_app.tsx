import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../stores/authContext';
// import Head from 'next/head';
import { Layout } from '../components/Layout';
import Header from '../components/Header';
//import { Nav } from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			{/* <Layout> */}
			<Header />
			<Component {...pageProps} />
			{/* </Layout> */}
		</AuthContextProvider>
	);
}

export default MyApp;
