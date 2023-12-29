import { Card, CardActions, CardHeader, CardMedia } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Cards({ title, description, imageSrc }) {
	return (
		<Card>
			<CardMedia component='img' src={imageSrc} alt={title} />
			<CardHeader>{title}</CardHeader>
			<CardBody>
				<Text color='gray' align='start'>
					{description}
				</Text>
			</CardBody>
			<CardFooter>
				<HStack>
					<Text>See more</Text>
					<FontAwesomeIcon icon={faArrowRight} size='1x' />
				</HStack>
			</CardFooter>
		</Card>
	);
}
