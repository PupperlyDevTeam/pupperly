import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import AuthContext from '../stores/authContext';
import Link from 'next/link';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
interface petObj {
	name: string;
	species: string;
	breed: string;
	dob: string;
	_id: string;
}

// modal styles
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
	//const [ownerId, setOwnerId] = useState<string>('');

	// get the user from netlify login
	const { user } = useContext(AuthContext);
	//console.log('user in the beginning:', user);
	//setOwnerId(user?.id);

	/* Modal */
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setPetId(Math.random().toString(36).substr(2, 9));
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	// fetch all user's pet info
	// todo: get pet profile by owner id
	const getPetProfileByOwner = async () => {
		try {
			const res = await fetch('/.netlify/functions/getPetProfileByOwner', {
				method: 'POST',
				body: JSON.stringify({
					_eq: user?.id,
				}),
			});
			const jsonData = await res.json();
			//console.log('jsonData: ', jsonData);

			setPets(jsonData);
			//console.log('pets in get pets: ', pets);

			// return jsonData;
			return res;
		} catch (error) {
			console.log('err from getPetProfileByOwner: ', error);
		}
	}; // end of getPetProfileByOwner

	// todo: create pet profile with pet's name
	// todo: generate pet ID uuid
	const createPetProfile = async () => {
		try {
			//setPetId(uuidv4());
			//setPetId('12345');
			//console.log('petId in create pet profile: ', petId);

			const res = await fetch('/.netlify/functions/createPetProfile', {
				method: 'POST',
				body: JSON.stringify({
					owner_id: user?.id,
					name: petName,
					_id: petId,
				}),
			}).then((res) => res.json());
			console.log('res from createPetProfile: ', res);
		} catch (error) {
			console.log('err from createPetProfile: ', error);
		}
	}; // end of createPetProfile

	//direct to petprofile page once user click on NEXT button
	const handleNext = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		// console.log('next button clicked');
		// console.log('petName in handleNEXT: ', petName);

		// ! create pet profile with pet's name
		//setPetId(uuidv4());
		// setPetId('00000');
		// console.log('petId: ', petId);
		createPetProfile();

		//direct to petprofile page, use Link instead
		Router.push({
			pathname: '/petprofile',
			query: { ownerId: user?.id, petId: petId },
		});
	};

	//todo: create link for each pet's card to direct to petprofile page with pet's ID

	//useEffect render all pets basic info after retrieving it from DB
	//const { user } = useContext(AuthContext);
	useEffect(() => {
		user;
		if (!user) {
			Router.push('/');
		}
		//console.log('user in useEffect: ', user);

		getPetProfileByOwner();

	}, [user]);

	
	return (
		<div>
			<h3>this is user's home page</h3>
			<br />
			<Container maxWidth='md'>
				<br />
				<Grid container spacing={2} direction='column' justifyContent='center'>
					{pets && pets.length
						? pets.map((item) => (
								<Grid item xs={8}>
									<Link
										href={{
											pathname: '/petprofile',
											query: {
												ownerId: user?.id,
												petId: item._id ? item._id : '',
											},
										}}
									>
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
									</Link>
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
							{/* <Router> */}

							<Button variant='contained' onClick={(e) => handleNext(e)}>
								NEXT
							</Button>

							{/* </Router> */}
						</Typography>
					</Box>
				</Modal>
			</Container>
		</div>
	);
};

export default userHome;
