import { Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import MailchimpForm from './MailchimpForm';
import { Socials } from './Socials';
import { footercontainer } from '../styles';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();
	const socials = Socials();
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
					{t('copyright') + ' © '}
					<Link color='inherit' href='/'>
						{t('me')}
					</Link>{' '}
					{new Date().getFullYear()}
					{'. ' + t('allrightsreserved')}
				</Typography>
			</Grid>
		</Grid>
	);
}
