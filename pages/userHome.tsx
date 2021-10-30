//import React from 'react'
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CssBaseline,
	Container,
	Typography,
	Button,
} from '@mui/material';

interface Props {}
/*
<Typography>Pet Name</Typography>
<Typography>Sex</Typography>
<Typography>Species</Typography>
<Typography>Breed</Typography>
*/
const userHome = (props: Props) => {
	const dummyData = [
		{ petName: 'A', Gender: 'Male', Species: 'Dog', Breed: 'Maltese' },
		{ petName: 'B', Gender: 'Female', Species: 'cat', Breed: 'I dont know' },
		{ petName: 'C', Gender: 'Male', Species: 'Dog', Breed: 'mix of unknown' },
	];
	console.log('dummyData: ', dummyData);
	return (
		<div>
			<h3>this is user's home page</h3>
			<br />
			{/* <Grid container spacing={2} direction='column' justifyContent='center'>
				{dummyData.map((item) => (

					<Grid item xs={8}>
						<h3>{item.petName}</h3>
						<h4>{item.Gender}</h4>
						<h4>{item.Species}</h4>
						<h4>{item.Breed}</h4>
					</Grid>
				))}
			</Grid> */}
			<Container maxWidth='md'>
				<Grid container spacing={2} direction='column' justifyContent='center'>
					{dummyData.map((item) => (
						<Grid item xs={8}>
							<Card>
								<h3>Name: {item.petName}</h3>

								<CardMedia
									image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapNwWRfZmmTBwd6POW-Nom5ZsGJKzEal6nA&usqp=CAU'
									title='Image title'
								/>
								<CardContent>
									<Typography>
										<h4>Gender: {item.Gender}</h4>
										<h4>Species: {item.Species}</h4>
										<h4>Breed: {item.Breed}</h4>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			<Button>ADD</Button>
		</div>
	);
};

export default userHome;
