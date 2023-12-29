import { Box, Stack, Grid } from '@mui/material';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import { AlertProvider } from './context/alertContext';
import Alert from './components/AlertComponent';
import './App.css';

export default function App() {
	return (
		<AlertProvider>
			<Box textAlign='center' fontSize='xl'>
				<Grid minHeight='100vh' p={3}>
					<Stack direction='column' spacing={8}>
						<Header />
						<LandingSection />
						<ProjectsSection />
						<ContactMeSection />
						<Footer />
						<Alert />
					</Stack>
				</Grid>
			</Box>
		</AlertProvider>
	);
}
