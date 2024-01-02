import * as React from 'react';
import {
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	NativeSelect,
	OutlinedInput,
	Typography,
} from '@mui/material';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit';
import useAlert from '../hooks/useAlert';
import { contactcontainer } from '../styles';
import { useTranslation } from 'react-i18next';

export default function Contact() {
	const { t } = useTranslation();
	const { response, submit } = useSubmit();
	const { onOpen } = useAlert();

	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			message: '',
			type: 'hireMe',
		},

		onSubmit: (values) => {
			submit('https://john.com/contactme', values);
		},

		validationSchema: Yup.object({
			firstname: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			message: Yup.string()
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
		<Grid
			component='section'
			id='connect'
			container
			direction='row'
			style={contactcontainer}
		>
			<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<TrackVisibility>
					{({ isVisible }) => (
						<img
							className={isVisible ? 'animate__animated animate__zoomIn' : ''}
							src={contactImg}
							alt='Contact Us'
						/>
					)}
				</TrackVisibility>
			</Grid>
			<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<TrackVisibility>
					{({ isVisible }) => (
						<div
							className={isVisible ? 'animate__animated animate__fadeIn' : ''}
						>
							<Typography variant='h2' textAlign='start'>
								{t('contact')}
							</Typography>
							<Grid
								container
								spacing={1}
								my={2}
								justifyContent='space-between'
								component='form'
								onSubmit={formik.handleSubmit}
							>
								<Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
									<FormControl
										fullWidth
										variant='outlined'
										error={
											!!formik.errors.firstname && formik.touched.firstname
										}
									>
										<InputLabel htmlFor='firstname'>
											{t('firstname')}
										</InputLabel>
										<OutlinedInput
											required
											id='firstname'
											label={t('firstname')}
											{...formik.getFieldProps('firstname')}
										/>
										<FormHelperText>{formik.errors.firstname}</FormHelperText>
									</FormControl>
								</Grid>
								<Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
									<FormControl
										fullWidth
										variant='outlined'
										error={!!formik.errors.lastname && formik.touched.lastname}
									>
										<InputLabel htmlFor='lastname'>{t('lastname')}</InputLabel>
										<OutlinedInput
											required
											id='lastname'
											label={t('lastname')}
											{...formik.getFieldProps('lastname')}
										/>
										<FormHelperText>{formik.errors.lastname}</FormHelperText>
									</FormControl>
								</Grid>
								<Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
									<FormControl
										fullWidth
										variant='outlined'
										error={!!formik.errors.email && formik.touched.email}
									>
										<InputLabel htmlFor='email'>{t('email')}</InputLabel>
										<OutlinedInput
											required
											id='email'
											label={t('email')}
											{...formik.getFieldProps('email')}
										/>
										<FormHelperText>{formik.errors.email}</FormHelperText>
									</FormControl>
								</Grid>
								<Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
									<FormControl
										fullWidth
										variant='outlined'
										error={!!formik.errors.phone && formik.touched.phone}
									>
										<InputLabel htmlFor='email'>{t('phone')}</InputLabel>
										<OutlinedInput
											required
											id='phone'
											label={t('phone')}
											{...formik.getFieldProps('phone')}
										/>
										<FormHelperText>{formik.errors.phone}</FormHelperText>
									</FormControl>
								</Grid>
								<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
									<FormControl fullWidth variant='outlined'>
										<NativeSelect
											title='type'
											id='type'
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
								</Grid>
								<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
									<FormControl
										fullWidth
										variant='outlined'
										error={!!formik.errors.message && formik.touched.message}
									>
										<InputLabel htmlFor='message'>{t('message')}</InputLabel>
										<OutlinedInput
											id='message'
											label={t('message')}
											multiline
											minRows={4}
											{...formik.getFieldProps('message')}
										/>
										<FormHelperText>{formik.errors.message}</FormHelperText>
									</FormControl>
								</Grid>
								<Grid
									item
									xl={12}
									lg={12}
									md={12}
									sm={12}
									xs={12}
									textAlign='start'
								>
									<Button
										type='submit'
										variant='outlined'
										className='navbutton'
										fullWidth
									>
										{t('submit')}
									</Button>
								</Grid>
							</Grid>
						</div>
					)}
				</TrackVisibility>
			</Grid>
		</Grid>
	);
}
