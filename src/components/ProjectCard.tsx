import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CardContentType } from '../type';
import { projectcontent } from '../styles';

export const ProjectCard = ({
	title,
	description,
	imgUrl,
}: CardContentType) => {
	return (
		<Card className='cardcontainer'>
			<CardMedia component='img' title={title} src={imgUrl} />
			<CardContent sx={projectcontent} className='cardcontent'>
				<Typography variant='h4'>{title}</Typography>
				<Typography paragraph>{description}</Typography>
			</CardContent>
		</Card>
	);
};
