const withPWA = require('next-pwa')

module.exports = withPWA({
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  pwa: {
    dest: 'public/sw'
  },
  // async redirects() {
  //   return [
  //     {
  //       source: `${NEXTAUTH_URL}/amazon`,
  //       destination: 'https://www.amazon.com.br/?&_encoding=UTF8&tag=littleson-20&linkCode=ur2&linkId=6436fe63ac80e6d638b722b4af8fbb49&camp=1789&creative=9325',
  //       permanent: true,
  //     },
  //   ]
  // },
})