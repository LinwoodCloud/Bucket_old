import { ChevronDownIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Box, Container, Flex, Heading, Stack, VStack } from '@chakra-ui/layout'
import { Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Card from '../../../components/card'
import BucketNavigation from '../../../components/nav'


export default function AssetsPage(): ReactElement {
    return (
        <BucketNavigation>
            <Container maxW="container.lg">
                <Flex justifyContent="center" alignItems="center">
                    <Heading size="xl" p={4} flex="1">
                        Asset name
                    </Heading>
                    <Menu placement="bottom-end">
                        <MenuButton colorScheme="blue" as={Button} rightIcon={<ChevronDownIcon />}>
                            Get
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Subscribe</MenuItem>
                            <MenuDivider />
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Visit website</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Changelog</Tab>
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
