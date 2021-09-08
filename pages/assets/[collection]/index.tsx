import { Input } from '@chakra-ui/input'
import { Box, Container, Heading, Stack, VStack, Wrap, WrapItem } from '@chakra-ui/layout'
import React, { ReactElement } from 'react'
import Card from '../../../components/card'
import BucketNavigation from '../../../components/nav'


export default function AssetsPage(): ReactElement {
    return (
        <BucketNavigation>
            <Container maxW="container.lg">
                <Heading>
                    Collection name - Assets
                </Heading>
                <Stack>
                    <Box align="center" p={4}>
                        <Input maxW="lg" placeholder="Search" />
                    </Box>
                    <VStack alignItems="stretch">
                        <Card title="Test collection 2" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 3" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 5" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 6" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 4" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 7" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 8" description="This is a description" href="/assets/0/0" />
                        <Card title="Test collection 1" description="This is a description" href="/assets/0/0" />
                    </VStack>
                </Stack>
            </Container>
        </BucketNavigation>
    )
}
