import Head from 'next/head'
import SiteHeader from '../../components/Header'
import { providers, signIn, useSession } from 'next-auth/client'

export default function SignIn({ providers }) {
  // if(session) {
  //   return {
  //     redirect: {
  //       destination: '/', // some destination '/dashboard' Ex,
  //       permanent: false,
  //     },
  //   }
  // }

  return (
    <>
    <Head>
      <title>Login | Little Son</title>
    </Head>

    <SiteHeader pageTitle="Little Son" pageLink="/">
      <span className="text-lg">Fazer login</span>
    </SiteHeader>

    <main className="w-full h-screen px-12 lg:px-20 py-12 flex flex-col justify-center items-center">
      <section className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:text-right lg:px-10">
          <h1 className="text-4xl mb-2">Fazer login</h1>
          <h2 className="text-xl mb-2 lg:mb-6">Selecione uma das opções, entre em sua conta e tenha acesso ilimitado ao nosso conteúdo.</h2>
        </div>
                  
        <div className="w-full mt-12 lg:mt-0 text-center lg:text-left lg:w-1/2">
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button aria-label={`Entrar com ${provider.name}`} className="flex justify-center items-center my-4 px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition-colors focus:ring-2 ring-offset-4" onClick={() => signIn(provider.id)}>Entrar com {provider.name}</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  </>
  )
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers()
  }
}