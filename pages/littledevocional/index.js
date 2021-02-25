import Head from 'next/head'
import {TextCard} from '../../components/Card'
import SiteFooter from '../../components/Footer'
import SiteHeader from '../../components/Header'
import { getAllDevotionals } from '../../lib/devocionalAPI'

export default function HomePage({  allPosts  }) {
    const posts = allPosts
    return(
        <>
        <Head>
            <title>LittleDevocional | Little Son</title>
        </Head>
        <SiteHeader pageTitle="Little Son" pageLink="/">
            <span className="text-lg">LittleDevocional</span>
        </SiteHeader>

        <main className="w-4/6 md:w-3/6 mx-auto mt-32 pt-10">
            <section className="header h-60">
                <div className="mt-8">
                    <h1 className="text-4xl">#LittleDevocional</h1>
                    <h2 className="text-xl">Devocionais diários do projeto Little Son</h2>
                </div>
            </section>

            <section className="littledevocional mb-12">
            {posts.map((post) => (
                <TextCard key={post.slug} title={post.title} slug={`/littledevocional/${post.slug}`} excerpt={post.excerpt} tagSlug={post.tag.slug} tagTitle={`#${post.tag.title}`}/>
            ))}
            </section>
        </main>

        <SiteFooter />
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllDevotionals([
      'title',
      'slug',
      'excerpt',
      'tag',
      'date'
    ])

    return {
      props: { allPosts  },
    }
}