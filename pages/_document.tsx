import { ColorModeScript } from "@chakra-ui/react"
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from "react"
import theme from "../utils/theme"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Bucket" />
          <meta name="apple-mobile-web-app-title" content="Bucket" />
          <meta name="theme-color" content="#EBEF35" />
          <meta name="msapplication-navbutton-color" content="#EBEF35" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}