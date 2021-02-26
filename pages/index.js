import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/Header'
import { getAllDevotionals } from '../lib/devotionalAPI'
import { getAllStudys } from '../lib/studyAPI'
import { TextCard } from '../components/Card'
import SiteFooter from '../components/Footer'

export default function HomePage({ allDevotionals, allStudys }) {
    const devotionals = allDevotionals.slice(0,3)
    const devotionalLength = allDevotionals

    const studys = allStudys.slice(0,3)
    const studyLength = allStudys

    return(
        <>
        <Head>
            <title>Little Son</title>
        </Head>

        <SiteHeader pageTitle="Little Son" pageLink="/" />

        <main className="w-full pt-10">
            <div className="w-4/6 md:w-3/6 mx-auto mt-32 pt-10">
                <section className="header h-60">
                    <div className="mt-8">
                        <h1 className="text-4xl">Little Son</h1>
                        <h2 className="text-xl">Em Cristo somos feitos pequenos filhos de Deus</h2>
                    </div>
                </section>

                <section className="w-full border-thin border-gray-100 rounded-lg p-10 mb-10 flex justify-center items-center">
                    <p className="text-lg"><strong>Atenção:</strong> Ainda estamos atualizando nosso site, por isso algumas funcionalidades e conteúdos não estão disponíveis.</p>
                </section>

                <section className="littledevocional mb-12">
                    <div className="py-20">
                        <div>
                            <h1 className="text-4xl">#LittleDevocional</h1>
                            <h2 className="text-xl">Devocionais diários do projeto Little Son</h2>
                        </div>
                    </div>
                    {devotionals.map((post) => (
                        <TextCard key={post.slug} title={post.title} slug={`/littledevocional/${post.slug}`} excerpt={post.excerpt} buttonText="Ler devocional"/>
                    ))}
                    <footer>
                        <div>
                            <Link href="/littledevocional">
                                <a className="flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition-colors focus:ring-2 ring-offset-4">Ver todos os {devotionalLength.length} devocionais</a>
                            </Link>
                        </div>
                    </footer>
                </section>
            </div>

            <section className="w-full px-20 mt-20 hidden">
                <div className="w-full h-72 rounded-lg border-thin border-gray-100 grid grid-cols-3 bg-white md:z-50 overflow-hidden">
                </div>
            </section>


            {/* <div className="w-4/6 md:w-3/6 mx-auto">
                <section className="littledevocional mb-12">
                    <div className="py-20">
                        <div>
                            <h1 className="text-4xl">#LittleEstudos</h1>
                            <h2 className="text-xl">Estudos bíblicos para os pequenos conhecerem mais sobre a fé</h2>
                        </div>
                    </div>
                    {studys.map((post) => (
                        <TextCard key={post.slug} title={post.title} slug={`/littleestudos/${post.slug}`} excerpt={post.excerpt} buttonText="Ler estudo"/>
                    ))}
                    <footer>
                        <div>
                            <Link href="/littleestudos">
                                <a className="flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition-colors focus:ring-2 ring-offset-4">Ver todos os {studyLength.length} estudos</a>
                            </Link>
                        </div>
                    </footer>
                </section>
            </div> */}
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

    const allStudys = getAllStudys([
      'title',
      'slug',
      'excerpt',
      'tag',
      'date'
    ])

    return {
      props: { allDevotionals, allStudys },
    }
}