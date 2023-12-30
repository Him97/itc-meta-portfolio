import { Stack } from '@mui/material';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import AlertComponent from './components/AlertComponent';
import './App.css';
import { AlertProvider } from './context/alertContext';

export default function App() {
	return (
		<Stack
			className='App'
			direction='column'
			position='relative'
			minHeight='100vh'
			maxWidth='100vw'
			textAlign='center'
		>
			<Header />
			<AlertProvider>
				<LandingSection />
				<ProjectsSection />
				<ContactMeSection />
				<AlertComponent />
			</AlertProvider>
			<Footer />
		</Stack>
	);
}
