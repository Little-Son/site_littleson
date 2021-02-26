const Feed = require('feed').Feed
const fs = require('fs')

export default async function generateRssFeed(posts) {
  const baseUrl = 'https://littleson.com.br'
  const date = new Date()
  const author = {
    name: 'Jamil Filho',
    email: 'contato@jamilfilho.com.br',
    link: 'https://twitter.com/ilustra_filho'
  }

  const feed = new Feed({
    title: `Little Son`,
    description: 'Em Cristo somos feitos pequenos filhos de Deus',
    id: baseUrl,
    link: baseUrl,
    language: 'pt',
    image: `${baseUrl}/assets/site-logo.png`,
    favicon: `${baseUrl}/assets/favicon.ico`,
    copyright: `Todos os direitos reservados ${date.getFullYear()}, Little Son`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${baseUrl}/feed.xml`,
      json: `${baseUrl}/feed.json`,
      atom: `${baseUrl}/atom.xml`
    },
    author
  })
  
  posts.forEach((post) => {
    const url = `${baseUrl}/${post.slug}`
    const postImage = `${baseUrl}${post.ogImage.url}`
    
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      image: postImage
    })
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/feed.xml', feed.rss2())
  fs.writeFileSync('./public/atom.xml', feed.atom1())
  fs.writeFileSync('./public/feed.json', feed.json1())
}