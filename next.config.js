const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
}
module.exports = withImages(
  withCSS({
    target: 'serverless'
  })
)
