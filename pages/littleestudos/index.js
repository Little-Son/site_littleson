import Head from 'next/head'
import {TextCard} from '../../components/Card'
import SiteFooter from '../../components/Footer'
import SiteHeader from '../../components/Header'
import { getAllStudys } from '../../lib/studyAPI'

export default function HomePage({  allPosts  }) {
    const posts = allPosts
    return(
        <>
        <Head>
            <title>LittleEstudos | Little Son</title>
        </Head>
        <SiteHeader pageTitle="Little Son" pageLink="/">
            <span className="text-lg">LittleEstudos</span>
        </SiteHeader>

        <main className="w-4/6 md:w-3/6 mx-auto mt-32 pt-10">
            <section className="header h-60">
                <div className="mt-8">
                    <h1 className="text-4xl">#LittleEstudos</h1>
                    <h2 className="text-xl">Estudos bíblicos para os pequenos conhecerem mais sobre a fé.</h2>
                </div>
            </section>

            <section className="littleestudos mb-12">
            {posts.map((post) => (
                <TextCard key={post.slug} title={post.title} slug={`/littleestudos/${post.slug}`} excerpt={post.excerpt} buttonText="Ler estudo"/>
            ))}
            </section>
        </main>

        <SiteFooter />
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllStudys([
      'title',
      'slug',
      'excerpt',
      'date'
    ])

    return {
      props: { allPosts  },
    }
}