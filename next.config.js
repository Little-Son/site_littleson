const withPWA = require('next-pwa')

module.exports = withPWA({
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_ID,
    TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
    TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_ID
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
})