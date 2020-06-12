require('dotenv').config()

const FACEBOOK_GROUP_ID = '714447698702058'
const FACEBOOK_FIELDS = console.log(
  'process',
  process.env.FACEBOOK_ACCESS_TOKEN
)

module.exports = {
  siteMetadata: {
    title: 'Art~Hack Wellington',
    description: 'A social gathering for creative tech in Wellington, Aotearoa',
    author: 'Art~Hack Wellington'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass', // for pro-gallery
    // TODO query for more than 40 latest live streams
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`${FACEBOOK_GROUP_ID}`],
        params: {
          fields: `
            videos.limit(40) {
              id,
              permalink_url,
              created_time,
              title,
              description,
              source,
              picture
            }
          `
        },
        key: process.env.FACEBOOK_ACCESS_TOKEN,
        version: '7.0'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'arthack.nz',
        short_name: 'arthack.nz',
        start_url: '/',
        background_color: '#c33764',
        theme_color: '#1d2671',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '4',
        matomoUrl: 'https://analytics.mikey.nz',
        siteUrl: 'https://arthack.nz'
      }
    }
  ]
}
