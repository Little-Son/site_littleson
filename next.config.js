const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
}