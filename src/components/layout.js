import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Box, Flex } from 'rebass/styled-components'
import reset from 'styled-reset'

import SEO from './seo'

import 'typeface-ibm-plex-sans'
import 'typeface-ibm-plex-serif'
import 'typeface-ibm-plex-mono'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`

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
    <GlobalStyle />
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
