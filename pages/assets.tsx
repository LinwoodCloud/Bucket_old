import Head from 'next/head'
import React, { ReactElement } from 'react'
import BucketNavigation from '../components/nav'


export default function AssetsPage(): ReactElement {
  return (<>
    <Head>
      <title>Assets - Linwood Bucket</title>
    </Head>
    <BucketNavigation>
      Hello
    </BucketNavigation>
  </>)
}
