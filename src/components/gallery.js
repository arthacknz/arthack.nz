import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactPlayer from 'react-player/lazy'
import { useInView } from 'react-intersection-observer'
import { useWindowWidth } from '@react-hook/window-size'
import { Box, Flex, Text } from 'theme-ui'

// TODO: find way to handle error when loading player's SDKs
// for example, by default Firefox blocks loading Facebook's SDK.
// which is sweet, but would be great to tell the user what's happening.

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

  const [currentPlaying, setCurrentPlaying] = useState(null)

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        background: ({
          colors: {
            gradients: { harmonizedBlurryBeach: gradient }
          }
        }) => `linear-gradient(0deg, ${gradient[0]}, ${gradient[1]})`
      }}
    >
      {items.map(item => (
        <GalleryItem
          key={item.url}
          item={item}
          onPlay={() => setCurrentPlaying(item.url)}
          mayBePlaying={currentPlaying === item.url}
          shouldPause={currentPlaying !== item.url}
        />
      ))}
    </Flex>
  )
}

const DEFAULT_PLAYER_ASPECT = '16:9'

function GalleryItem (props) {
  const { item, mayBePlaying, shouldPause, onPlay } = props
  let { type, url, description, title, createdAt, aspect } = item

  if (aspect == null) {
    aspect = DEFAULT_PLAYER_ASPECT
  }

  // force second-pass of rendering for server-side rendering (ssr) bug
  // to do with client viewport
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])

  const width = usePlayerWidth()
  const height = useMemo(() => {
    return calculateHeight(width, aspect)
  }, [width, aspect])

  const [containerRef, inView] = useInView({
    threshold: 0
  })

  const formattedCreatedAt = useMemo(() => {
    return new Date(createdAt).toLocaleDateString()
  }, [createdAt])

  // handle play / pause using internal player
  const playerRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (playerRef.current == null) return
    const internalPlayer = playerRef.current.getInternalPlayer()

    if (isPlaying && shouldPause) {
      if (type === 'facebook') {
        internalPlayer.pause()
      } else {
        throw new Error('unimplemented')
      }
    }
  }, [type, playerRef, isPlaying, shouldPause])
  const handlePlay = useCallback(() => {
    // order matters: need to set parent state first, otherwise will immediately pause
    onPlay()
    setIsPlaying(true)
  }, [setIsPlaying])

  return (
    <Flex
      ref={containerRef}
      as='section'
      sx={{
        margin: [4, 4, 5],
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {formattedCreatedAt && (
        <Text
          as='p'
          sx={{
            padding: 3,
            fontSize: [4, 5, 6],
            textAlign: 'center',
            color: 'text',
            fontFamily: 'heading',
            fontWeight: 'heading'
          }}
        >
          {formattedCreatedAt}
        </Text>
      )}
      {title && (
        <Text
          as='h3'
          sx={{
            padding: 1,
            fontSize: [5, 6, 7],
            textAlign: 'center',
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'bold'
          }}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          as='p'
          sx={{
            padding: 2,
            fontSize: [2, 3, 4],
            textAlign: 'center',
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body'
          }}
          p={2}
        >
          {description}
        </Text>
      )}
      {isClient && (
        <Box
          sx={{
            width: `${width}px`,
            height: `${height}px`
          }}
        >
          {(inView || mayBePlaying) && (
            <ReactPlayer
              ref={playerRef}
              url={fullUrl(type, url)}
              controls
              width='100%'
              height='100%'
              config={{
                facebook: {
                  appId: '301991207485717'
                }
              }}
              onPlay={handlePlay}
            />
          )}
        </Box>
      )}
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
