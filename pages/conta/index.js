import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import SiteFooter from '../../components/Footer'
import SiteHeader from '../../components/Header'
import Link from 'next/link'

export default function AccountPage() {
    const [session, loading] = useSession()
    return(
        <>
        <Head>
            <title>Minha Conta | Little Son</title>
        </Head>
        <SiteHeader pageTitle="Little Son" pageLink="/">
            {loading && (
                <span className="text-lg">Carregando...</span>
            )}
            {!session &&  (
                <span className="text-lg">Faça login</span>
            )}
            {session &&  (
                <span className="text-lg">Minha Conta</span>
            )}
        </SiteHeader>

            {loading && (
                <main className="w-full h-screen px-12 lg:px-20 py-12 flex items-center">
                    <section className="w-full flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 flex justify-center items-center">
                            <div className="w-12 text-blue-500 rounded-full mx-6">
                                <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="w-full mt-12 lg:mt-0 text-center lg:text-left lg:w-1/2">
                            <h1 className="text-4xl">Calma, aí</h1>
                            <h2 className="lg:w-5/6 text-xl mb-2 lg:mb-4">Estamos carregando.</h2>
                        </div>
                    </section>
                </main>
            )}
            {!session &&  (
                <main className="w-4/6 mx-auto flex justify-center items-center">
                    <div className="w-full mt-40 md:mt-20 lg:mt-40 mb-12">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center md:pt-20">
                            <div className="w-full lg:w-1/2 flex justify-center items-center">
                                <img className="w-1/2 lg:w-1/3" src="/images/lost-sheep.svg"/>
                            </div>
                            
                            
                            <div className="w-2/3 lg:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left mt-12 md:mt-0">
                                <h1 className="text-4xl">Opa, peralá</h1>
                                <h2 className="lg:w-5/6 text-xl mb-2 lg:mb-4">Parece que você está tentando acessar uma página restrita. Faça login antes.</h2>
                                <button className="w-40 mt-6 flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition-colors focus:ring-2 ring-offset-4" onClick={() => signIn()}>Fazer login</button>
                            </div>

                        </div>
                    </div>
                </main>
            )}
            {session &&  (
                <main className="w-4/6 md:w-3/6 mx-auto flex justify-center items-center">
                    <div className="w-full mt-40 md:mt-20 lg:mt-40 mb-20">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center md:pt-20">
                            <div className="w-1/3 flex justify-center">
                                <figure className="w-20 h-20">
                                    <img className="w-full object-cover" src={session.user.image} />
                                </figure>
                            </div>
                            
                            <div className="w-2/3 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left mt-12 md:mt-0">
                                <h3 className="w-full text-2xl font-bold">Olá, {session.user.name}</h3>
                                <p>Em breve estaremos adicionando alguns recursos exclusivos aqui. Qualquer dúvida entre em <Link href="/contato"><a className="text-blue-500">contato conosco.</a></Link></p>
                                <button className="mt-6 flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition-colors focus:ring-2 ring-offset-4" onClick={() => signOut()}>Sair</button>
                            </div>

                        </div>
                    </div>
                </main>
            )}
        <SiteFooter />
        </>
    )
}