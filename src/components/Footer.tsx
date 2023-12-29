import { Box, Typography } from '@mui/material';

export default function Footer() {
	return (
		<Box
			component='footer'
			bgcolor='#18181b'
			bottom={0}
			left={0}
			right={0}
			width='100%'
		>
			<Box
				margin='0 auto'
				px={12}
				color='white'
				justifyContent='center'
				alignItems='center'
				maxWidth='1024px'
				height={16}
			>
				<Typography>Xin • © 2023</Typography>
			</Box>
		</Box>
	);
}
