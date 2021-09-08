import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Divider, Flex, Heading, Image, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { GithubLogo, TwitterLogo } from 'phosphor-react'
import React, { ReactElement } from 'react'
import Card from '../../components/card'
import BucketNavigation from '../../components/nav'
import NextLink from 'next/link'


export default function AuthorPage(): ReactElement {
    return (
        <BucketNavigation>
            <Breadcrumb pt={2} pb={4}>
                <BreadcrumbItem>
                    <NextLink href={"/"} passHref>
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </NextLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <NextLink href={"/authors"} passHref>
                        <BreadcrumbLink>Authors</BreadcrumbLink>
                    </NextLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <NextLink href={"/authors/0"} passHref>
                        <BreadcrumbLink>CurrentAuthor</BreadcrumbLink>
                    </NextLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Container maxW="container.lg">
                <Flex flexDir={{ base: "column", md: "row" }} justifyContent="center">
                    <Box>
                        <Box borderWidth="1px" borderRadius="lg" p={4} alignItems="center" display="flex" flexDir="column">
                            <Image alt="Logo" src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" p={4} />
                            <Heading as="h2">Author Page</Heading>
                            <Box>
                                Description
                            </Box>
                            <Divider p={2} />
                            <VStack pt={4}>
                                <Button colorScheme="green" size="sm" leftIcon={<GithubLogo size={24} />}>
                                    GitHub
                                </Button>
                                <Button colorScheme="teal" size="sm" leftIcon={<TwitterLogo size={24} />}>
                                    Twitter
                                </Button>
                            </VStack>
                        </Box>
                    </Box>
                    <Flex flexDir="column" flex={1} p={8} alignItems="stretch" spacing>
                        <Box p={2}>
                            <Card title="Test" description="abc" href="#" />
                        </Box>
                        <Box p={2}>
                            <Card title="Test" description="abc" href="#" />
                        </Box>
                        <Box p={2}>
                            <Card title="Test" description="abc" href="#" />
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </BucketNavigation>
    )
}
