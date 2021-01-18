import Head from 'next/head'
import Link from 'next/link'
import { Menu } from 'styled-icons/feather'
import { Header, HeaderInfo } from '../../components/Header'
import { Navigation, Brand, OffCanvasButton } from '../../components/Navigation'
import { Main } from '../../components/Main'
import { PostCard, PostCardHeader, PostTag, PostCardContent } from '../../components/PostCard'
import styled from 'styled-components'

export default function HomePage() {
    return(
        <div>
            <Head>
                <title>Changelog | Atualizações do Projeto Little Son.</title>
            </Head>

            <Navigation>
                <Brand>
                    <Link href="/">
                        <a>Little <strong>Son</strong></a>
                    </Link>
                </Brand>

                <OffCanvasButton>
                    <Menu size="24"/>
                </OffCanvasButton>
            </Navigation>

            <Header page="chagelog">
                <HeaderInfo type="info">
                    <h1>Changelog</h1>
                    <h2>Confira as atualizações do projeto Little Son.</h2>
                </HeaderInfo>
            </Header>

            <Main>
                <PostCard>
                    <PostCardHeader>
                        <PostTag status="validation">
                            Em testes
                        </PostTag>
                        <h3>PWA</h3>
                    </PostCardHeader>

                    <PostCardContent>
                        <p>Adicionamos o recurso PWA em nosso site. Você pode, a partir de hoje, instalar o Little Son em seu celular.</p>
                        <p>Recursos como notificações nativas e navegação offline, estão disponíveis.</p>
                    </PostCardContent>
                </PostCard>

                <PostCard>
                    <PostCardHeader>
                        <PostTag status="production">
                            Implementado
                        </PostTag>
                        <h3>Atualização do #LittleQUIZ</h3>
                    </PostCardHeader>

                    <PostCardContent>
                        <p>Atualizamos o #LittleQUIZ, nosso quiz interativo de perguntas bíblicas para você se divertir.</p>
                    </PostCardContent>
                </PostCard>

                <PostCard>
                    <PostCardHeader>
                        <PostTag status="production">
                            Implementado
                        </PostTag>
                        <h3>Migração da Hospedagem e Atualização do Site</h3>
                    </PostCardHeader>

                    <PostCardContent>
                        <p>Migramos o projeto Little Son para uma hospedagem nova. Atualizamos também nosso site que, em comparação com o site antigo, não apenas está muito mais rápido, como também foi otimizado para navegação em dispositivos movéis.</p>
                        <p><strong>ATENÇÂO:</strong> Alguns conteúdos podem não estar funcionando corretamente, mas em breve concluíremos toda a atualização do projeto.</p>
                    </PostCardContent>
                </PostCard>
            </Main>
        </div>
    )
}