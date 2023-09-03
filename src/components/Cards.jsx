import { Heading, HStack, Image, Text, VStack, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Cards({ title, description, imageSrc }) {
  return (
    <Card
      color='black'
      backgroundColor='white'
      cursor='pointer'
      borderRadius='xl'
    >
      <Image borderRadius='xl' src={imageSrc} alt={title} />
      <VStack p={4} alignItems='flex-start'>
        <CardHeader>
          <Heading size='lg'>{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text color='gray' align='start'>{description}</Text>
        </CardBody>
        <CardFooter>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size='1x' />
          </HStack>
        </CardFooter>
      </VStack>
    </Card>
  );
};