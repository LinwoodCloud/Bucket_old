import { ChevronDownIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Box, Container, Flex, Heading, Stack, VStack } from '@chakra-ui/layout'
import { Button, ButtonGroup, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ArrowSquareOut, Bell } from 'phosphor-react'
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
