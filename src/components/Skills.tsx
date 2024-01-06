import { Box, Grid, Typography } from '@mui/material';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Styles from '../styles';
import { useTranslation } from 'react-i18next';

export default function Skills() {
	const { t } = useTranslation();
	const { skillsbgimg, skillscontainer } = Styles();

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const skills = [
		{
			title: 'HTML',
			img: meter1,
			percentage: 90,
		},
		{
			title: 'CSS',
			img: meter2,
			percentage: 85,
		},
		{
			title: 'JavaScript',
			img: meter3,
			percentage: 80,
		},
		{
			title: 'TypeScript',
			img: meter3,
			percentage: 80,
		},
	];

	return (
		<Grid
			component='section'
			container
			direction='row'
			style={skillsbgimg}
			id='skills'
		>
			<Grid
				item
				xl={8}
				lg={10}
				md={12}
				sm={12}
				xs={12}
				sx={skillscontainer}
				className='wow zoomIn'
			>
				<Typography variant='h2'>{t('skills')}</Typography>
				<Typography paragraph>{t('skills-para')}</Typography>
				<Carousel
					responsive={responsive}
					infinite={true}
					className='owl-carousel owl-theme skill-slider'
				>
					{skills.map((skill, index) => (
						<Box key={index}>
							<img src={skill.img} alt='Image' />
							<div className='c100 p75 pink'>
								<span>75%</span>
								<div className='slice'>
									<div className='bar'></div>
									<div className='fill'></div>
								</div>
							</div>
							<Typography variant='h5'>{skill.title}</Typography>
						</Box>
					))}
				</Carousel>
			</Grid>
		</Grid>
	);
}
