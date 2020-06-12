import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css'

export default function Videos (props) {
  const facebookData = useStaticQuery(graphql`
    query facebookVideos {
      allFacebookVideos {
        nodes {
          created_time
          description
          id
          permalink_url
          picture
          source
          title
        }
      }
    }
  `)
  const facebookVideos = facebookData.allFacebookVideos.nodes

  const galleryItems = facebookVideos.map(facebookVideo => ({
    itemId: facebookVideo.id,
    mediaUrl: facebookVideo.source,
    metaData: {
      type: 'video',
      title: facebookVideo.title,
      description: facebookVideo.description,
      poster: facebookVideo.picture,
      link: {
        url: `https://facebook.com/${facebookVideo.permalink_url}`,
        target: '_blank'
      }
    }
  }))

  const galleryOptions = {
    allowTitle: true,
    allowDescription: true,
    allowDownload: false,
    allowSocial: false,
    loveButton: false,
    useCustomButton: false,
    itemClick: 'link',
    /*
    videoPlay: 'onHover',
    */
    videoSound: true
  }

  const galleryContainer = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const galleryScrollingElement = window

  return (
    <ProGallery
      items={galleryItems}
      options={galleryOptions}
      container={galleryContainer}
      scrollingElement={galleryScrollingElement}
    />
  )
}
