import * as React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { Box, Grid } from '@mui/material';

import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import AlertComponent from './components/AlertComponent';

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const { page } = await getDictionary(lang);
	return (
		<Box textAlign='center' fontSize='xl'>
			<Grid container height='100vh' p={3}>
				<Grid item spacing={8}>
					<LandingSection />
					<ProjectsSection />
					<ContactMeSection />
					<AlertComponent />
				</Grid>
			</Grid>
		</Box>
	);
}
