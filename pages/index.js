import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *,*::before, *::after {
        margin:0;
        padding:0;
        box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
    }
    html {
        font-size:62.5%;
        overflow-x:hidden;
    }
    a, a:hover, a:focus {
        text-decoration:none;
    }
    a, button {
        cursor: pointer;
    }
`

const Info = styled.section`
    width:100vw;
    min-height:100vh;
    color:#212121;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

    h1 {
        font-family:sans-serif;
        font-size:3rem;
        margin-bottom:1rem;
    }

    h2 {
        font-family:sans-serif;
        font-size:1.6rem;
    }

    div {
        height:40vh;
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
        align-items:center;
        text-align:center;
        padding-bottom:4rem;
    }

`

const Ads = styled.div`
    margin-top:4rem;
    width:90vw;
    background:#c2e9fb;
`

export default function HomePage() {
    return(
        <>
        <Head>
            <title>Little Son | Estamos em manutenção</title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-43096087-1"></script>
            <script src="/scripts/analytics.js" />
        </Head>
        <div>
            <GlobalStyle />
            <Info>
                <div>
                    <h1>Estamos offline</h1>
                    <h2>Hey, aguarde só um pouco, estamos atualizando o projeto Little Son.</h2>
                </div>
                
                <Ads>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <ins className="adsbygoogle"  style={{display: 'block'}} data-ad-client="ca-pub-8744567957048944" data-ad-slot="4351792874" data-ad-format="auto" data-full-width-responsive="true"></ins>
                    <script src="/scripts/ads.js" />
                </Ads>
            </Info>
        </div>
        </>
    )
}