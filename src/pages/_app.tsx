import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import 'public/css/all.min.css';
import 'public/css/fonts.css';
import 'public/css/style.scss';
import 'public/css/fonts-bebas.css';
import 'public/css/animate.min.css';
import Layout from '@/components/Layout';


export default function App({ Component, pageProps }: AppProps) {

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<title>BombayBees</title>
				{/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" /> */}
				{/* <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" /> */}
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
			{/* Global Site Tag (gtag.js) - Google Analytics
			{process.env.NODE_ENV === 'production' && (
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				/>
			)} */}

			<Script strategy='afterInteractive' src='/js/jquery-3.5.1.min.js' />
			<Script strategy='afterInteractive' src='/js/bootstrap.bundle.min.js' />
			<Script strategy='afterInteractive' src='/js/all.min.js' />
		</>
	);
}
