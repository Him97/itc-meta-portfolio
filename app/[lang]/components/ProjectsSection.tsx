import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Grid, Typography } from '@mui/material';
import Cards from './Cards';

const projects = [
	{
		title: 'Little Llama',
		description:
			'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
		getImageSrc: () => require('../assets/photo1.jpg'),
	},
	{
		title: 'React Infinite Scroll',
		description:
			'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
		getImageSrc: () => require('../assets/photo2.jpg'),
	},
	{
		title: 'Photo Gallery',
		description:
			'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
		getImageSrc: () => require('../assets/photo3.jpg'),
	},
	{
		title: 'Event planner',
		description:
			'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
		getImageSrc: () => require('../assets/photo4.jpg'),
	},
];

export default function ProjectsSection() {
	return (
		<FullScreenSection
			backgroundColor='#14532d'
			isDarkBackground
			p={8}
			alignItems='flex-start'
			spacing={8}
		>
			<Typography variant='h1' id='projects-section'>
				Featured Projects
			</Typography>
			<Grid container gap={8}>
				{projects.map((project) => (
					<Grid item key={project.title}>
						<Cards
							key={project.title}
							title={project.title}
							description={project.description}
							imageSrc={project.getImageSrc()}
						/>
					</Grid>
				))}
			</Grid>
		</FullScreenSection>
	);
}
