import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/Header'

export default function HomePage() {

    return(
        <>
        <Head>
            <title>Little Son</title>
            <link rel="icon" type="image/png" href="/assets/favicon-404.png"/>
        </Head>

        <SiteHeader pageTitle="Little Son" pageLink="/">
            <span className="text-lg">Erramos o caminho</span>
        </SiteHeader>

        <main className="w-full h-screen px-12 lg:px-20 py-12 flex items-center">
            <section className="w-full flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img className="w-1/2 lg:w-1/3" src="/images/lost-sheep.svg"/>
                </div>

                <div className="w-full mt-12 lg:mt-0 text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl">Oh, não!</h1>
                    <h2 className="text-xl mb-2 lg:mb-6">Parece que erramos o caminho.</h2>
                    <Link href="/">
                        <a className="text-blue-500">← Volte à página inicial e tente novamente</a>
                    </Link>
                </div>
            </section>
        </main>
        </>
    )
}