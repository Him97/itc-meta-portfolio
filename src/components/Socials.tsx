import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { useTranslation } from 'react-i18next';

export function Socials() {
	const { t } = useTranslation();
	const socials = [
		{
			icon: MailIcon,
			url: 'mailto:xin.li@outlook.co.il',
			tooltip: t('email'),
		},
		{
			icon: GitHubIcon,
			url: 'https://github.com/him-li/',
			tooltip: 'GitHub',
		},
		{
			icon: LinkedInIcon,
			url: 'https://www.linkedin.com/in/xin-li-5387a5169/',
			tooltip: t('linkedin'),
		},
		{
			icon: StackedLineChartIcon,
			url: 'https://stackoverflow.com/users/21146058/xin',
			tooltip: 'Stack Overflow',
		},
	];
	return socials;
}
