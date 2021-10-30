import type { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import AuthContext from '../stores/authContext';

const Home: NextPage = () => {
	// const data = fetch('/.netlify/functions/testFunction')
	// 	.then((res) => res.json())
	// 	.then((res) => console.log('res is: ', res));
	const { user, login, logout, authReady } = useContext(AuthContext);
	console.log('user', user);

	return (
		<div>
			{authReady && (
				<div>
					{!user && <button onClick={login}>login</button>}
					{user && <p>{user?.email}</p>}
					{/* <div>{JSON.stringify(user)}</div> */}
					{user && <button onClick={logout}>logout</button>}
				</div>
			)}
			<h1>this is index.tsx which should be the landing page</h1>
		</div>
	);
};

export default Home;
