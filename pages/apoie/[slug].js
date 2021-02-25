import Head from 'next/head'
import { useRouter } from 'next/router'
import SiteHeader from '../../components/Header'
import { getPostBySlug, getAllPosts } from '../../lib/contentAPI'
import markdownToHtml from '../../lib/markdownToHtml'
import markdownStyles from '../../components/markdown-styles.module.css'
import SiteFooter from '../../components/Footer'

export default function AboutPage({post}) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return(
        <>
        <Head>
          <title>{post.title} | Little Son</title>
        </Head>
        <SiteHeader pageTitle="Little Son" pageLink="/">
          <span className="text-lg">{post.title}</span>
        </SiteHeader>

        <main className="w-4/6 md:w-3/6 mx-auto mt-20 pt-10">
          <article className="md:w-4/5 mx-auto my-12">
            <header className="header min-h-60 pb-20">
                <div className="mt-8">
                    <h1 className="text-4xl mb-4">{post.title}</h1>
                    <h2 className="text-xl leading-tight">{post.excerpt}</h2>
                </div>
            </header>

            <section className="mb-6">
              <div className={markdownStyles['markdown']}  dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </section>
          </article>
        </main>
        <SiteFooter />
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
      'title',
      'slug',
      'date',
      'excerpt',
      'author',
      'ogImage',
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
    const posts = getAllPosts(['slug'])
  
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