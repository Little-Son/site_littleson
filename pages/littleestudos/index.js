import Link from 'next/link'
import SiteHeader from '../../components/Header'
import {Button} from '../../components/Button'
import { FiExternalLink, FiHeart, FiBookmark } from "react-icons/fi"

export default function HomePage() {
    return(
        <>
        <SiteHeader pageTitle="Little Son" pageLink="/">
            <span className="text-lg"> / LittleDevocional</span>
        </SiteHeader>

        <main className="w-4/6 md:w-3/6 mx-auto mt-32 pt-10">
            <section className="header h-60">
                <div className="mt-8">
                    <h1 className="text-4xl">#LittleDevocional</h1>
                    <h2 className="text-xl">Devocionais diários do projeto Little Son</h2>
                </div>
            </section>

            <section className="littledevocional mb-12">
                <article className="mb-20">
                    <header className="w-full mb-4 flex flex-col">
                        <h3 className="w-full text-2xl font-bold">
                            <Link href=''>
                                <a>Aenean lobortis felis ac est fringilla</a>
                            </Link>
                        </h3>
                        <Link href="/littledevocional">
                            <a className="py-2 text-gray-500 font-bold">#LittleDevocional</a>
                        </Link>
                    </header>

                    <section className="mb-6">
                        <p className="text-base text-gray-600 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium tellus nec lectus auctor facilisis et id turpis. Mauris ut maximus tortor, eget sollicitudin dui. Phasellus sed ex tortor. In justo metus, euismod ac mattis a, pretium sed quam. Nullam in ultrices lorem, eget ultrices dui. Aenean lobortis felis ac est fringilla, et pharetra nibh ullamcorper. Vivamus congue metus nisi, ac porttitor augue accumsan sed. Proin aliquam semper metus, sed tempus turpis tempus quis.</p>
                    </section>
                    <footer className="w-full">
                        <div className="w-full lg:w-1/3 grid grid-cols-3 gap-4">
                            <Button>
                                <FiExternalLink />
                            </Button>

                            <Button>
                                <FiHeart />
                            </Button>

                            <Button>
                                <FiBookmark />
                            </Button>
                        </div>
                    </footer>
                </article>

                <article className="mb-20">
                    <header className="w-full mb-4 flex flex-col">
                        <h3 className="w-full text-2xl font-bold">
                            <Link href=''>
                                <a>Proin aliquam semper metus, sed tempus turpis tempus qui</a>
                            </Link>
                        </h3>
                        <Link href="">
                            <a className="py-2 text-gray-500 font-bold">#LittleDevocional</a>
                        </Link>
                    </header>

                    <section className="mb-6">
                        <p className="text-base text-gray-600 leading-tight">Aenean lobortis felis ac est fringilla, et pharetra nibh ullamcorper. Vivamus congue metus nisi, ac porttitor augue accumsan sed. Proin aliquam semper metus, sed tempus turpis tempus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium tellus nec lectus auctor facilisis et id turpis.</p>
                    </section>
                    <footer className="w-full">
                        <div className="w-full lg:w-1/3 grid grid-cols-3 gap-4">
                            <Button>
                                <FiExternalLink />
                            </Button>

                            <Button>
                                <FiHeart />
                            </Button>

                            <Button>
                                <FiBookmark />
                            </Button>
                        </div>
                    </footer>
                </article>
            </section>
        </main>
        </>
    )
}