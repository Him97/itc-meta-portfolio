import { useTheme } from '@mui/material';
import footerbg from './assets/img/footer-bg.png';
import bannerbg from './assets/img/banner-bg.png';
import skillsbg from './assets/img/color-sharp.png';
export default function Styles() {
	const theme = useTheme();

	const styles = {
		//header styles
		scrolledbar: {
			maxWidth: '100%',
			padding: '0 2.5rem 0 2.5rem',
			backgroundColor: 'transparent',
			justifyContent: 'space-between',
			transition: ' 0.3s ease-in-out',
		},

		unscrolledbar: {
			maxWidth: '100%',
			padding: '2.5rem',
			backgroundColor: 'transparent',
			boxShadow: 'none',
			justifyContent: 'space-between',
			transition: ' 0.3s ease-in-out',
		},

		navbarlink: {
			padding: '0 1rem',
			fontSize: '1.2rem',
		},

		//banner styles

		bannercontainer: {
			alignItems: 'center',
			backgroundImage: `url(${bannerbg})`,
			minHeight: '100vh',
			padding: '20rem 2.5rem 10rem 4rem',
			backgroundPosition: 'top center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		},

		tagline: {
			fontWeight: 700,
			letterSpacing: '0.8px',
			padding: '1rem 2rem',
			background:
				'linear-gradient(90deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)',
			border: '1px solid rgba(255, 255, 255, 0.5)',
			fontSize: '20px',
			marginBottom: '16px',
			display: 'inline-block',
		},

		//skills styles

		skillscontainer: {
			backgroundColor: theme.palette.mode === 'light'? 'rgba(0,0,0,0.75)':'rgba(255,255,255,0.75)',
			borderRadius: 10,
			textAlign: 'center',
			padding: ' 6rem 5rem',
			marginTop: '-2.5rem',
		},

		skillsbgimg: {
			alignItems: 'center',
			justifyContent: 'center',
			backgroundImage: `url(${skillsbg})`,
		},

		//projects styles
		projectscontainer: {
			padding: '5rem',
			minHeight: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.palette.mode === 'light' ? 'black' : 'white'
		},

		navtabs: {
			marginBottom: '5rem',
			borderRadius: '5rem',
			backgroundColor: theme.palette.mode === 'light'? 'rgb(0 0 0 / 10%)': 'rgb(255 255 255 / 10%)',
			overflow: 'hidden',
		},

		navtab: {
			width: '33.33333%',
			backgroundColor: 'transparent',
			padding: '1rem 0',
			fontSize: '1rem',
			letterSpacing: '0.8px',
			position: 'relative',
			transition: '0.3s ease-in-out',
			textAlign: 'center',
			zIndex: 0,
		},

		cardcontent: {
			position: 'absolute',
			textAlign: 'center',
			top: '65%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			transition: '0.5s ease-in-out',
			opacity: 0,
			width: '100%',
			zIndex: 1,
		},

		cardcontainer: {
			background: 'transparent',
			position: 'relative',
			overflow: 'hidden',
			marginBottom: '1rem',
		},

		//contact styles
		contactcontainer: {
			background: 'linear-gradient(90deg, #AA367C -5.91%, #4A2FBD 111.58%)',
			width: '100%',
			padding: '6rem 6rem 10rem 6rem',
			alignItems: 'center',
		},

		//footer styles
		footercontainer: {
			padding: '0 0 5rem 0',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundImage: `url(${footerbg})`,
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		},

		newlettercontainer: {
			maxWidth: '75%',
			backgroundColor: 'white',
			borderRadius: 50,
			color: 'black',
			padding: '2.5rem 5rem',
			marginBottom: '1rem',
			marginTop: ' -5rem',
		},

		newletterbutton: {
			background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
			padding: '20px 65px',
			color: 'white',
			fontWeight: 500,
			letterSpacing: '0.1rem',
			borderRadius: 10,
		},
	};
	return styles;
}
