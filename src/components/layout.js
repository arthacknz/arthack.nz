import React from 'react'
import { Global, css } from '@emotion/core'
import { Box, Flex } from 'theme-ui'
import reset from 'emotion-reset'

import SEO from './seo'

import 'typeface-ibm-plex-sans'
import 'typeface-ibm-plex-serif'
import 'typeface-ibm-plex-mono'

const Layout = ({ header, children }) => (
  <Main>
    <SEO
      keywords={[
        'art',
        'hack',
        'art~hack',
        'creative',
        'tech',
        'social',
        'meetup',
        'wellington',
        'new zealand',
        'aotearoa',
        'synth',
        'solarpunk',
        'peer-to-peer'
      ]}
    />
    <Global
      styles={css`
        ${reset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />

    {header}
    <Body>{children}</Body>
  </Main>
)

function Main (props) {
  return <Box as='main' {...props} />
}

function Body (props) {
  return <Flex flexDirection='column' {...props} />
}
export default Layout

export function withLayout (PageComponent) {
  return function PageWithLayout (props) {
    return (
      <Layout>
        <PageComponent {...props} />
      </Layout>
    )
  }
}
