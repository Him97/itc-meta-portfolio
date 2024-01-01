import { Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import MailchimpForm from './MailchimpForm';
import { socials } from './Socials';
import { footercontainer } from '../styles';

export default function Footer() {
	return (
		<Grid component='footer' container direction='row' style={footercontainer}>
			<MailchimpForm />
			<Grid item lg={12} md={12} sm={6} className='text-center text-sm-end'>
				{socials.map((social, index) => (
					<Tooltip title={social.tooltip} key={index}>
						<IconButton
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'
							size='large'
						>
							<social.icon />
						</IconButton>
					</Tooltip>
				))}
				<Typography>
					{'Copyright © '}
					<Link color='inherit' href='/'>
						Xin Li
					</Link>{' '}
					{new Date().getFullYear()}
					{'.  All Rights Reserved'}
				</Typography>
			</Grid>
		</Grid>
	);
}
