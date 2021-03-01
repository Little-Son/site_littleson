import Head from 'next/head'
import { useRouter } from 'next/router'
import SiteHeader from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { getStudyBySlug, getAllStudys } from '../../lib/studyAPI'
import markdownToHtml from '../../lib/markdownToHtml'
import markdownStyles from '../../components/markdown-styles.module.css'
import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'
import ShareButtons from '../../components/Sharer'
import { Comment } from '../../components/Comment'
import { Button } from '../../components/Button'
import { FiDownload } from 'react-icons/fi'

export default function StudyPage({post}) {
    const router = useRouter()
    const studyDate = parseISO(post.date)
    const formattedDate = format(studyDate, 'dd/MM/yyyy')
        
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return(
        <>
        <Head>
          <title>{post.title} | Little Son</title>
        </Head>
        <SiteHeader pageTitle="LittleEstudos" pageLink="/littleestudos">
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

            <section className="mb-6">
              <div className={markdownStyles['markdown']}  dangerouslySetInnerHTML={{ __html: post.content }}/>

              <div className="w-full mb-6 min-h-32 px-2 py-12 grid grid-cols-3 rounded-lg border-thin border-gray-100 mt-12">
                <div className="h-full flex justify-center items-center">
                  <FiDownload className="text-6xl text-gray-400"/>
                </div>

                <div className="col-span-2 flex flex-col justify-center">
                  <div className="mb-6">
                    <p className="text-xl font-bold mb-4 leading-tight">{post.supportMaterial.title}</p>
                    <p className="text-base">Baixe, gratuitamente, o material de apoio e se aprofunde no estudo.</p>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <form method="GET" action={post.supportMaterial.url}>
                      <Button ariaLabel="Baixar PDF">
                        Baixar PDF
                      </Button>
                    </form>
                  </div>
                </div>

              </div>
            </section>

            <footer className="pt-6 mt-6">
              <ShareButtons title={post.title} url={`littleestudos/${post.slug}`}/>
              
              <section className="mt-12 md:mt-16">
                <Comment href={`littleestudos/${post.slug}`}/>
              </section>
            </footer>
          </article>
        </main>
        <SiteFooter />
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getStudyBySlug(params.slug, [
      'title',
      'slug',
      'date',
      'excerpt',
      'author',
      'supportMaterial',
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
    const posts = getAllStudys(['slug'])
  
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