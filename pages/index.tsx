import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link'
import React from 'react';

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (

    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input placeholder="email@example.com" variant="filled" mb={3} type="email" />
        <Input placeholder="****" variant="filled" mb={3} type="password" />
        <Button mb={6} colorScheme="teal">Login</Button>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
}

export default IndexPage
