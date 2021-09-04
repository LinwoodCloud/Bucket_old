import React from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { List, Moon, Sun } from 'phosphor-react';
import DocsElement, { getDocs } from '../../lib/docs';
import markdownToHtml from '../../lib/markdownToHtml';

interface LinkItemProps {
    name: string;
    href: string;
}
interface DocsProps {
    page: DocsElement;
    pages: Array<DocsElement>;
}

export default function DocsPage({ page, pages }: { page: DocsElement, pages: Array<DocsElement> }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                page={page}
                pages={pages}
                onClose={() => onClose}
                display={{ base: 'none', md: 'flex' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} page={page} pages={pages} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps, DocsProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, pages, ...rest }: SidebarProps) => {
    const { toggleColorMode: toggleMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(Moon, Sun);
    return (
        <Flex
            flexDir="column"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Docs
                </Text>
                <IconButton
                    size="md"
                    fontSize="lg"
                    rounded="md"
                    aria-label={`Switch to ${text} mode`}
                    variant="ghost"
                    color="current"
                    onClick={toggleMode}
                    icon={<SwitchIcon size={24} />}
                />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Box flex="1">
                {pages.map((link) => (
                    <NavItem key={link.title} name={link.title} href={link.slug == "" ? "/docs" : `/docs/${link.slug}`} />
                ))}
            </Box>
            <NavItem name="Back" href="/" textAlign="center" backgroundColor={useColorModeValue("gray.200", "gray.700")} />
        </Flex>
    );
};

interface NavItemProps extends LinkItemProps, BoxProps {

}

const NavItem = ({ name, href, ...rest }: NavItemProps) => {
    const router = useRouter();
    const selectedBg = useColorModeValue('gray.200', 'gray.700');
    return (
        <Link onClick={() => router.push(href)} style={{ textDecoration: 'none' }}>
            <Text
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                backgroundColor={router.asPath == href ? selectedBg : undefined}
                _hover={{
                    textDecoration: 'none',
                    bg: selectedBg,
                }}
                {...rest}>
                {name}
            </Text>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<List />}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                Documentation
            </Text>
        </Flex>
    );
};

export async function getStaticPaths() {
    return {
        paths: getDocs().filter((doc) => doc.slug != "").map((doc) => {
            return { params: { slug: doc.slug } };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    var docs = getDocs();
    var page = docs.find((doc) => doc.slug === params.slug)!;
    const content = await markdownToHtml(page?.content || '')
    page['content'] = content;
    return {
        props: {
            page: page,
            pages: docs
        }
    };
}
