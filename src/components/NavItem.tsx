import React from 'react';
import { Flex, Text, Link, Menu, MenuButton } from '@chakra-ui/react';

interface Props {
  title: string;
  active?: any;
}

export const NavItem: React.FC<Props> = ({ title, active }) => {
  return (
    <Flex mt={30} flexDir="column" w="100%">
      <Menu>
        <Link
          w="100%"
          p={2}
          borderRadius={5}
          backgroundColor={active && '#00ADB5'}
          _hover={{ textDecor: 'none', backgroundColor: '#00ADB5' }}
        >
          <MenuButton w="100%">
            <Flex>
              <Text fontSize="lg" ml={3}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};
