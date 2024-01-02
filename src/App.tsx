import * as React from 'react';
import { Stack, createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { useLocale } from './hooks/useLocale';
import { AlertProvider } from './context/alertContext';

export default function App() {
	const { language } = useLocale();
	const [mode, setMode] = React.useState<'light' | 'dark'>('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = createTheme({
		typography: {
			fontFamily: [
				'PT Sans',
				'sans-serif',
				'IBM Plex Sans Hebrew',
				'HYWenhei',
				'Tangut',
			].join(','),
		},
		palette: {
			mode,
		},
		direction: language === 'he' ? 'rtl' : 'ltr',
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
				color={mode === 'light' ? 'white' : 'white'}
				bgcolor={mode === 'light' ? 'background.paper' : 'background.default'}
			>
				<Header colorMode={colorMode} />
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
