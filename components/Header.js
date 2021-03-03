import Link from 'next/link'
import { FiMenu } from "react-icons/fi"
import { signIn, signOut, useSession } from 'next-auth/client'
import { Menu, Transition } from "@headlessui/react"

export default function SiteHeader(props) {
    const [session, loading] = useSession()
    return(
        <header className="fixed top-0 left-0 w-screen py-8 px-6 lg:px-20 flex flex-row justify-between items-center bg-white md:bg-transparent">
            <div className="w-5/6 md:w-72 whitespace-nowrap truncate">
                <Link href={props.pageLink}>
                    <a title={props.pageTitle} className="ml-2 text-lg font-bold focus:outline-none focus:ring-2 focus:text-blue-300 rounded transition-colors">{props.pageTitle}</a>
                </Link>
                
                <span> / {props.children}</span>
            </div>

            <div className="flex flex-row items-center">
                {loading && (
                    <div className="w-6 h-6 text-blue-500 rounded-full mx-6">
                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                )}
                {!session && (
                    <>
                        <button className="mx-6" onClick={() => signIn()}>Login</button>
                    </>
                )}
                {session &&  (
                    <div className="flex items-center justify-center">
                        <div className="relative inline-block text-left">
                            <Menu>
                                {({ open }) => (
                                <>
                                    <Menu.Button>
                                        <figure className="w-8 h-8 rounded-full bg-gray-300 mx-6">
                                            <img src={session.user.image} className="w-full object-cover" />
                                        </figure>
                                    </Menu.Button>

                                    <Transition show={open} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items static className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <button 
                                                    className={`${
                                                        active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                                    onClick={() => signOut()}>
                                                        Sair
                                                </button>
                                            )}
                                            </Menu.Item>
                                        </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                                )}
                            </Menu>
                        </div>
                    </div>
                )}
                <Link href="/links">
                    <a className="mr-6 text-2xl focus:outline-none focus:ring-2 ring-offset-4 focus:text-blue-300 rounded transition-colors"><FiMenu /></a>
                </Link>
            </div>
        </header>
    )
}