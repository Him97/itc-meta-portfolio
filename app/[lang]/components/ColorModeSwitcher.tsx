import * as React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

interface colorMode {
	toggleColorMode: () => void;
}

export default function ColorModeSwitcher({
	colorMode,
}: {
	colorMode: colorMode;
}) {
	const theme = useTheme();

	return (
		<Tooltip title={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
				{theme.palette.mode === 'dark' ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Tooltip>
	);
}
