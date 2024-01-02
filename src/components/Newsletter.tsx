import * as React from 'react';
import { Alert, Button, Grid, InputBase, Typography } from '@mui/material';
import { NewsletterProps } from '../type';
import { newletterbutton, newlettercontainer } from '../styles';

export default function Newsletter({
	status,
	message,
	onValidated,
}: NewsletterProps) {
	const [email, setEmail] = React.useState<string>('');

	React.useEffect(() => {
		if (status === 'success') clearFields();
	}, [status]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		email &&
			email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: email,
			});
	};

	const clearFields = () => {
		setEmail('');
	};

	return (
		<Grid
			container
			direction='row'
			style={newlettercontainer}
			className='wow slideUp'
		>
			<Grid item xl={5} lg={5} md={6} sm={6} xs={12}>
				<Typography variant='h5'>
					Subscribe to our Newsletter<br></br> & Never miss latest updates
				</Typography>
				{status === 'sending' && <Alert>Sending...</Alert>}
				{status === 'error' && <Alert severity='error'>{message}</Alert>}
				{status === 'success' && <Alert severity='success'>{message}</Alert>}
			</Grid>
			<Grid
				item
				xl={7}
				lg={7}
				md={6}
				sm={6}
				xs={12}
				component='form'
				onSubmit={handleSubmit}
				className='new-email-bx'
			>
				<InputBase
					value={email}
					type='email'
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email Address'
				/>
				<Button type='submit' variant='contained' style={newletterbutton}>
					Submit
				</Button>
			</Grid>
		</Grid>
	);
}
