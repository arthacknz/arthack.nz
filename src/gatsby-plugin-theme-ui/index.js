import baseTheme from '@theme-ui/preset-base'

var colors = {
  text: '#000',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  white: '#fff',
  light: '#f8f9fa',
  muted: '#6c757d',
  dark: '#343a40',
  gradients: {
    // https://uigradients.com/#CanYouFeelTheLoveTonight
    canYouFeelTheLoveTonight: ['#B06AB3', '#4568DC'],
    // https://uigradients.com/#GreenandBlue
    greenAndBlue: ['#c2e59c', '#64b3f4'],
    // https://uigradients.com/#Summer
    summer: ['#22c1c3', '#fdbb2d'],
    // https://uigradients.com/#AzurePop
    azurePop: ['#ef32d9', '#89fffd'],
    // https://uigradients.com/#BlurryBeach
    blurryBeach: ['#d53369', '#cbad6d'],
    // harmonized to sync with canYouFeelTheLoveTonight
    harmonizedBlurryBeach: ['#d53369', '#b3b26a']
    //
    // https://uigradients.com/#CanYouFeelTheLoveTonight
    // https://uigradients.com/#ViceCity
    // https://uigradients.com/#CosmicFusion
    // https://uigradients.com/#Timber
    //
    // https://uigradients.com/#Tranquil
    // https://uigradients.com/#CrazyOrangeI
    //
  }
}

var fonts = {
  serif: 'IBM Plex Serif',
  sans: 'IBM Plex Sans',
  mono: 'IBM Plex Mono'
}

export default {
  ...baseTheme,
  colors,
  fonts
}
