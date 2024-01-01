import * as React from 'react';
import { Grid } from '@mui/material';

interface TabPaneProps {
	children?: React.ReactNode;
	index: number;
	value: number;
	isVisible: boolean;
}

export default function TabPane(props: TabPaneProps) {
	const { children, value, index, isVisible, ...other } = props;

	return (
		<Grid
			container
			direction='row'
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			border='1px solid red'
		>
			{value === index && (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={4}
					xl={3}
					id='slideInUp'
					border='1px solid green'
					className={isVisible ? 'animate__animated animate__slideInUp' : ''}
				>
					{children}
				</Grid>
			)}
		</Grid>
	);
}
