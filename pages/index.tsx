import type { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import AuthContext from '../stores/authContext';
import { Sync } from '@mui/icons-material';

const Home: NextPage = () => {
	// !testing if we can retrieve owner's pet profiles, need to move it to userHome.tsx later
	let data: [];
	const getPetProfileByOwner = async () => {
		await fetch('/.netlify/functions/getPetProfileByOwner', {
			method: 'POST',
			body: JSON.stringify({
				// todo: add owner id
				owner_id: '',
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('res is: ', res);
				data = res;
			})
			.catch((err) => {
				console.log(err);
			});
		return data;
	};

	return (
		<div>
			{/* {			{authReady && (
				<div>
					{!user && <button onClick={login}>login</button>}
					{user && <p>{user?.email}</p>}
					<div>{JSON.stringify(user)}</div>
					{user && <button onClick={logout}>logout</button>}
				</div>
			)}} */}
			<h1>this is index.tsx which should be the landing page</h1>
			<br />
			{/* data: {getPetProfileByOwner()} */}
			<div>
				<h5>here should be cartoon dogs and cats</h5>
			</div>
		</div>
	);
};

export default Home;
