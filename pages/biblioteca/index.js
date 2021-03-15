import Head from 'next/head'
import {TextCard} from '../../components/Card'
import SiteFooter from '../../components/Footer'
import SiteHeader from '../../components/Header'
import { getAllLibraries } from '../../lib/bibliotecaAPI.js'

export default function HomePage({  allLibraries  }) {
    const posts = allLibraries
    return(
        <>
        <Head>
            <title>Biblioteca | Little Son</title>
        </Head>
        <SiteHeader pageTitle="Little Son" pageLink="/">
            <span className="text-lg">Biblioteca</span>
        </SiteHeader>

        <main className="w-4/6 md:w-3/6 mx-auto mt-32 pt-10">
            <section className="header h-60 md:w-4/5 mx-auto">
                <div className="mt-8">
                    <h1 className="text-4xl">Biblioteca</h1>
                    <h2 className="text-xl">Atividades, desenhos para colorir, wallpapers e muito mais para você baixar gratuitamente.</h2>
                </div>
            </section>

            <section className="biblioteca md:w-4/5 mx-auto mb-12">
            {posts.map((post) => (
                <TextCard key={post.slug} title={post.title} slug={`/biblioteca/${post.slug}`} excerpt={post.excerpt} buttonText="Abrir conteúdo"/>
            ))}
            </section>
        </main>

        <SiteFooter />
        </>
    )
}

export async function getStaticProps() {
    const allLibraries = getAllLibraries([
        'title',
        'slug',
        'excerpt',
        'tag',
        'date'
      ])

    return {
      props: { allLibraries },
    }
}