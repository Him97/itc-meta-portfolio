import * as React from 'react';
import { useFormik } from 'formik';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	NativeSelect,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import useAlert from '../hooks/useAlert';

export default function LandingSection() {
	const { response, submit } = useSubmit();
	const { onOpen } = useAlert();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			type: 'hireMe',
			comment: '',
		},

		onSubmit: (values) => {
			submit('https://john.com/contactme', values);
		},

		validationSchema: Yup.object({
			firstName: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			comment: Yup.string()
				.min(25, 'Must be at least 25 characters')
				.required('Required'),
		}),
	});

	React.useEffect(() => {
		if (response) {
			onOpen(response.isSuccess, response.message);
			if (response.isSuccess === true) {
				formik.resetForm();
			}
		}
	}, [formik, onOpen, response]);

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
				<Box p={6} width='100%' component='form' onSubmit={formik.handleSubmit}>
					<Stack spacing={4}>
						<FormControl
							error={!!formik.errors.firstName && formik.touched.firstName}
						>
							<FormLabel htmlFor='firstName'>Name</FormLabel>
							<Input id='firstName' {...formik.getFieldProps('firstName')} />
							<FormHelperText>{formik.errors.firstName}</FormHelperText>
						</FormControl>
						<FormControl error={!!formik.errors.email && formik.touched.email}>
							<FormLabel htmlFor='email'>Email Address</FormLabel>
							<Input
								id='email'
								type='email'
								{...formik.getFieldProps('email')}
							/>
							<FormHelperText>{formik.errors.email}</FormHelperText>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='type'>Type of enquiry</FormLabel>
							<NativeSelect
								title='type'
								id='type'
								{...formik.getFieldProps('type')}
							>
								<option value='hireMe'>Freelance project proposal</option>
								<option value='openSource'>
									Open source consultancy session
								</option>
								<option value='other'>Other</option>
							</NativeSelect>
						</FormControl>
						<FormControl
							error={!!formik.errors.comment && formik.touched.comment}
						>
							<FormLabel htmlFor='comment'>Your message</FormLabel>
							<TextField
								id='comment'
								multiline
								{...formik.getFieldProps('comment')}
							/>
							<FormHelperText>{formik.errors.comment}</FormHelperText>
						</FormControl>
						<Button type='submit' fullWidth>
							Submit
						</Button>
					</Stack>
				</Box>
			</Stack>
		</FullScreenSection>
	);
}
