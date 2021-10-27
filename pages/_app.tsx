import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import Head from 'next/head';
import { Layout } from '../components/Layout';
//import { Nav } from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// <>
		// 	<Head>
		// 		<title>Pupperly</title>
		// 	</Head>
		// 	<Nav />
		// 	<Component {...pageProps} />
		// </>
	);
}
export default MyApp;
