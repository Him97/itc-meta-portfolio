import React from "react";
import { Avatar, Text, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Xin!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

export default function LandingSection() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        <Avatar
          name="Xin Li"
          src="https://avatars.githubusercontent.com/u/78652542?v=4"
          size='2xl' />
        <Text>{greeting}</Text>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  );
}