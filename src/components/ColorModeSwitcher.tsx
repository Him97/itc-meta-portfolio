import { IconButton, Tooltip, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ColorModeSwitcher(props) {
	const theme = useTheme();

	return (
		<Tooltip
			title={
				theme.palette.mode === 'dark'
					? 'Switch to light mode'
					: 'Switch to dark mode'
			}
		>
			<IconButton
				onClick={() => {
					theme.palette.mode === 'dark'
						? theme.palette.setMode('light')
						: theme.palette.setMode('dark');
				}}
				{...props}
			>
				{theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
			</IconButton>
		</Tooltip>
	);
}
