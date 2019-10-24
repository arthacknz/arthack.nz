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
