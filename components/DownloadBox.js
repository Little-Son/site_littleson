import { FiDownload } from 'react-icons/fi'
import { Button } from './Button'
import {useSession, signIn, signOut} from 'next-auth/client'

export default function SupportMaterial(props) {
    const [ session ] = useSession()
    if(session) {
        return(
            <div className="w-full mb-6 min-h-32 px-2 py-12 grid grid-cols-3 rounded-lg border-thin border-gray-100 mt-12">
                <div className="h-full flex justify-center items-center">
                  <FiDownload className="text-6xl text-gray-400"/>
                </div>

                <div className="col-span-2 flex flex-col justify-center">
                  <div className="mb-6">
                    <p className="text-xl font-bold mb-4 leading-tight">{props.title}</p>
                    <p className="text-base">Baixe, gratuitamente, o material de apoio e se aprofunde no estudo.</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                        <form method="GET" action={props.url}>
                            <Button ariaLabel="Baixar PDF">
                            Baixar PDF
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="w-full mb-6 min-h-32 px-2 py-12 grid grid-cols-3 rounded-lg border-thin border-gray-100 mt-12">
                <div className="h-full flex justify-center items-center">
                  <FiDownload className="text-6xl text-gray-400"/>
                </div>

                <div className="col-span-2 flex flex-col justify-center">
                    <div className="mb-6">
                        <p className="text-xl font-bold mb-4 leading-tight">Baixe o material de apoio</p>
                        <p className="text-base">Acesse sua conta ou crie uma gratuitamente e faça o download do material de apoio.</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <button aria-label="Fazer login" onClick={() => signIn()} className="flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition-colors focus:ring-2 ring-offset-4">
                            Fazer login
                        </button>
                    </div>
                </div>
            </div>
    )
}