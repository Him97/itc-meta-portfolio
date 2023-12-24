import * as React from 'react';
import { useFormik } from 'formik';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	NativeSelect,
	OutlinedInput,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

export default function LandingSection() {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();

	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			type: 'hireMe',
			comment: '',
		},

		onSubmit: (values) => {
			submit('https://john.com/contactme', values);
		},

		validationSchema: Yup.object({
			firstname: Yup.string().required('Required'),
			lastname: Yup.string(),
			email: Yup.string().email('Invalid email address').required('Required'),
			comment: Yup.string()
				.min(25, 'Must be at least 25 characters')
				.required('Required'),
		}),
	});
	React.useEffect(() => {
		if (response) {
			onOpen(response.type, response.message);
			if (response.type === 'success') {
				formik.resetForm();
			}
		}
	}, [response, formik, onOpen]);

	return (
		<FullScreenSection
			isDarkBackground
			backgroundColor='#512DA8'
			py={16}
			spacing={8}
		>
			<Stack direction='column' width='100%' p={32} alignItems='flex-start'>
				<Typography variant='h1' id='contactme-section'>
					Contact me
				</Typography>
				<Box
					component='form'
					p={6}
					borderRadius={1}
					width='100%'
					onSubmit={formik.handleSubmit}
				>
					<FormControl fullWidth variant='outlined'>
						<InputLabel htmlFor='firstname'>Firstname</InputLabel>
						<OutlinedInput
							required
							id='firstname'
							type='firstname'
							label='firstname to be changed'
							error={
								formik.touched.firstname && Boolean(formik.errors.firstname)
							}
							{...formik.getFieldProps('firstname')}
						/>
					</FormControl>
					<FormControl fullWidth variant='outlined'>
						<InputLabel htmlFor='lastname'>Lastname</InputLabel>
						<OutlinedInput
							id='lastname'
							type='lastname'
							label='lastname to be changed'
							error={formik.touched.lastname && Boolean(formik.errors.lastname)}
							{...formik.getFieldProps('lastname')}
						/>
					</FormControl>
					<FormControl fullWidth variant='outlined'>
						<InputLabel htmlFor='email'>Email</InputLabel>
						<OutlinedInput
							required
							id='email'
							type='email'
							label='email to be changed'
							error={formik.touched.email && Boolean(formik.errors.email)}
							{...formik.getFieldProps('email')}
						/>
					</FormControl>
					<NativeSelect
						id='type'
						title='type'
						{...formik.getFieldProps('type')}
					>
						<option value='hireMe'>Freelance project proposal</option>
						<option value='openSource'>Open source consultancy session</option>
						<option value='other'>Other</option>
					</NativeSelect>
					<FormControl fullWidth variant='outlined'>
						<InputLabel htmlFor='comment'>Comment</InputLabel>
						<TextField
							required
							id='comment'
							type='comment'
							label='comment to be changed'
							error={formik.touched.comment && Boolean(formik.errors.comment)}
							{...formik.getFieldProps('comment')}
						/>
					</FormControl>
					<Button type='submit' fullWidth>
						Submit
					</Button>
				</Box>
			</Stack>
		</FullScreenSection>
	);
}
