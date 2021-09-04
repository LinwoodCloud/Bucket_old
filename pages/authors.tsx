import { Input } from '@chakra-ui/input'
import { Box, Stack, Wrap, WrapItem } from '@chakra-ui/layout'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Card from '../components/card'
import BucketNavigation from '../components/nav'


export default function AuthorsPage(): ReactElement {
  return (<>
    <Head>
      <title>Authors - Linwood Bucket</title>
    </Head>
    <BucketNavigation>
      <Stack>
        <Box align="center" p={4}>
          <Input maxW="lg" placeholder="Search" />
        </Box>
        <Wrap p={4} mt={16} spacing={4} justify="center">
          <WrapItem>
            <Card title="Test author 1" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 2" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 3" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 5" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 6" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 4" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 7" description="This is a description" href="/" />
          </WrapItem>
          <WrapItem>
            <Card title="Test author 8" description="This is a description" href="/" />
          </WrapItem>
        </Wrap>
      </Stack>
    </BucketNavigation>
  </>)
}
