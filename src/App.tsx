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
			direction='column'
			minHeight='100vh'
			maxWidth='100vw'
			p={3}
			gap={8}
			textAlign='center'
			fontSize='xl'
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
