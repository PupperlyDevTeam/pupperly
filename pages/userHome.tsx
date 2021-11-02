import React, { useState, useEffect, useContext } from 'react';
//import Router from 'next/router';
import AuthContext from '../stores/authContext';
import { v4 as uuidv4 } from 'uuid';
//import Link from 'next/link';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
	Box,
	Grid,
	Card,
	CardContent,
	CssBaseline,
	Container,
	Input,
	Typography,
	Button,
	Modal,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
interface Props {}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
const userHome = (props: Props) => {
	const [petName, setPetName] = useState<string>('');
	const [pets, setPets] = useState<[]>([]);
	const [petId, setPetId] = useState<string>('');
	const [ownerId, setOwnerId] = useState<string>('');

	// get the user from netlify login
	const { user } = useContext(AuthContext);
	console.log('user:', user);

	/* Modal */
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// const dummyData = [
	// 	{ name: 'A', species: 'Dog', breed: 'Maltese', dob: '01/01/2020' },
	// 	{ name: 'B', species: 'cat', breed: 'I dont know', dob: '01/01/2020' },
	// 	{
	// 		name: 'C',
	// 		species: 'Dog',
	// 		breed: null,
	// 		dob: '01/01/2020',
	// 	},
	// ];

	// fetch all user's pet info
	// todo: get pet profile by owner id
	const getPetProfileByOwner = async () => {
		try {
			const res = await fetch('/.netlify/functions/getPetProfileByOwner', {
				method: 'POST',
				body: JSON.stringify({
					_eq: '103333',
				}),
			});
			//const jsonData = await res.json();
			//console.log('jsonData: ', jsonData);

			// setPets(jsonData);
			// console.log('pets: ', pets);

			// return jsonData;
			return res;
		} catch (error) {
			console.log('err from getPetProfileByOwner: ', error);
		}
	}; // end of getPetProfileByOwner

	// todo: create pet profile with pet's name
	// todo: generate pet ID uuid
	const createPetProfile = async (ownerID: string, petName: string) => {
		try {
			setPetId(uuidv4());
			console.log('petId: ', petId);

			const res = await fetch('/.netlify/functions/createPetProfile', {
				method: 'POST',
				body: JSON.stringify({
					// todo: replace with ownerID
					owner_id: '103333',
					name: petName,
					// ? what should I fill out for pet id?
					_id: petId,
				}),
			}).then((res) => res.json());
			console.log('res from createPetProfile: ', res);
		} catch (error) {
			console.log('err from createPetProfile: ', error);
		}
	}; // end of createPetProfile

	//direct to petprofile page once user click on NEXT button
	// ? Do we also create a pet profile for the user as well here ?
	const handleNext = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		console.log('next button clicked');
		console.log('petName in handleNEXT: ', petName);

		// create pet profile with pet's name
		// createPetProfile(ownerID, petName);

		//direct to petprofile page, use Link instead
		//Router.push('/petprofile');
	};

	//todo: create link for each pet's card to direct to petprofile page with pet's ID

	//useEffect render all pets basic info after retrieving it from DB
	useEffect(() => {
		getPetProfileByOwner()
			.then((res) => res.json())
			.then((res) => {
				setPets(res);
				console.log('res', res);
			});
		//setPets(getPetProfileByOwner());
	}, []);

	console.log('pets: ', pets);
	return (
		<div>
			<h3>this is user's home page</h3>
			<br />
			<Container maxWidth='md' align='center'>
				<br />
				<Grid container spacing={2} direction='column' justifyContent='center'>
					{pets
						? pets.map((item) => (
								<Grid item xs={8}>
									<Card>
										<CardContent>
											<Typography variant='h3'>Name: {item.name}</Typography>
											<Typography variant='h4'>
												Species: {item.species ? item.species : 'null'}
											</Typography>
											<Typography variant='h4'>
												Breed: {item.breed ? item.breed : 'null'}
											</Typography>
											<Typography variant='h4'>
												DOB: {item.dob ? item.dob : 'null'}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
						  ))
						: 'wanna add your pets?'}
				</Grid>
				<br />
				<Button variant='contained' endIcon={<AddIcon />} onClick={handleOpen}>
					ADD
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box sx={style}>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							modal open
						</Typography>
						<br />
						<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							<div>
								<Box
									component='form'
									sx={{
										'& > :not(style)': { m: 1 },
									}}
									noValidate
									autoComplete='off'
								>
									<Input
										required={true}
										placeholder="Pet's name"
										onChange={(e) => {
											setPetName(e.target.value);
										}}
									/>
								</Box>
							</div>
							<br />
							<Router>
								<Link to={{ pathname: '/petprofile', state: { pets: pets } }}>
									<Button variant='contained' onClick={(e) => handleNext(e)}>
										NEXT
									</Button>
								</Link>
							</Router>
						</Typography>
					</Box>
				</Modal>
			</Container>
		</div>
	);
};

export default userHome;
