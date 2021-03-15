import { FiDownload } from 'react-icons/fi'
import { Button } from './Button'

export default function SupportMaterial(props) {
    return(
        <div className="w-full mb-6 min-h-32 px-2 py-12 grid grid-cols-3 rounded-lg border-thin border-gray-100 mt-12">
            <div className="h-full flex justify-center items-center">
                <FiDownload className="text-6xl text-gray-400"/>
            </div>

            <div className="col-span-2 flex flex-col justify-center">
                <div className="mb-6">
                <p className="text-xl font-bold mb-4 leading-tight">{props.title}</p>
                <p className="text-base">{props.description}</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <form method="GET" action={props.url} target="_blanck">
                        <Button ariaLabel="Baixar PDF">
                        Baixar PDF
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}