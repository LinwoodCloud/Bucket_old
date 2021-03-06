import { ChevronDownIcon } from '@chakra-ui/icons'
import { Container, Flex, Heading } from '@chakra-ui/layout'
import { Button, ButtonGroup, IconButton, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ArrowSquareOut, Bell } from 'phosphor-react'
import React, { ReactElement } from 'react'
import NextLink from 'next/link'
import BucketNavigation from '../../../components/nav'


export default function AssetsPage(): ReactElement {
    return (
        <BucketNavigation>
            <Container maxW="container.lg">
                <Flex justifyContent="center" alignItems="center">
                    <Heading size="xl" p={4} flex="1">
                        Asset name
                    </Heading>
                    <ButtonGroup>
                        <IconButton aria-label="Subscribe" icon={<Bell size={24} />} />
                        <IconButton aria-label="Visit website" icon={<ArrowSquareOut size={24} />} />
                        <Menu placement="bottom-end">
                            <MenuButton colorScheme="blue" as={Button} rightIcon={<ChevronDownIcon />}>
                                Get
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Stable</MenuItem>
                                <MenuItem>Beta</MenuItem>
                                <MenuItem>Alpha</MenuItem>
                            </MenuList>
                        </Menu>
                    </ButtonGroup>
                </Flex>
                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Changelog</Tab>
                        <NextLink href="/" passHref>
                            <Tab>Next</Tab>
                        </NextLink>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </BucketNavigation>
    )
}
