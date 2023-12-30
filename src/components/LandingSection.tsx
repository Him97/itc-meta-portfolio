import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import FullScreenSection from './FullScreenSection';
import headerImg from '../assets/img/header-img.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { tagline } from '../styles';

export default function LandingSection() {
	const [loopNum, setLoopNum] = React.useState<number>(0);
	const [isDeleting, setIsDeleting] = React.useState<boolean>(false);
	const [text, setText] = React.useState<string>('');
	const [delta, setDelta] = React.useState<number>(300 - Math.random() * 100);
	const [index, setIndex] = React.useState<number>(1);
	const period = 2000;

	React.useEffect(() => {
		const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];

		const ticker = setInterval(() => {
			tick();
		}, delta);

		const tick = () => {
			const i = loopNum % toRotate.length;
			const fullText = toRotate[i];
			const updatedText = isDeleting
				? fullText.substring(0, text.length - 1)
				: fullText.substring(0, text.length + 1);

			setText(updatedText);

			if (isDeleting) {
				setDelta((prevDelta) => prevDelta / 2);
			}

			if (!isDeleting && updatedText === fullText) {
				setIsDeleting(true);
				setIndex((prevIndex) => prevIndex - 1);
				setDelta(period);
			} else if (isDeleting && updatedText === '') {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				setIndex(1);
				setDelta(500);
			} else {
				setIndex((prevIndex) => prevIndex + 1);
			}
		};

		return () => {
			clearInterval(ticker);
		};
	}, [delta, isDeleting, loopNum, text]);

	return (
		<FullScreenSection
			justifyContent='center'
			alignItems='center'
			isDarkBackground
			backgroundColor='#2A4365'
		>
			<Grid container alignItems='center' spacing={8}>
				<Grid item xs={12} md={6} xl={7}>
					<TrackVisibility>
						{({ isVisible }) => (
							<Box
								component='div'
								className={isVisible ? 'animate__animated animate__fadeIn' : ''}
							>
								<Typography component='span' style={tagline}>
									Welcome to my Portfolio
								</Typography>
								<Typography variant='h1'>
									{`Hi! I'm Xin`}{' '}
									<span
										className='txt-rotate'
										dataPeriod='1000'
										data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
									>
										<span className='wrap'>{text}</span>
									</span>
								</Typography>
								<Typography paragraph>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</Typography>
								<Button
									variant='text'
									onClick={() => console.log('connect')}
									endIcon={<ChevronRightIcon />}
								>
									Let’s Connect
								</Button>
							</Box>
						)}
					</TrackVisibility>
				</Grid>
				<Grid item xs={12} md={6} xl={5}>
					<TrackVisibility>
						{({ isVisible }) => (
							<Box
								component='div'
								className={isVisible ? 'animate__animated animate__zoomIn' : ''}
							>
								<img src={headerImg} alt='Header Img' />
							</Box>
						)}
					</TrackVisibility>
				</Grid>
			</Grid>
		</FullScreenSection>
	);
}
