import { Input } from '@chakra-ui/input'
import { Box, Stack, Wrap } from '@chakra-ui/layout'
import React, { ReactElement } from 'react'
import Card from '../components/card'
import BucketNavigation from '../components/nav'


export default function AuthorsPage(): ReactElement {
  return (
    <BucketNavigation>
      <Stack>
        <Box align="center" p={4}>
          <Input maxW="lg" placeholder="Search" />
        </Box>
        <Wrap p={4} mt={16}>
          <Card title="Test author 1" description="This is a description" href="/" />
          <Card title="Test author 2" description="This is a description" href="/" />
          <Card title="Test author 3" description="This is a description" href="/" />
          <Card title="Test author 4" description="This is a description" href="/" />
          <Card title="Test author 5" description="This is a description" href="/" />
          <Card title="Test author 6" description="This is a description" href="/" />
          <Card title="Test author 7" description="This is a description" href="/" />
          <Card title="Test author 8" description="This is a description" href="/" />
        </Wrap>
      </Stack>
    </BucketNavigation>
  )
}
