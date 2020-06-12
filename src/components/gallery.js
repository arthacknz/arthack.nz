import React, { useEffect, useMemo, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'
import { Box, Flex, Text } from 'rebass'

export default function Gallery (props) {
  const galleryData = useStaticQuery(graphql`
    query gallery {
      allGalleryYaml {
        nodes {
          type
          url
          description
          title
          createdAt
          aspect
        }
      }
    }
  `)
  const items = galleryData.allGalleryYaml.nodes

  return <GalleryList items={items} />
}

function GalleryList (props) {
  const { items } = props

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {items.map(item => (
        <GalleryItem key={item.url} item={item} />
      ))}
    </Flex>
  )
}

const DEFAULT_PLAYER_ASPECT = '16:9'

function GalleryItem (props) {
  const { item } = props
  let { type, url, description, title, createdAt, aspect } = item

  if (aspect == null) {
    aspect = DEFAULT_PLAYER_ASPECT
  }

  // force update for window width
  const [, forceUpdate] = useState()
  useEffect(() => forceUpdate(), [])

  const width = usePlayerWidth()
  const height = useMemo(() => {
    return calculateHeight(width, aspect)
  }, [width, aspect])

  const [ref, inView] = useInView({
    threshold: 0
  })

  const formattedCreatedAt = useMemo(() => {
    return new Date(createdAt).toLocaleDateString()
  }, [createdAt])

  return (
    <Flex
      ref={ref}
      as='section'
      sx={{
        margin: 4,
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {formattedCreatedAt && (
        <Text
          as='p'
          p={3}
          fontSize={[3, 4, 5]}
          textAlign='center'
          color='black'
          fontFamily='body'
          fontWeight='bold'
        >
          {formattedCreatedAt}
        </Text>
      )}
      {title && (
        <Text
          as='h3'
          p={1}
          fontSize={[4, 5, 6]}
          textAlign='center'
          color='black'
          fontFamily='body'
          fontWeight='bold'
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          as='p'
          p={2}
          fontSize={[1, 2, 3]}
          textAlign='center'
          color='black'
          fontFamily='body'
          fontWeight='bold'
        >
          {description}
        </Text>
      )}
      <Box
        sx={{
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        {inView && (
          <ReactPlayer
            url={fullUrl(type, url)}
            controls
            width='100%'
            height='100%'
            config={{
              facebook: {
                appId: '301991207485717'
              }
            }}
          />
        )}
      </Box>
    </Flex>
  )
}

function fullUrl (type, url) {
  switch (type) {
    case 'facebook':
      if (url.startsWith('https://www.facebook.com')) return url
      else return `https://www.facebook.com${url}`
    default:
      throw new Error(`unexpected video type: ${type}`)
  }
}

function usePlayerWidth () {
  const windowWidth = useWindowWidth()

  if (windowWidth >= 1920) {
    return 1920
  } else if (windowWidth >= 1280) {
    return 1280
  } else if (windowWidth >= 960) {
    return 960
  } else if (windowWidth >= 640) {
    return 640
  } else {
    return 320
  }
}

function calculateHeight (width, aspect) {
  const [widthScale, heightScale] = aspect.split(':')
  const heightToWidthRatio = heightScale / widthScale
  return width * heightToWidthRatio
}
