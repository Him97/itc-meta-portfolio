import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
export default function FullScreenSection({ children, isDarkBackground, ...boxProps }) {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack width='100vw' minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};