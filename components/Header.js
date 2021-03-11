import Link from 'next/link'
import { FiMenu } from "react-icons/fi"

export default function SiteHeader(props) {
    return(
        <header className="fixed top-0 left-0 w-screen py-8 px-6 lg:px-20 flex flex-row justify-between items-center bg-white md:bg-transparent">
            <div className="w-5/6 md:w-72 whitespace-nowrap truncate">
                <Link href={props.pageLink}>
                    <a title={props.pageTitle} className="ml-2 text-lg font-bold focus:outline-none focus:ring-2 focus:text-blue-300 rounded transition-colors">{props.pageTitle}</a>
                </Link>
                
                <span> / {props.children}</span>
            </div>

            <div className="flex flex-row items-center">
                <Link href="/links">
                    <a className="mr-6 text-2xl focus:outline-none focus:ring-2 ring-offset-4 focus:text-blue-300 rounded transition-colors"><FiMenu /></a>
                </Link>
            </div>
        </header>
    )
}