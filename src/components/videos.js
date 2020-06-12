import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactPlayer from 'react-player/lazy'
import { useInView } from 'react-intersection-observer'
import { Box, Text } from 'rebass'

export default function Videos (props) {
  const videosData = useStaticQuery(graphql`
    query videos {
      allVideosYaml {
        nodes {
          type
          url
          description
          title
          createdAt
        }
      }
    }
  `)
  const videos = videosData.allVideosYaml.nodes

  return <VideoGallery videos={videos} />
}

function VideoGallery (props) {
  const { videos } = props

  return (
    <Box>
      {videos.map(video => (
        <VideoGalleryItem key={video.url} video={video} />
      ))}
    </Box>
  )
}

function VideoGalleryItem (props) {
  const { video } = props
  const { type, url, description, title, createdAt } = video

  const [ref, inView] = useInView({
    threshold: 0
  })

  const formattedCreatedAt = useMemo(() => {
    return new Date(createdAt).toLocaleDateString()
  }, [createdAt])

  console.log('url', fullUrl(type, url))

  return (
    <Box ref={ref}>
      {/*
      {title && <Text as='h2'>{title}</Text>}
      {description && <Text as='p'>{description}</Text>}
      */}
      {formattedCreatedAt && <Text as='p'>{formattedCreatedAt}</Text>}
      {inView && (
        <ReactPlayer
          url={fullUrl(type, url)}
          controls
          config={{
            facebook: {
              appId: '301991207485717'
            }
          }}
        />
      )}
    </Box>
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
