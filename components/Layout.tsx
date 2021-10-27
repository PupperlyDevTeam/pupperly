//import React from 'react'
import { ClassNames } from '@emotion/react';
import styles from '../styles/Home.module.css';
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
			</Head>
			<AppBar position='fixed'>
				<Nav />
				<h3>this is Layout</h3>
			</AppBar>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};
