import * as React from 'react';
import { useFormik } from 'formik';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	NativeSelect,
	OutlinedInput,
	Stack,
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
			firstname: '',
			email: '',
			type: 'hireMe',
			comment: '',
		},

		onSubmit: (values) => {
			submit('https://john.com/contactme', values);
		},

		validationSchema: Yup.object({
			firstname: Yup.string().required('Required'),
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
		<FullScreenSection isDarkBackground backgroundColor='#512DA8' spacing={8}>
			<Stack direction='column' p={32} alignItems='flex-start'>
				<Typography variant='h1' id='contactme-section'>
					Contact me
				</Typography>
				<Box p={6} width='100%' component='form' onSubmit={formik.handleSubmit}>
					<Stack spacing={4}>
						<FormControl
							fullWidth
							variant='outlined'
							error={!!formik.errors.firstname && formik.touched.firstname}
						>
							<InputLabel htmlFor='firstname'>First Name</InputLabel>
							<OutlinedInput
								required
								id='firstname'
								label='First Name'
								{...formik.getFieldProps('firstname')}
							/>
							<FormHelperText>{formik.errors.firstname}</FormHelperText>
						</FormControl>

						<FormControl
							fullWidth
							variant='outlined'
							error={!!formik.errors.email && formik.touched.email}
						>
							<InputLabel htmlFor='email'>Email Address</InputLabel>
							<OutlinedInput
								required
								id='email'
								label='Email Address'
								{...formik.getFieldProps('email')}
							/>
							<FormHelperText>{formik.errors.email}</FormHelperText>
						</FormControl>
						<FormControl fullWidth variant='outlined'>
							<NativeSelect
								title='type'
								id='type'
								defaultValue=''
								{...formik.getFieldProps('type')}
							>
								<option value='' disabled>
									Type of enquiry
								</option>
								<option value='hireMe'>Freelance project proposal</option>
								<option value='openSource'>
									Open source consultancy session
								</option>
								<option value='other'>Other</option>
							</NativeSelect>
						</FormControl>
						<FormControl
							fullWidth
							variant='outlined'
							error={!!formik.errors.comment && formik.touched.comment}
						>
							<InputLabel htmlFor='comment'>Your message</InputLabel>
							<OutlinedInput
								id='comment'
								label='Your message'
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
