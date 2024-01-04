import * as React from 'react';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import TabPane from './TabPane';
import { TabCard } from './TabCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Styles from '../styles';
import { useTranslation } from 'react-i18next';

export default function Projects() {
	const { t } = useTranslation();
	const [value, setValue] = React.useState<number>(0);
	const { projectscontainer, navtab, navtabs } = Styles();

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const frontend = [
		{
			title: 'Zelaze',
			description:
				'Final Group Project @ITC | Customized Mutual Assistance Service',
			imgUrl: projImg1,
			url: 'https://him-li.github.io/zelaze-frontend/',
		},
		{
			title: 'Little Llama',
			description: 'Final Personal Project @ITC | Pet Adoption Service',
			imgUrl: projImg2,
			url: 'https://github.com/him-li/littlellama',
		},
		{
			title: 'Little Lemon',
			description: 'Frontend Capstone @Meta | Restaurant Website',
			imgUrl: projImg3,
			url: 'https://github.com/him-li/meta-react-littlelemon',
		},
	];

	const backend = [
		{
			title: 'Zelaze',
			description:
				'Final Group Project @ITC | Customized Mutual Assistance Service',
			imgUrl: projImg1,
			url: 'https://github.com/him-li/zelaze-backend',
		},
		{
			title: 'Little Llama',
			description: 'Final Personal Project @ITC | Pet Adoption Service',
			imgUrl: projImg2,
			url: 'https://github.com/him-li/itc-pet-adoption-backend',
		},
	];

	return (
		<Box
			component='section'
			id='projects'
			style={projectscontainer}
			color='Background'
		>
			<TrackVisibility>
				{({ isVisible }) => (
					<Stack
						direction='column'
						spacing={2}
						className={isVisible ? 'animate__animated animate__fadeIn' : ''}
					>
						<Typography variant='h2'>{t('projects')}</Typography>
						<Typography paragraph>{t('projects-para')}</Typography>
						<Tabs
							className='nav-tabs'
							id='pills-tab'
							value={value}
							onChange={handleChange}
							variant='fullWidth'
							style={navtabs}
						>
							<Tab label='Frontend' className='nav-tab' sx={navtab} />
							<Tab label='Backend' className='nav-tab' sx={navtab} />
							<Tab label='Mobile Apps' className='nav-tab' sx={navtab} />
						</Tabs>

						<TabPane index={0} value={value}>
							{frontend.map((project, index) => (
								<TabCard key={index} {...project} />
							))}
						</TabPane>

						<TabPane index={1} value={value}>
							{backend.map((project, index) => (
								<TabCard key={index} {...project} />
							))}
						</TabPane>

						<TabPane index={2} value={value}>
							<Typography paragraph>More to come...</Typography>
						</TabPane>
					</Stack>
				)}
			</TrackVisibility>
		</Box>
	);
}
