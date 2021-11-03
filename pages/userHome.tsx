import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import AuthContext from '../stores/authContext';
import { v4 as uuidv4 } from 'uuid';
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
	const [ownerId, setOwnerId] = useState<string>('');

	// get the user from netlify login
	const { user } = useContext(AuthContext);
	//console.log('user:', user?.id);
	// setOwnerId(user?.id);

	/* Modal */
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// fetch all user's pet info
	// todo: get pet profile by owner id
	const getPetProfileByOwner = async (ownerId) => {
		try {
			const res = await fetch('/.netlify/functions/getPetProfileByOwner', {
				method: 'POST',
				body: JSON.stringify({
					_eq: ownerId,
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
	const createPetProfile = async (
		ownerId: string,
		petName: string,
		petId: string
	) => {
		try {
			//setPetId(uuidv4());
			//setPetId('12345');
			console.log('petId in create pet profile: ', petId);

			const res = await fetch('/.netlify/functions/createPetProfile', {
				method: 'POST',
				body: JSON.stringify({
					// todo: replace with ownerID
					owner_id: ownerId,
					name: petName,
					// ? what should I fill out for pet id?
					_id: petId,
				}),
			}).then((res) => res.json());
			console.log('res from createPetProfile: ', res);
			//console.log('res is:')
		} catch (error) {
			console.log('err from createPetProfile: ', error);
		}
	}; // end of createPetProfile

	//direct to petprofile page once user click on NEXT button
	// ? Do we also create a pet profile for the user as well here ?
	const handleNext = async(
		e: React.MouseEvent<HTMLElement>,
		ownerId,
		petName,
		petId
	) => {
		e.preventDefault();
		console.log('next button clicked');
		console.log('petName in handleNEXT: ', petName);

		// ! create pet profile with pet's name
		//setPetId(`${Math.random()}`);
		setPetId('12345');
		//console.log('petId in handleNext: ', petId);
		await createPetProfile(ownerId, petName, petId);

		//direct to petprofile page, use Link instead
		//Router.push('/petprofile');
		await Router.push({pathname: '/petprofile', query: {ownerId,petId: petId}});
	};

	//todo: create link for each pet's card to direct to petprofile page with pet's ID

	//useEffect render all pets basic info after retrieving it from DB
	useEffect(() => {
		if (!user) {
			Router.push('/');
		}
		getPetProfileByOwner(ownerId)
			.then((res) => res.json())
			.then((res) => {
				setPets(res);
				console.log('res', res);
			});
		setOwnerId(user?.id);
		//console.log('ownerId:', ownerId);
		//setPets(getPetProfileByOwner());
	}, []);

	return (
		<div>
			<h3>this is user's home page</h3>
			<br />
			<Container maxWidth='md' align='center'>
				<br />
				<Grid container spacing={2} direction='column' justifyContent='center'>
					{pets && pets.length
						? pets.map((item) => (
								<Grid item xs={8}>
									<Link
										href={{
											pathname: '/',
											query: { ownerId, petId: item._id ? item._id : '' },
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

							<Button
								variant='contained'
								onClick={(e) => {handleNext(e, ownerId, petName, petId)}}
							>
								{/* <Link
									href={{
										pathname: '/petprofile',
										query: { ownerId: ownerId, petId: petId },
									}}
								> */}
									NEXT
								{/* </Link> */}
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
