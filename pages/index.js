import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Download, Type, FileText, Info, MessageCircle, X } from 'styled-icons/feather'
import { Header, HeaderInfo } from '../components/Header'
import { Navigation, Brand, NavActions, OffCanvas, LoginButton, UserAvatar, OffCanvasButton } from '../components/Navigation'
import { Main } from '../components/Main'
import { FeedHeader, DevocionalFeed, BibliotecaFeed } from '../components/Feed'
import { PostCard, PostCardHeader, PostTag, PostCardContent } from '../components/PostCard'
import { signIn, signOut, useSession } from 'next-auth/client'
import gravatar from 'gravatar'
import styled from 'styled-components'

function closeOffCanvas() {
}

function openOffCanvas() {

}

export default function HomePage() {
    const [ session, loading] = useSession()
    return(
        <div>
            <Head>
                <title>Little Son | Em Cristo somos feitos pequenos filhos de Deus.</title>
                <link rel="manifest" href="/manifest.json" />
                <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
                <meta name="theme-color" content="#fafafa"/>
            </Head>

            <Navigation>
                <Brand>
                    Little <strong>Son</strong>
                </Brand>

                <NavActions>
                    {!session && 
                        <LoginButton onClick={signIn}>
                            Entrar
                        </LoginButton>
                    }
                    {session && 
                        <UserAvatar>
                            <img src={gravatar.url(session.user.email, {protocol: 'https'})}/>
                        </UserAvatar>
                        
                        // <LoginButton onClick={signOut}>
                        //     Sair
                        // </LoginButton>
                    }
                    <OffCanvasButton>
                        <Menu size="24"/>
                    </OffCanvasButton>
                </NavActions>
            </Navigation>

            <OffCanvas>
                <button>
                    Fechar <X size="28"/>
                </button>
                <ul>
                    <li>
                        <Link href="/biblioteca">
                            <a>
                                <Download size="24"/>
                                Biblioteca Little Son
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/littleestudos">
                            <a>
                                <Type size="24"/>
                                #LittleEstudos
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/littledevocional">
                            <a>
                                <FileText size="24"/>
                                #LittleDevocional
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre">
                            <a>
                                <Info size="24"/>
                                Sobre o projeto
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato">
                            <a>
                                <MessageCircle size="24"/>
                                Fale Conosco
                            </a>
                        </Link>
                    </li>
                </ul>
            </OffCanvas>

            <Header page="home">
                <HeaderInfo type="info">
                    <h1>Little <strong>Son</strong></h1>
                    <h2>Em Cristo somos feitos pequenos filhos de Deus</h2>
                </HeaderInfo>

                <HeaderInfo type="banner">
                    <Link href="/changelog">
                        <a>Seja bem-vindo(a) ao novo site do projeto Little Son. Confira as atualizações do projeto e o que mudou. <strong>Saiba mais.</strong></a>
                    </Link>
                </HeaderInfo>
            </Header>

            <Main banner>
                <DevocionalFeed>
                    <FeedHeader>
                        <Link href="/littledevocional">
                            <a><h3>#LittleDevocional</h3></a>
                        </Link>
                        <p>Leia os devocionais mais recentes do projeto Little Son</p>
                    </FeedHeader>

                    <Link href="/littledevocional/">
                        <PostCard postType="littledevocional" featured>
                            <PostCardHeader>
                                <PostTag tag="littledevocional">
                                    #LittleDevocional
                                </PostTag>
                                <h3>Podeis fazer o bem, sendo ensinados para o mal?</h3>
                            </PostCardHeader>

                            <PostCardContent>
                                <p>"Então disse o Senhor a Moisés. Eis que vos farei chover pão dos céus, e o povo sairá, e colherá cada dia a porção para cada dia, para que eu veja se anda em minha lei ou não" (Êxodo 16:4 - ARC)</p>
                            </PostCardContent>

                            <Image
                                src="https://images.unsplash.com/photo-1610963523106-28bc22bf0e00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                            />
                        </PostCard>
                    </Link>

                    <Link href="/littledevocional/">
                        <PostCard postType="littledevocional">
                            <PostCardHeader>
                                <PostTag tag="littledevocional">
                                    #LittleDevocional
                                </PostTag>
                                <h3>Não temerei o que possa fazer o homem</h3>
                            </PostCardHeader>

                            <PostCardContent>
                                <p>"Em Deus tenho posto a minha confiança; não temerei o que me possa fazer o homem" (Salmos 56:11)</p>
                            </PostCardContent>
                        </PostCard>
                    </Link>

                    <Link href="/littledevocional/">
                        <PostCard postType="littledevocional">
                            <PostCardHeader>
                                <PostTag tag="littledevocional">
                                    #LittleDevocional
                                </PostTag>
                                <h3>Não há inteligência contra Deus</h3>
                            </PostCardHeader>

                            <PostCardContent>
                                <p>“Não há sabedoria, nem inteligência, nem conselho contra o Senhor” (Provérbios 21:30)</p>
                            </PostCardContent>
                        </PostCard>
                    </Link>
                </DevocionalFeed>
                <BibliotecaFeed>
                    <FeedHeader>
                        <Link href="/biblioteca">
                            <a><h3>Biblioteca Little Son</h3></a>
                        </Link>
                        <p>Baixe nossos desenhos para colorir, calendários, wallpapers e muito mais.</p>
                    </FeedHeader>

                    <Link href="/biblioteca/">
                        <PostCard postType="biblioteca">
                            <PostCardHeader>
                                <PostTag tag="biblioteca">
                                    Caça-Palavras
                                </PostTag>
                                <h3>Os Doze Apóstolos</h3>
                            </PostCardHeader>

                            <PostCardContent>
                                <p>"E, chamando os seus doze discípulos, deu-lhes poder sobre os espíritos imundos, para os expulsarem, e para curarem toda a enfermidade e todo o mal" (Mateus 10:1)</p>
                            </PostCardContent>
                        </PostCard>
                    </Link>

                    <Link href="/biblioteca/">
                        <PostCard postType="biblioteca" featured>
                            <PostCardHeader>
                                <PostTag tag="biblioteca">
                                    Desenho para colorir
                                </PostTag>
                                <h3>A Armadura de Deus</h3>
                            </PostCardHeader>

                            <PostCardContent>
                                <p>"Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo" (Efésios 6:11)</p>
                            </PostCardContent>

                            <Image
                                src="https://images.unsplash.com/photo-1577892211256-b03ac5f488b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                            />
                        </PostCard>
                    </Link>

                    <Link href="/biblioteca/">
                        <PostCard postType="biblioteca">
                            <PostCardHeader>
                                <PostTag tag="biblioteca">
                                    Desenho para colorir
                                </PostTag>
                                <h3>Deus não faz acepção de pessoas</h3>
                            </PostCardHeader>

                            <PostCardContent>
                                <p>O amor de Deus não seleciona, não escolhe, o Senhor não faz acepção de pessoas e não olha da maneira como olhamos.</p>
                            </PostCardContent>
                        </PostCard>
                    </Link>
                </BibliotecaFeed>
            </Main>
        </div>
    )
}