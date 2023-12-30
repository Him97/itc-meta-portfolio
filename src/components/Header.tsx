import * as React from 'react';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Link,
	Menu,
	Toolbar,
	Tooltip,
	useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

const socials = [
	{
		icon: EmailIcon,
		url: 'mailto:xin.li@outlook.co.il',
		tooltip: 'Email',
	},
	{
		icon: GitHubIcon,
		url: 'https://github.com/him-li/',
		tooltip: 'GitHub',
	},
	{
		icon: LinkedInIcon,
		url: 'https://www.linkedin.com/in/xin-li-5387a5169/',
		tooltip: 'LinkedIn',
	},
	{
		icon: StackedLineChartIcon,
		url: 'https://stackoverflow.com/users/21146058/xin',
		tooltip: 'Stack Overflow',
	},
];

export default function Header() {
	const theme = useTheme();
	const headerRef = React.useRef(null);
	const [activeLink, setActiveLink] = React.useState<string>('home');
	const [scrolled, setScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const headerElement: HTMLElement = headerRef.current;
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

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Router>
			<AppBar
				position='sticky'
				style={{
					backgroundColor:
						theme.palette.mode === 'dark'
							? 'rgba(0, 0, 0, 0.7)'
							: 'rgba(255, 255, 255, 0.7)',
				}}
			>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Box display={{ xs: 'flex', md: 'none' }} flexGrow={1}>
							<IconButton
								size='large'
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
						<Box flexGrow={1} display={{ xs: 'none', md: 'flex' }}>
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
						</Box>

						<Box sx={{ flexGrow: 0 }} display={{ xs: 'none', md: 'flex' }}>
							<nav className='ms-auto'>
								<Link
									href='#home'
									className={
										activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
									}
									onClick={() => onUpdateActiveLink('home')}
								>
									Home
								</Link>
								<Link
									href='#skills'
									className={
										activeLink === 'skills'
											? 'active navbar-link'
											: 'navbar-link'
									}
									onClick={() => onUpdateActiveLink('skills')}
								>
									Skills
								</Link>
								<Link
									href='#projects'
									className={
										activeLink === 'projects'
											? 'active navbar-link'
											: 'navbar-link'
									}
									onClick={() => onUpdateActiveLink('projects')}
								>
									Projects
								</Link>
							</nav>
							<span className='navbar-text'>
								<div className='social-icon'>
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
								</div>
								<HashLink to='#connect'>
									<Button variant='outlined'>Let’s Connect</Button>
								</HashLink>
							</span>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Router>
	);
}
