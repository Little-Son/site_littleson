import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/Header'
import { getAllDevotionals } from '../lib/devocionalAPI'
import { TextCard } from '../components/Card'
import SiteFooter from '../components/Footer'

export default function HomePage({ allDevotionals }) {
    const devotionals = allDevotionals.slice(0,3)
    const devotionalLength = allDevotionals

    return(
        <>
        <Head>
            <title>Little Son</title>
        </Head>

        <SiteHeader pageTitle="Little Son" pageLink="/" />

        <main className="w-4/6 md:w-3/6 mx-auto mt-32 pt-10">
            <section className="header h-60">
                <div className="mt-8">
                    <h1 className="text-4xl">Little Son</h1>
                    <h2 className="text-xl">Em Cristo somos feitos pequenos filhos de Deus</h2>
                </div>
            </section>

            <section className="w-full border-thin border-gray-100 rounded-lg p-10 mb-20 flex justify-center items-center">
                <p className="text-lg"><strong>Atenção:</strong> Ainda estamos atualizando nosso site, por isso algumas funcionalidades e conteúdos não estão disponíveis.</p>
            </section>

            <section className="littledevocional mb-12">
                {devotionals.map((post) => (
                    <TextCard key={post.slug} title={post.title} slug={`/littledevocional/${post.slug}`} excerpt={post.excerpt} tagSlug={post.tag.slug} tagTitle={`#${post.tag.title}`}/>
                ))}
                <footer>
                    <div>
                        <Link href="/littledevocional">
                            <a className="flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition-colors focus:ring-2 ring-offset-4">Ver todos os {devotionalLength.length} devocionais</a>
                        </Link>
                    </div>
                </footer>
            </section>

            <section>
                <Link href="">
                    <a></a>
                </Link>
            </section>
        </main>
        
        <SiteFooter />
        </>
    )
}

export async function getStaticProps() {
    const allDevotionals = getAllDevotionals([
      'title',
      'slug',
      'excerpt',
      'tag',
      'date'
    ])

    return {
      props: { allDevotionals },
    }
}