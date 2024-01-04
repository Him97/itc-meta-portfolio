import * as React from 'react';
import {
	AppBar,
	Box,
	Breadcrumbs,
	Button,
	IconButton,
	Link,
	Menu,
	Toolbar,
	Tooltip,
	useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LangSwitcher from './LangSwitcher';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import Styles from '../styles';
import { Socials } from './Socials';

const sections = ['home', 'skills', 'projects'];

interface toggleColorMode {
	toggleColorMode: () => void;
}

export default function Header({ colorMode }: { colorMode: toggleColorMode }) {
	const { t } = useTranslation();
	const theme = useTheme();
	const socials = Socials();
	const { navbarlink, scrolledbar, unscrolledbar } = Styles();
	const [activeLink, setActiveLink] = React.useState<string>('home');
	const [scrolled, setScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value: string) => {
		setActiveLink(value);
		const id = `${value}`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<BrowserRouter>
			<AppBar sx={scrolled ? scrolledbar : unscrolledbar}>
				<Toolbar disableGutters>
					<Box
						flexGrow={1}
						display={{ xs: 'flex', md: 'none' }}
						justifyContent='center'
					>
						<IconButton
							size='large'
							color='inherit'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<HashLink to='#connect'>
								<Button type='button'>{t('connect')}</Button>
							</HashLink>
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
						</Menu>
					</Box>
					<Box
						flexGrow={1}
						display={{ xs: 'none', md: 'flex' }}
						alignItems='center'
					>
						<HashLink to='#connect'>
							<Button
								type='button'
								variant='outlined'
								color='primary'
								className='navbutton'
							>
								{t('connect')}
							</Button>
						</HashLink>
						{socials.map((social, index) => (
							<Tooltip title={social.tooltip} key={index}>
								<IconButton
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									size='large'
									color='default'
								>
									<social.icon />
								</IconButton>
							</Tooltip>
						))}
					</Box>

					<Box
						flexGrow={1}
						display='flex'
						alignItems='center'
						justifyContent='flex-end'
					>
						<Breadcrumbs separator=''>
							{sections.map((section, index) => (
								<Link
									key={index}
									href={`#${section}`}
									underline='none'
									style={navbarlink}
									sx={activeLink ? { opacity: 1 } : { opacity: 0.75 }}
									onClick={() => onUpdateActiveLink(section)}
								>
									{t(`${section}`)}
								</Link>
							))}
							<LangSwitcher />
							<Tooltip
								title={
									theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'
								}
							>
								<IconButton onClick={colorMode.toggleColorMode}>
									{theme.palette.mode === 'dark' ? (
										<LightModeIcon />
									) : (
										<DarkModeIcon />
									)}
								</IconButton>
							</Tooltip>
						</Breadcrumbs>
					</Box>
				</Toolbar>
			</AppBar>
		</BrowserRouter>
	);
}
