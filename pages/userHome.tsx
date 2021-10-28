//import React from 'react'
import { Grid } from '@mui/material';

interface Props {}

const userHome = (props: Props) => {
	const dummyData = [
		{ petName: 'A', history: 'alot of problem' },
		{ petName: 'B', history: 'alot of problem' },
		{ petName: 'C', history: 'alot of problem' },
	];
	return (
		<div>
			<h3>this is user's home page</h3>
			{/* <>Dummy Data: {dummyData}</> */}

			<Grid container spacing={3}>
				{dummyData.map((item) => {
					<Grid item xs={12} sm={6} md={4}>
						{item}
					</Grid>;
				})}
			</Grid>
		</div>
	);
};

export default userHome;
