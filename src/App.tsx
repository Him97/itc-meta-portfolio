import { Stack, createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { AlertProvider } from './context/alertContext';

export default function App() {
	const theme = createTheme({
		typography: {
			fontFamily: [
				'PT Sans',
				'sans-serif',
				'IBM Plex Sans Hebrew',
				'HYWenhei',
			].join(','),
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Stack
				direction='column'
				position='relative'
				minHeight='100vh'
				maxWidth='100vw'
				textAlign='center'
				fontFamily='PT Sans'
			>
				<Header />
				<AlertProvider>
					<Banner />
					<Skills />
					<Projects />
					<Contact />
				</AlertProvider>
				<Footer />
			</Stack>
		</ThemeProvider>
	);
}
