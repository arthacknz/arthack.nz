import baseTheme from '@theme-ui/preset-base'

//
// https://uigradients.com/#CanYouFeelTheLoveTonight
// https://uigradients.com/#ViceCity
// https://uigradients.com/#CosmicFusion
// https://uigradients.com/#Timber
//
// https://uigradients.com/#Tranquil
// https://uigradients.com/#CrazyOrangeI
//
// https://uigradients.com/#GreenandBlue
var colors = {
  primary: ['#B06AB3', '#4568DC'],
  secondary: [[], []],
  text: '#000',
  background: '#fff',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  white: '#fff',
  light: '#f8f9fa',
  muted: '#6c757d',
  dark: '#343a40'
}

var fonts = {
  serif: 'IBM Plex Serif',
  sans: 'IBM Plex Sans',
  mono: 'IBM Plex Mono'
}
fonts.headline = fonts.mono
fonts.heading = fonts.sans
fonts.body = fonts.serif
fonts.link = fonts.sans
fonts.code = fonts.mono

export default {
  ...baseTheme,
  colors,
  fonts
}
