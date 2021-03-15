import Head from 'next/head'
import { useRouter } from 'next/router'
import SiteHeader from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { getDevotionalBySlug, getAllDevotionals } from '../../lib/devotionalAPI'
import markdownToHtml from '../../lib/markdownToHtml'
import markdownStyles from '../../components/markdown-styles.module.css'
import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'
import ShareButtons from '../../components/Sharer'
import { Comment } from '../../components/Comment'
import NewsletterBox from '../../components/NewsletterBox'

export default function DevotionalPage({post}) {
    const router = useRouter()
    const devotionalDate = parseISO(post.date)
    const formattedDate = format(devotionalDate, 'dd/MM/yyyy')
    
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return(
        <>
        <Head>
          <title>{post.title} | Little Son</title>
        </Head>
        <SiteHeader pageTitle="LittleDevocional" pageLink="/littledevocional">
          <span className="text-lg">{post.title}</span>
        </SiteHeader>

        <main className="w-5/6 md:w-3/6 mx-auto mt-20 pt-10">
          <article className="md:w-4/5 mx-auto my-12">
            <header className="header min-h-60 pt-12 pb-20 mb-12">
                <div className="text-center md:text-left mb-12">
                    <h1 className="text-3xl md:text-4xl mb-4">{post.title}</h1>
                    <h2 className="text-lg md:text-xl leading-normal">{post.excerpt}</h2>
                </div>
                <div className="w-full text-center md:text-left">
                  <span className="mr-2"><strong>Escrito por:</strong> {post.author.name}</span> &bull; 
                  <time className="mx-2" dateTime={post.date}>{formattedDate}</time>
                </div>
            </header>

            <section className="mb-6 pb-6 border-b-thin border-gray-100">
              <div className={markdownStyles['markdown']}  dangerouslySetInnerHTML={{ __html: post.content }}/>
            </section>

            <footer className="pt-6 mt-6">
              <NewsletterBox />
              
              <ShareButtons title={post.title} url={`littledevocional/${post.slug}`}/>
              
              <Comment href={`littledevocional/${post.slug}`}/>
            </footer>
          </article>
        </main>
        <SiteFooter />
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getDevotionalBySlug(params.slug, [
      'title',
      'slug',
      'date',
      'excerpt',
      'author',
      'content'
    ])
    
    const content = await markdownToHtml(post.content || '')

    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    }
}

export async function getStaticPaths() {
    const posts = getAllDevotionals(['slug'])
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
}