import * as React from 'react';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import TabPane from './TabPane';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { projectscontainer } from '../styles';

export default function Projects() {
	const [value, setValue] = React.useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const projects = [
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg1,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg2,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg3,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg1,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg2,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg3,
		},
	];

	return (
		<Box component='section' id='projects' style={projectscontainer}>
			<TrackVisibility>
				{({ isVisible }) => (
					<Stack
						direction='column'
						spacing={2}
						className={isVisible ? 'animate__animated animate__fadeIn' : ''}
					>
						<Typography variant='h2'>Projects</Typography>
						<Typography paragraph>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
						<Tabs
							className='nav-tabs'
							id='pills-tab'
							value={value}
							onChange={handleChange}
						>
							<Tab label='Projects' className='nav-tab' />
							<Tab label='Tab2' className='nav-tab' />
							<Tab label='Tab3' className='nav-tab' />
						</Tabs>

						<TabPane index={0} value={value}>
							{projects.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</TabPane>

						<TabPane index={1} value={value}>
							<Typography paragraph>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
								quam, quod neque provident velit, rem explicabo excepturi id
								illo molestiae blanditiis, eligendi dicta officiis asperiores
								delectus quasi inventore debitis quo.
							</Typography>
						</TabPane>
						<TabPane index={2} value={value}>
							<Typography paragraph>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
								quam, quod neque provident velit, rem explicabo excepturi id
								illo molestiae blanditiis, eligendi dicta officiis asperiores
								delectus quasi inventore debitis quo.
							</Typography>
						</TabPane>
					</Stack>
				)}
			</TrackVisibility>
		</Box>
	);
}
