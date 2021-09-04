import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Text,
  useColorModeValue,
  Stack,
  Tooltip,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { House, User, Bell, Cube, Sun, Moon } from 'phosphor-react';
import { useRouter } from 'next/router';


interface BucketLink {
  title: string;
  icon: ReactNode;
  href: string;
}

const Links: BucketLink[] = [
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
    "title": "Authors",
    "icon": (<User size={24} />),
    "href": "/authors"
  },
  {
    "title": "Notifications",
    "icon": (<Bell size={24} />),
    "href": "/notifications"
  }
];
const NavLink = ({ link }: { link: BucketLink }): ReactElement => {
  const selectedBg = useColorModeValue('gray.200', 'gray.700');
  const router = useRouter();
  return (
    <Link
      onClick={() => router.push(link.href)}
      justifyContent="center"
      px={3}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: selectedBg,
      }}
      backgroundColor={router.pathname == link.href ? selectedBg : null}
      display="flex">
      <VStack spacing={1}>{link.icon}<Text>{link.title}</Text></VStack>
    </Link>
  );
};
export default function BucketNavigation({ children }: PropsWithChildren<{}>): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")

  const SwitchIcon = useColorModeValue(Moon, Sun);
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'stretch'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} width="100%" px="2">
            <Tooltip label="Linwood Bucket">
              <Link href="/">
                <Image src="/logo.png" alt="Picture of the author" height={56} width={56} />
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
          <Box>
            <IconButton
              size="md"
              fontSize="lg"
              rounded="md"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon size={24} />}
            />
          </Box>
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

