import * as React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Xin!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

export default function LandingSection() {
	return (
		<FullScreenSection
			justifyContent='center'
			alignItems='center'
			isDarkBackground
			backgroundColor='#2A4365'
		>
			<Stack direction='column' spacing={16}>
				<Stack direction='column' spacing={4} alignItems='center'>
					<Avatar
						alt='Xin Li'
						src='https://avatars.githubusercontent.com/u/78652542?v=4'
					/>
					<Typography variant='h4'>{greeting}</Typography>
				</Stack>
				<Stack direction='column' spacing={6}>
					<Typography variant='h1'>{bio1}</Typography>
					<Typography variant='h1'>{bio2}</Typography>
				</Stack>
			</Stack>
		</FullScreenSection>
	);
}
