import {
	Card,
	CardActions,
	CardActionArea,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CardContentType } from '../type';

export default function Cards({
	title,
	description,
	imageSrc,
}: CardContentType) {
	return (
		<Card>
			<CardMedia component='img' src={imageSrc} alt={title} />
			<CardHeader>{title}</CardHeader>
			<CardActions>
				<Typography color='gray' textAlign='start'>
					{description}
				</Typography>
			</CardActions>
			<CardActionArea>
				<Typography>See more</Typography>
				<ChevronRightIcon />
			</CardActionArea>
		</Card>
	);
}
