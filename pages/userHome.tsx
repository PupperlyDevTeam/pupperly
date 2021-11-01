import React, { useState, useEffect } from 'react';
//import handler from '../netlify/functions/createPetProfile'
import Router from 'next/router';
//import handler from '../netlify/functions/getPetProfileByOwner';

import {
	Box,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CssBaseline,
	Container,
	Input,
	TextField,
	Typography,
	Button,
	Modal,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
interface Props {}
interface petInfo {
	petName: string;
	gender: string;
	species: string;
	breed: string;
}

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
	const [petName, setPetName] = useState('');
	/* Modal */
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// dummyData
	const dummyData = [
		{ name: 'A', species: 'Dog', breed: 'Maltese', dob: '01/01/2020' },
		{ name: 'B', species: 'cat', breed: 'I dont know', dob: '01/01/2020' },
		{
			name: 'C',
			species: 'Dog',
			breed: 'mix',
			dob: '01/01/2020',
		},
	];

	// todo: fetch all user's pet info
	// get pet profile by owner id
	let pets: [];
	const getPetProfileByOwner = async () => {
		await fetch('/.netlify/functions/getPetProfileByOwner', {
			method: 'POST',
			body: JSON.stringify({
				// todo: add owner id
				owner_id: '65465469849615',
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('res from getPetProfileByOwner: ', res);
				pets = res;
			})
			.catch((err) => {
				console.log('err from getPetProfileByOwner: ', err);
			});
		return pets;
	};
	getPetProfileByOwner();
	// todo: useEffect render all pets basic info after retrieving it from DB
	// ? /*  */if one of the items in data is null, render null? or not render that item?

	/* 	useEffect(() => {
		getPetProfileByOwner();
	},[]); */

	// todo: testing backend functionalities

	//todo: direct to petprofile page once user click on NEXT button
	// ? Do we also create a pet profile for the user as well here ?
	const handleNext = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		console.log('next button clicked');
		//direct to petprofile page
		Router.push('/petprofile');
	};
	return (
		<div>
			<h3>this is user's home page</h3>
			<br />
			<Container maxWidth='md' align='center'>
				<Grid container spacing={2} direction='column' justifyContent='center'>
					{dummyData.map((item) => (
						<Grid item xs={8}>
							<Card>
								<CardContent>
									<Typography>
										<h3>Name: {item.name}</h3>
										<h4>Species: {item.species}</h4>
										<h4>Breed: {item.breed}</h4>
										<h4>DOB: {item.dob}</h4>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
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
							<Button variant='contained' onClick={(e) => handleNext(e)}>
								NEXT
							</Button>
						</Typography>
					</Box>
				</Modal>
			</Container>
		</div>
	);
};

export default userHome;
