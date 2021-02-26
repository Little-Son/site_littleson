import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_littleestudos')

export function getStudySlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getStudyBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllStudys(fields = []) {
  const slugs = getStudySlugs()
  const posts = slugs
    .map((slug) => getStudyBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}