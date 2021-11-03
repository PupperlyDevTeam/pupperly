import type { NextPage } from 'next';
import { useEffect, useContext } from 'react';
import Router from 'next/router';
import AuthContext from '../stores/authContext';
import PetProfileHx from '../components/PetProfileHx';
import PetProfileInfo from '../components/PetProfileInfo';
import PetProfileMed from '../components/PetProfileMed';
import PetProfileVax from '../components/PetProfileVax';
import { useRouter } from 'next/router';

import { Container, Button, Paper } from '@mui/material';

const PetProfile: NextPage = () => {
	const router = useRouter();
	const { user } = useContext(AuthContext);
	useEffect(() => {
		if (!user) {
			Router.push('/');
		}
		console.log('router info: ', router.query);
	}, [user]);

	return (
		<Container
			sx={{
				display: 'grid',
				gridAutoFlow: 'row',
				gridTemplateColumns: '1fr 1fr',
				gridTemplateRows: '1fr 1fr 1fr',
			}}
		>
			<Paper sx={{ gridColumn: '1', gridRow: 'span 3' }}>
				<PetProfileInfo />
			</Paper>
			<Paper sx={{ gridColumn: '2', gridRow: '1/4' }}>
				<PetProfileVax />
				<PetProfileMed />
				<PetProfileHx />
			</Paper>
			<Button
				onClick={() =>
					fetch('/.netlify/functions/createPetProfile', {
						method: 'POST',
						body: JSON.stringify({
							owner_id: '2355252',
							name: 'nick',
							_id: '1234',
						}),
					})
						.then((res) => res.json())
						.then((res) => console.log(res))
						.catch((err) => console.log('err, ', err))
				}
			>
				Create Pet Profile
			</Button>
			<Button
				onClick={() =>
					fetch('/.netlify/functions/deletePetProfile', {
						method: 'POST',
						body: JSON.stringify({
							_id: '1234',
						}),
					})
						.then((res) => res.json())
						.then((res) => console.log(res))
						.catch((err) => console.log('err, ', err))
				}
			>
				Delete Pet Profile
			</Button>
			<Button
				onClick={() =>
					fetch('/.netlify/functions/getPetProfile', {
						method: 'POST',
						body: JSON.stringify({
							_id: '13035135',
						}),
					})
						.then((res) => res.json())
						.then((res) => console.log(res))
						.catch((err) => console.log('err, ', err))
				}
			>
				Get Pet Profile
			</Button>
			<Button
				onClick={() =>
					fetch('/.netlify/functions/getPetProfileByOwner', {
						method: 'POST',
						body: JSON.stringify({
							_eq: '103333',
						}),
					})
						.then((res) => res.json())
						.then((res) => console.log(res))
						.catch((err) => console.log('err, ', err))
				}
			>
				Get Pet Profile BY OWNER
			</Button>
			<Button
				onClick={() =>
					fetch('/.netlify/functions/updatePetProfile', {
						method: 'POST',
						body: JSON.stringify({
							_id: '26236',
							allergies: 'water',
							breed: 'Koi',
							dob: '2020-12-12',
							med_hx: JSON.stringify(['debloating']),
							medications: JSON.stringify(['fish zoloft']),
							name: 'Goldfish',
							sex: 'M',
							species: 'Fish',
							surg_hx: null, //must json.stringify any array values
							vaccinations: null, //must json.stringify any array values
						}),
					})
						.then((res) => res.json())
						.then((res) => console.log(res))
						.catch((err) => console.log('err, ', err))
				}
			>
				Update Pet Profile
			</Button>
		</Container>
	);
};

export default PetProfile;
