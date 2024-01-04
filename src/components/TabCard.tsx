import {
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import { CardContentType } from '../type';
import Styles from '../styles';

export const TabCard = ({
	title,
	description,
	imgUrl,
	url,
}: CardContentType) => {
	const { cardcontainer, cardcontent } = Styles();

	return (
		<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
			<Card sx={cardcontainer} className='card-container'>
				<CardMedia component='img' title={title} src={imgUrl} />
				<CardActionArea sx={cardcontent} className='card-content' href={url}>
					<Typography variant='h4'>{title}</Typography>
					<Typography paragraph fontStyle='italic'>
						{description}
					</Typography>
				</CardActionArea>
			</Card>
		</Grid>
	);
};
