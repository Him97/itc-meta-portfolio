import * as React from 'react';
import ColorModeSwitcher from './ColorModeSwitcher';
import LocaleSwitcher from './LocaleSwitcher';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, List, ListItem, Stack } from '@mui/material';
import Link from 'next/link';

const socials = [
	{
		icon: EmailIcon,
		url: 'mailto:adrian.hsin@gmail.com',
	},
	{
		icon: GitHubIcon,
		url: 'https://github.com/Him97',
	},
	{
		icon: LinkedInIcon,
		url: 'https://www.linkedin.com/in/xin-li-5387a5169/',
	},
	{
		icon: LinkedInIcon,
		url: 'https://stackoverflow.com/users/21146058/xin',
	},
];

/**
 * This component illustrates the use of both the useRef hook and useEffect hook.
 * The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation.
 * The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted.
 * Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements.
 */

export default function Header({ lang }: { lang: Locale }) {
	const headerRef = React.useRef(null);
	const { navigation } = getDictionary(lang);

	React.useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const headerElement = headerRef.current;
			if (!headerElement) {
				return;
			}
			if (prevScrollPos > currentScrollPos) {
				headerElement.style.transform = 'translateY(0)';
			} else {
				headerElement.style.transform = 'translateY(-200px)';
			}
			prevScrollPos = currentScrollPos;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = (anchor: string) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<Box
			component='nav'
			position='fixed'
			top={0}
			left={0}
			right={0}
			bgcolor='#18181b'
			ref={headerRef}
			sx={{
				translateY: 0,
				transitionProperty: 'transform',
				transitionDuration: '.3s',
				transitionTimingFunction: 'ease-in-out',
			}}
		>
			<Box color='white' maxWidth='1280px' margin='0 auto'>
				<Stack
					direction='row'
					px={16}
					py={4}
					justifyContent='space-between'
					alignItems='center'
				>
					<Stack direction='row' spacing={8}>
						{socials.map((social, index) => (
							<IconButton
								key={index}
								href={social.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								{<social.icon />}
							</IconButton>
						))}
					</Stack>
					<Stack direction='row' spacing={8}>
						<Link href='/#projects' onClick={handleClick('projects')}>
							Projects
						</Link>
						<Link href='/#contact-me' onClick={handleClick('contactme')}>
							Contact Me
						</Link>
						<List className='flex gap-x-8'>
							<ListItem>
								<Link href={`/${lang}`}>{navigation.home}</Link>
							</ListItem>
							<ListItem>
								<Link href={`/${lang}/about`}>{navigation.about}</Link>
							</ListItem>
						</List>
						<LocaleSwitcher />
						<ColorModeSwitcher justifySelf='flex-end' />
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
}
