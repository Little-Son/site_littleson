import styled from 'styled-components'
import Head from 'next/head'

const GetHeaderPage = page => {
    if(page === "home") {
        return`
            background-color:#F3F4F6;
        `
    }
    if(page === "feed") {
        return`
            
        `
    }
}

const GetHeaderInfo = type => {
    if(type === "info") {
        return`
        padding:2rem;
        padding:4rem;
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        @media screen and (min-width:1024px) {
            padding:4rem;
            align-items:flex-start;
        }
        `
    }
    if(type === "banner") {
        return`
        `
    }
}

const Header = styled.header`
    width:100vw;
    padding:4rem;
    height:50vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    ${({ page }) => GetHeaderPage(page)}

    @media screen and (min-width:1024px) {
        height:80vh;
        flex-direction:row;
    }
`

const HeaderInfo = styled.section`
    width:100%;
    height:auto;

    @media screen and (min-width:1024px) {
        width:50%;
        height:80%;
    }
    h1, h2 {
        font-family:'Montserrat', sans-serif;
    }

    h1 {
        font-size:4rem;
        font-weight:900;
        text-transform:uppercase;
    }

    h2 {
        font-size:2rem;
    }

    ${({ type }) => GetHeaderInfo(type)}
`

export default function HomePage() {
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
            <Header page="home">
                <HeaderInfo type="info">
                    <h1>Little Son</h1>
                    <h2>Em Cristo somos feitos pequenos filhos de Deus</h2>
                </HeaderInfo>

                <HeaderInfo type="banner">
                    Hello
                </HeaderInfo>
            </Header>
        </div>
    )
}