//header styles
export const scrolledbar = {
	maxWidth: '100%',
	padding: '0 2.5rem 0 2.5rem',
	backgroundColor: 'transparent',
	justifyContent: 'space-between',
	transition: ' 0.3s ease-in-out',
};

export const unscrolledbar = {
	maxWidth: '100%',
	padding: '2.5rem',
	backgroundColor: 'transparent',
	boxShadow: 'none',
	justifyContent: 'space-between',
	transition: ' 0.3s ease-in-out',
};

export const navbarlink = {
	color: 'white',
	fontWeight: 500,
	letterSpacing: '0.8px',
	padding: '0 25px',
	fontSize: '18px',
};

//banner styles
import bannerbg from './assets/img/banner-bg.png';

export const bannergrid = {
	alignItems: 'center',
	backgroundImage: `url(${bannerbg})`,
	marginTop: 0,
	padding: '20rem 2.5rem 10rem 4rem',
	backgroundPosition: 'top center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

export const tagline = {
	fontWeight: 700,
	letterSpacing: '0.8px',
	padding: '1rem 2rem',
	background:
		'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)',
	border: '1px solid rgba(255, 255, 255, 0.5)',
	fontSize: '20px',
	marginBottom: '16px',
	display: 'inline-block',
};

//skills styles
import skillsbg from './assets/img/color-sharp.png';

export const skillscontainer = {
	backgroundColor: '#151515',
	borderRadius: 50,
	textAlign: 'center',
	padding: ' 6rem 5rem',
	marginTop: '-2.5rem',
};

export const skillsbgimg = {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundImage: `url(${skillsbg})`,
};

//projects styles
export const projectscontainer = {
	padding: '5rem'
};

export const cardcontent = {
	position: 'absolute',
	textAlign: 'center',
	top: '65%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	transition: '0.5s ease-in-out',
	opacity: 0,
	width: '100%',
};

export const cardcontainer = {
	background: 'transparent',
	position: 'relative',
	overflow: 'hidden',
	marginBottom: '1rem',
}

//contact styles
export const contactcontainer = {
	background: 'linear-gradient(90deg, #AA367C -5.91%, #4A2FBD 111.58%)',
	width: '100%',
	padding: '6rem 6rem 10rem 6rem',
	alignItems: 'center',
};

//footer styles
import footerbg from './assets/img/footer-bg.png';
export const footercontainer = {
	padding: '0 0 5rem 0',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundImage: `url(${footerbg})`,
	backgroundPosition: 'center center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

export const newlettercontainer = {
	maxWidth: '75%',
	backgroundColor: 'white',
	borderRadius: 50,
	color: 'black',
	padding: '2.5rem 5rem',
	marginBottom: '1rem',
	marginTop: ' -5rem',
};

export const newletterbutton = {
	background:
		'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
	padding: '20px 65px',
	color: 'white',
	fontWeight: 500,
	letterSpacing: '0.1rem',
	borderRadius: 10,
}