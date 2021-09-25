import React from 'react'
import { Box, Button, Flex, Text, Image, Link } from 'theme-ui'
import Emoji from 'a11y-react-emoji'
import { use100vh } from 'react-div-100vh'

import icon from '../images/icon.png'
import Layout from '../components/layout'

const meta = {
  facebookUrl: 'https://www.facebook.com/groups/714447698702058/',
  peertubeUrl: 'https://tube.arthack.nz/video-channels/arthacknz/videos'
}

function LandingPage () {
  return <Layout><Hero /></Layout>
}

export default LandingPage

function Hero () {
  const fullHeight = use100vh() || '100vh'

  return (
    <Flex
      as='header'
      sx={{
        height: fullHeight,
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
            fontFamily: 'mono',
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
          fontFamily: 'mono',
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
      <SocialIcons />
    </Flex>
  )
}

/* utils */
function SocialIcons (props) {
  return (
    <Flex sx={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'mono',
      fontSize: [4, 5, 6]
    }}>
      <SocialIconButton
        href={meta.facebookUrl}
        text='Community'
        icons={[
          <Emoji symbol='😺' label='smiling cat' />,
          <Emoji symbol='💬' label='speech balloon' />
        ]}
      />
      <SocialIconButton
        href={meta.peertubeUrl}
        text='Content'
        icons={[
          <Emoji symbol='🔊' label='speaker high volume' />,
          <Emoji symbol='📺' label='television' />
        ]}
      />
    </Flex>
  )
}

function SocialIconButton (props) {
  const { href, text, icons } = props

  return (
    <Button
      as={Link}
      href={href}
      sx={{
        marginX: 3,
        backgroundColor: 'white',
        border: '4px solid black',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Text sx={{ padding: 2, color: 'black' }}>
        {text}
      </Text>
      <Box sx={{ padding: 2 }}>
        {icons.map((icon) => (
          <Box sx={{ display: 'inline-block', paddingX: 2 }}>
            {icon}
          </Box>
        ))}
      </Box>
    </Button>
  )
}
