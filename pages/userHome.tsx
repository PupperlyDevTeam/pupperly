import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import AuthContext from '../stores/authContext';
import {
	Box,
	Grid,
	Card,
	CardContent,
	Container,
	CssBaseline,
	Input,
	Typography,
	Button,
	Modal,
	Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from '../styles/User.module.css';
import { style } from '@mui/system';

interface petObj {
	name: string;
	species: string;
	breed: string;
	dob: string;
	_id: string;
}

const userHome = () => {
	const [petName, setPetName] = useState<string>('');
	const [pets, setPets] = useState<petObj[]>([]);
	const [petId, setPetId] = useState<string>('');
	//const [ownerId, setOwnerId] = useState<string>('');

	// get the user from netlify login
	const { user } = useContext(AuthContext);

	/* Modal */
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setPetId(Math.random().toString(36).substr(2, 9));
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	//get pet profile by owner id
	const getPetProfileByOwner = async () => {
		try {
			const res = await fetch('/.netlify/functions/getPetProfileByOwner', {
				method: 'POST',
				body: JSON.stringify({
					_eq: user?.id,
				}),
			});
			const jsonData = await res.json();

			setPets(jsonData);

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

		createPetProfile();

		//direct to petprofile page, use Link instead
		Router.push({
			pathname: '/petprofile',
			query: { ownerId: user?.id, petId: petId },
		});
	};

	// todo: handle delete pet
	const handleDelete = (id: string) => {
		//e.preventDefault();
		console.log('delete button clicked');
		//get pet id from pets (item._id)
		fetch('/.netlify/functions/deletePetProfile', {
			method: 'POST',
			body: JSON.stringify({
				_id: id,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('res in handleDelete: ', res);
				// setPets(res);
				// console.log('pets in handleDelete: ', pets);
			})
			.catch((err) => console.log('err, ', err));
		// console.log(`in handleDelete: pet ${id} deleted`);

		// * reload current page after delete
		// another way is to setPets with data get back, and pass pets to useEffect, which somehow constantly re-render, too much rendering overload the server
		location.reload();
	};

	// todo: handle pet details: direct to petprofile page
	const handleDetail = (id: string) => {
		//e.preventDefault();

		Router.push({
			pathname: '/petprofile',
			query: { ownerId: user?.id, petId: id },
		});
	}; //end of handleDetail

	useEffect(() => {
		user;
		if (!user) {
			Router.push('/');
		}

		getPetProfileByOwner();
	}, [user]);

	return (
		<div>
			<br />
			<CssBaseline />
			<Container maxWidth='md' className={styles.container}>
				<br />
				<Grid container spacing={4} justifyContent='center' direction='column'>
					{pets && pets.length
						? pets.map((item) => (
								<Grid item xs={12} sm={6} md={4}>
									<Card className={styles.card}>
										<CardContent>
											<Typography variant='h4'>Name: {item.name}</Typography>
											<Typography variant='h5'>
												Species: {item.species ? item.species : 'null'}
											</Typography>
											<Typography variant='h5'>
												Breed: {item.breed ? item.breed : 'null'}
											</Typography>
											<Typography variant='h5'>
												DOB: {item.dob ? item.dob : 'null'}
											</Typography>
										</CardContent>
										<Stack
											spacing={2}
											direction='row'
											justifyContent='center'
											className={styles.stack}
										>
											<Button
												variant='outlined'
												color='primary'
												onClick={() => handleDetail(item._id ? item._id : '')}
											>
												Details
											</Button>
											<Button
												variant='outlined'
												color='secondary'
												onClick={() => handleDelete(item._id ? item._id : '')}
											>
												Delete
											</Button>
										</Stack>
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
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 400,
							bgcolor: 'background.paper',
							border: '2px solid #000',
							boxShadow: 24,
							p: 4,
						}}
					>
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
