import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi"

export function TextCard({title, slug, excerpt, buttonText}) {
    return(
        <article className="mb-20">
            <header className="w-full mb-4 flex flex-col">
                <h3 className="w-full text-2xl font-bold">
                    <Link href={slug}>
                        <a className="focus:outline-none focus:ring-2 ring-offset-4 focus:text-blue-300 rounded transition-colors">{title}</a>
                    </Link>
                </h3>
            </header>

            <section className="mb-6">
                <p className="text-base text-gray-600 leading-tight">{excerpt}</p>
            </section>
            <footer className="w-full">
                <div className="w-full lg:w-1/3 grid grid-cols-1">
                    <Link href={slug}>
                        <a className="flex justify-center items-center px-4 py-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition-colors focus:ring-2 ring-offset-4">
                            {buttonText} <FiExternalLink className="ml-2"/>
                        </a>
                    </Link>
                </div>
            </footer>
        </article>
    )
}

export function LinkCard(props) {
    return(
        <article className="mb-20">
            <header className="w-full mb-2 flex flex-col">
                <span className="w-full text-2xl font-bold mb-4">{props.icon}</span>
                <h3 className="w-full text-2xl font-bold">
                    <Link href={props.slug}>
                        <a className="focus:outline-none focus:ring-2 ring-offset-4 focus:text-blue-300 rounded transition-colors">{props.title}</a>
                    </Link>
                </h3>
            </header>

            <section>
                <Link href={props.slug}>
                <a className="text-base text-gray-600 leading-tight">{props.excerpt}</a>
                </Link>
            </section>
        </article>
    )
}