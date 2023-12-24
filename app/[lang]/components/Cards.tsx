import * as React from 'react';
import {
	Card,
	CardHeader,
	CardActions,
	CardContent,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Cards({ title, description, imageSrc }) {
	return (
		<Card>
			<Image src={imageSrc} alt={title} />
			<Stack direction='column' p={4} alignItems='flex-start'>
				<CardHeader>
					<Typography variant='h2'>{title}</Typography>
				</CardHeader>
				<CardContent>
					<Typography color='gray' textAlign='start'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Typography>See more</Typography>
					<IconButton>
						<ArrowForwardIcon />
					</IconButton>
				</CardActions>
			</Stack>
		</Card>
	);
}
