//import React from 'react'
import { ClassNames } from '@emotion/react';
//import '../styles/Home.module.css';
import Head from 'next/head';
import { Nav } from './Nav';
import { AppBar } from '@mui/material';
interface Props {
	children: object;
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<title>Pupperly</title>
				<script
					type='text/javascript'
					src='https://identity.netlify.com/v1/netlify-identity-widget.js'
				></script>
			</Head>
			<AppBar position='fixed' style={{ background: '#023047' }}>
				<Nav />
				<h3>this is Layout</h3>
				<div data-netlify-identity-menu>netlify identity menu src link</div>
			</AppBar>
			<div>
				<main>{children}</main>
			</div>
		</>
	);
};
