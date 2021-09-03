import { Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import BucketNavigation from '../components/nav'


export default function NotificationsPage(): ReactElement {
  return (
    <BucketNavigation>
      <Text align="center" p={8}>No notifications</Text>
    </BucketNavigation>
  )
}
