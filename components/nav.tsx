import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  useColorModeValue,
  Stack,
  Tooltip
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { House, Bag, User, Bell, Code, Cube } from 'phosphor-react';
import { useRouter } from 'next/router'


interface BucketLink {
    title : string;
    icon : ReactNode;
    href: string;
  }
  
  const Links : BucketLink[] = [
    {
      "title": "Home",
      "icon": (<House size={24} />),
      "href": "/"
    },
    {
      "title": "Assets",
      "icon": (<Cube size={24} />),
      "href": "/assets"
    },
    {
      "title": "Collections",
      "icon": (<Bag size={24} />),
      "href": "/collections"
    },
    {
      "title": "Authors",
      "icon": (<User size={24} />),
      "href": "/authors"
    },
    {
      "title": "Notifications",
      "icon": (<Bell size={24} />),
      "href": "/notifications"
    },
    {
      "title": "Source",
      "icon": (<Code size={24} />),
      "href": "https://github.com/LinwoodCloud/Bucket"
    }
  ];
  const NavLink = ({ link }: { link: BucketLink }): ReactElement => {
    const selectedBg = useColorModeValue('gray.200', 'gray.700');
    const router = useRouter();
    return (
      <Link
        px={3}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: selectedBg,
        }}
        backgroundColor={router.pathname == link.href ? selectedBg : null}
        display="flex"
        href={link.href}>
        <HStack spacing={2}>{link.icon}<Text>{link.title}</Text></HStack>
      </Link>
    );
  };
export default function BucketNavigation({children} : PropsWithChildren<{}>): ReactElement {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'stretch'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} width="100%">
              <Tooltip label="Linwood Bucket">
                <Link href="/">
                  <Box p={5}>
                    <Image src="/logo.png" alt="Picture of the author" height={24} width={24} />
                  </Box>
                </Link>
              </Tooltip>
              <Box flexGrow={1}>
              <HStack
                as={'nav'}
                spacing={4}
                justifyContent="center"
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink link={link} key={link.title} />
                ))}
              </HStack>
              </Box>
            </HStack>
            {/* <Menu isLazy>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink link={link} key={link.title} />
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
        <Box p={4}>{children}</Box>
        </>
    );
}
