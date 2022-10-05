import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { NavItem } from './NavItem';

export const Sidebar: React.FC = () => {
  return (
    <Flex
      h="100vh"
      w="300px"
      backgroundColor="#EEEEEE"
      color="#393E46"
      boxShadow="0 4px 3px 0 rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" w="100%">
        <NavItem title="About Me" />
        <NavItem title="Projects" active />
        <NavItem title="Tech Stack" />
        <NavItem title="Contact" />
      </Flex>

      <Flex
        p="5%"
        w="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="lg" fontWeight="bold">
          ARIES IAN S. ORILLO
        </Text>
        <Text fontSize="md">Copyright 2022 &copy;</Text>
      </Flex>
    </Flex>
  );
};
