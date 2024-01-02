import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import { CardContentType } from '../type';
import { cardcontainer, cardcontent } from '../styles';

export const ProjectCard = ({
	title,
	description,
	imgUrl,
}: CardContentType) => {
	return (
		<Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
			<Card sx={cardcontainer} className='card-container'>
				<CardMedia component='img' title={title} src={imgUrl} />
				<CardContent sx={cardcontent} className='card-content'>
					<Typography variant='h4'>{title}</Typography>
					<Typography paragraph fontStyle='italic'>
						{description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};
