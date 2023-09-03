import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      backgroundColor='#18181b'
      bottom={0}
      left={0}
      right={0}
      width='100%'
    >
      <footer>
        <Flex
          margin='0 auto'
          px={12}
          color='white'
          justifyContent='center'
          alignItems='center'
          maxWidth='1024px'
          height={16}
        >
          <p>Xin • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};