//import React from 'react'
//import Link from 'next/link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
interface Props {}

export const Nav = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				typography: 'body1',
				'& > :not(style) + :not(style)': {
					ml: 2,
				},
			}}
		>
			<Link href='/' color='inherit'>
				Home
			</Link>

			<Link href='/userHome' color='inherit'>
				userHome
			</Link>
		</Box>
	);
};
