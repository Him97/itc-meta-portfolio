import React from 'react';
import { Avatar, Text, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Xin!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

export default function LandingSection() {
  return (
    <FullScreenSection
      justifyContent='center'
      alignItems='center'
      isDarkBackground
      backgroundColor='#2A4365'
    >
      <VStack spacing={16}>
        <VStack spacing={4} alignItems='center'>
          <Avatar
            name='Xin Li'
            src='https://avatars.githubusercontent.com/u/78652542?v=4'
            size='2xl'
          />
          <Text as='h4' size='md' noOfLines={1}>
            {greeting}
          </Text>
        </VStack>
        <VStack spacing={6}>
          <Heading as='h1' size='3xl' noOfLines={1}>
            {bio1}
          </Heading>
          <Heading as='h1' size='3xl' noOfLines={1}>
            {bio2}
          </Heading>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
}