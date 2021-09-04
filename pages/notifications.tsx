import { Text } from '@chakra-ui/react'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import BucketNavigation from '../components/nav'


export default function NotificationsPage(): ReactElement {
  return (<>
    <Head>
      <title>Notifications - Linwood Bucket</title>
    </Head>
    <BucketNavigation>
      <Text align="center" p={8}>No notifications</Text>
    </BucketNavigation>
  </>)
}
