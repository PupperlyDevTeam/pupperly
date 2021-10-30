import React, { useState, useEffect } from 'react';
//import handler from '../netlify/functions/createPetProfile'

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
	// const [petInfo, setPetInfo] = useState({
	// 	petName: '',
	// 	gender: '',
	// 	species: '',
	// 	breed: '',
	// });
	const [petName, setPetName] = useState('');
	const [sex, setSex] = useState('');
	const [species, setSpecies] = useState('');
	const [breed, setBreed] = useState('');
	/* Modal */
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// dummyData
	const dummyData = [
		{ petName: 'A', Gender: 'Male', Species: 'Dog', Breed: 'Maltese' },
		{ petName: 'B', Gender: 'Female', Species: 'cat', Breed: 'I dont know' },
		{ petName: 'C', Gender: 'Male', Species: 'Dog', Breed: 'mix of unknown' },
	];
	// console.log('dummyData: ', dummyData);

	// todo: handle submit
	const handleSubmit = () => {};

	// todo: fetch all user's pet info
	const getPetsInfo = () => {};

	// todo: useEffect render all pets basic info

	// todo: testing backend functionalities
	// const data = fetch('/.netlify/functions/testFunction')
	// .then((res) => res.json())
	// .then((res) => console.log('res is: ', res));
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
										<h3>Name: {item.petName}</h3>
										<h4>Sex: {item.Gender}</h4>
										<h4>Species: {item.Species}</h4>
										<h4>Breed: {item.Breed}</h4>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
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
									<Input
										required
										placeholder='Gender'
										onChange={(e) => {
											setSex(e.target.value);
										}}
									/>
									<Input
										required
										placeholder='Species'
										onChange={(e) => {
											setSpecies(e.target.value);
										}}
									/>
									<Input
										required
										placeholder='Breed'
										onChange={(e) => {
											setBreed(e.target.value);
										}}
									/>
								</Box>
							</div>
							<Button>submit</Button>
						</Typography>
					</Box>
				</Modal>
			</Container>
		</div>
	);
};

export default userHome;
