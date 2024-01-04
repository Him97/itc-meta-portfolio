import * as React from 'react';
import 'animate.css';
import { Button, Grid, Typography } from '@mui/material';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img.svg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import Styles from '../styles';

export default function Banner() {
	const { t } = useTranslation();
	const { bannercontainer, tagline } = Styles();
	const [loopNum, setLoopNum] = React.useState<number>(0);
	const [isDeleting, setIsDeleting] = React.useState<boolean>(false);
	const [text, setText] = React.useState<string>('');
	const [delta, setDelta] = React.useState<number>(300 - Math.random() * 100);
	const [, setIndex] = React.useState<number>(1);
	const period = 2000;

	React.useEffect(() => {
		const toRotate = [
			'Web Developer',
			'全栈开发者',
			'UI/UX Designer',
			'全端工程師',
		];

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

		const ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [delta, isDeleting, loopNum, text]);

	return (
		<BrowserRouter>
			<Grid
				component='section'
				id='home'
				container
				direction='row'
				style={bannercontainer}
			>
				<Grid item xs={12} md={6} xl={7} textAlign='start'>
					<TrackVisibility>
						{({ isVisible }) => (
							<div
								className={isVisible ? 'animate__animated animate__fadeIn' : ''}
							>
								<Typography style={tagline}>{t('welcome')}</Typography>
								<Typography variant='h2' component='h1'>
									{t('hi')}
									<br />
									{`${t('im')} ${text}`}
								</Typography>
								<Typography paragraph>{t('home-para')}</Typography>
								<HashLink to='#connect'>
									<Button
										type='button'
										onClick={() => console.log('connect')}
										endIcon={<NavigateNextIcon />}
									>
										{t('connect')}
									</Button>
								</HashLink>
							</div>
						)}
					</TrackVisibility>
				</Grid>
				<Grid item xs={12} md={6} xl={5}>
					<TrackVisibility>
						{({ isVisible }) => (
							<div
								className={isVisible ? 'animate__animated animate__zoomIn' : ''}
							>
								<img src={headerImg} alt='Header Img' />
							</div>
						)}
					</TrackVisibility>
				</Grid>
			</Grid>
		</BrowserRouter>
	);
}
