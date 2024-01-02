import * as React from 'react';
import { Grid } from '@mui/material';

interface TabPaneProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export default function TabPane(props: TabPaneProps) {
	const { children, value, index, ...other } = props;

	return (
		<Grid
			container
			direction='row'
			role='tabpanel'
			spacing={2}
			display={value === index ? 'flex' : 'none'}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{children}
		</Grid>
	);
}
