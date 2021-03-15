// const withPWA = require('next-pwa')

module.exports = {
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  pwa: {
    dest: 'public/sw'
  },
  async redirects() {
    return [
      {
        source: `/amazon`,
        destination: 'https://www.amazon.com.br/?&_encoding=UTF8&tag=littleson-20&linkCode=ur2&linkId=6436fe63ac80e6d638b722b4af8fbb49&camp=1789&creative=9325',
        permanent: true,
      },
      {
        source: `/loja`,
        destination: 'https://www.colab55.com/@umlittleson/sketchbooks?aff=x5w8c6',
        permanent: true,
      },
    ]
  },
}