import * as React from 'react';
import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import TabPane from './TabPane';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
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
		<Container component='section' id='projects' style={projectscontainer}>
			<TrackVisibility>
				{({ isVisible }) => (
					<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
						<Typography variant='h2'>Projects</Typography>
						<Typography paragraph>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
						<Box id='projects-tabs'>
							<Tabs
								className='nav-pills mb-5 justify-content-center align-items-center'
								id='pills-tab'
								value={value}
								onChange={handleChange}
							>
								<Tab label='Tab1' />
								<Tab label='Tab2' />
								<Tab label='Tab3' />
							</Tabs>

							{projects.map((project, index) => (
								<TabPane index={0} value={value} isVisible={isVisible}>
									<ProjectCard key={index} {...project} />
								</TabPane>
							))}

							<TabPane index={1} value={value} isVisible={isVisible}>
								<Typography paragraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Cumque quam, quod neque provident velit, rem explicabo
									excepturi id illo molestiae blanditiis, eligendi dicta
									officiis asperiores delectus quasi inventore debitis quo.
								</Typography>
							</TabPane>
							<TabPane index={2} value={value} isVisible={isVisible}>
								<Typography paragraph>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Cumque quam, quod neque provident velit, rem explicabo
									excepturi id illo molestiae blanditiis, eligendi dicta
									officiis asperiores delectus quasi inventore debitis quo.
								</Typography>
							</TabPane>
						</Box>
					</div>
				)}
			</TrackVisibility>
		</Container>
	);
}
