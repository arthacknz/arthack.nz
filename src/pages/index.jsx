import React from 'react'
import { Flex, Text, Image, Link } from 'theme-ui'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Emoji from 'a11y-react-emoji'
import { FaFacebook, FaYoutube } from 'react-icons/fa'

import icon from '../images/icon.png'
import Layout from '../components/layout'
import Gallery from '../components/gallery'

const meta = {
  facebookUrl: 'https://www.facebook.com/groups/714447698702058/',
  youtubeUrl: 'https://www.youtube.com/channel/UCSkR9Zqo9Cf-kmOoGYupy7Q'
}

function LandingPage () {
  return <Layout header={<Hero />}><GallerySection /></Layout>
}

export default LandingPage

function Hero () {
  return (
    <Flex
      as='header'
      sx={{
        height: '100vh',
        padding: [3, 4, 5],
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: ({ colors: { gradients: { canYouFeelTheLoveTonight: gradient } } }) => (
          `linear-gradient(0deg, ${gradient[0]}, ${gradient[1]})`
        )
      }}
    >
      <Image sx={{ height: '30vh' }} src={icon} />
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          fontSize: [6, 7, 8]
        }}
      >
        <Text sx={{ marginX: 3, order: [1, 0, 0] }}>
          <Emoji symbol='✨' label='sparkles' />
        </Text>
        <Text
          as='h1'
          sx={{
            padding: 3,
            color: 'white',
            fontFamily: 'headline',
            fontWeight: 'bold',
            flex: ['100%', 1, 1],
            order: [0, 1, 1],
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
        <Text sx={{ marginX: 3, order: 2 }}>
          <Emoji symbol='🌈' label='rainbow' />
        </Text>
      </Flex>
      <Text
        as='p'
        sx={{
          padding: 3,
          color: 'white',
          fontSize: [4, 5, 6],
          fontFamily: 'headline',
          fontWeight: 'bold',
          lineHeight: 2,
          flex: 2,
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

function GallerySection () {
  return <Gallery />
}

/* utils */
function Section (props) {}

function SocialIcons (props) {
  const { isWhite } = props
  return (
    <Flex sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Link sx={{ marginX: 3 }} href={meta.facebookUrl}>
        <FaFacebook size={'4em'} color={isWhite ? 'white' : '#3b5998'} />
      </Link>
      <Link sx={{ marginX: 3 }} href={meta.youtubeUrl}>
        <FaYoutube size={'4em'} color={isWhite ? 'white' : '#e52d27'} />
      </Link>
    </Flex>
  )
}

function PrettyLink (props) {
  const { href } = props
  return (
    <Link
      href={href}
      target='_window'
      sx={{
        color: 'primary.1',
        textDecoration: 'none',
        ':hover': { textDecoration: 'underline' }
      }}
      {...props}
    />
  )
}
