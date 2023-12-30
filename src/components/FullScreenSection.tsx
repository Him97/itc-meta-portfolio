import { Stack } from '@mui/material';

/**
 * Illustrates the use of children prop and spread operator
 */
export default function FullScreenSection({
	children,
	isDarkBackground,
	...boxProps
}) {
	return (
		<Stack
			direction='column'
			bgcolor={boxProps.backgroundColor}
			color={isDarkBackground ? 'white' : 'black'}
		>
			<Stack direction='column' minHeight='100vh' {...boxProps}>
				{children}
			</Stack>
		</Stack>
	);
}
