import React from 'react'
import { Box, Flex, Text, Image, Link } from 'rebass/styled-components'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import Emoji from 'a11y-react-emoji'
import { FaFacebook } from 'react-icons/fa'

import icon from '../images/icon.png'
import Layout from '../components/layout'

const meta = {
  facebookUrl: 'https://www.facebook.com/groups/714447698702058/'
}

function LandingPage () {
  return <Layout header={<Hero />}>{/* <JamSection /> */}</Layout>
}

export default LandingPage

function Hero () {
  return (
    <Flex
      as='header'
      padding={[3, 4, 5]}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      css={`
        background: ${({ theme: { colors } }) =>
      `linear-gradient(0deg, ${colors.primary[0]}, ${colors.primary[1]})`};
      `}
      sx={{
        height: '100vh'
        /*
        borderBottomWidth: 8,
        borderBottomStyle: 'solid',
        borderBottomColor: 'dark'
        */
      }}
    >
      <Image flex='2' src={icon} />
      <Text
        as='h1'
        p={3}
        color={'white'}
        fontSize={[5, 6, 7]}
        fontFamily='headline'
        fontWeight='bold'
        flex='1'
        sx={{
          '-webkitTextStroke': ['1px #000', '1px #000', '2px #000'],
          textShadow: [
            `
               2px 2px 0 #000,
             -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
               1px 1px 0 #000
            `,
            `
               4px 4px 0 #000,
             -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
               1px 1px 0 #000
            `,
            `
               8px 8px 0 #000,
             -2px -2px 0 #000,  
              2px -2px 0 #000,
              -2px 2px 0 #000,
               2px 2px 0 #000
            `
          ]
        }}
      >
        Art~Hack
      </Text>
      <Text
        as='p'
        p={3}
        color={'white'}
        fontSize={[3, 4, 5]}
        fontFamily='headline'
        fontWeight='bold'
        lineHeight={[4, 5, 6]}
        flex='2'
        sx={{
          maxWidth: '64rem',
          '-webkitTextStroke': ['1px #000', '1px #000', '2px #000'],
          textShadow: [
            `
             -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
               1px 1px 0 #000
            `,
            `
             -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
               1px 1px 0 #000
            `,
            `
             -2px -2px 0 #000,  
              2px -2px 0 #000,
              -2px 2px 0 #000,
               2px 2px 0 #000
            `
          ]
        }}
      >
        A social gathering for creative tech in Wellington, Aotearoa
      </Text>
      <SocialIcons isWhite />
    </Flex>
  )
}

function JamSection () {
  return 'Jam'
}

/* utils */
function Section (props) {}

function SocialIcons (props) {
  const { isWhite } = props
  return (
    <Link href={meta.facebookUrl}>
      <FaFacebook size={'4em'} color={isWhite ? 'white' : '#3b5998'} />
    </Link>
  )
}

function PrettyLink (props) {
  const { href } = props
  return (
    <Link
      href={href}
      target='_window'
      color='primary.1'
      sx={{
        textDecoration: 'none',
        ':hover': { textDecoration: 'underline' }
      }}
      {...props}
    />
  )
}