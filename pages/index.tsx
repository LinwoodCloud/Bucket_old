import React, { ReactElement } from 'react'
import BucketNavigation from '../components/nav'
import Head from 'next/head';

export default function HomePage(): ReactElement {
  return (<>
    <Head>
      <title>Linwood Bucket</title>
    </Head>
    <BucketNavigation>
      Hello
    </BucketNavigation>
  </>)
}
