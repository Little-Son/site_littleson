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
    height:100vh;
    color:#212121;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:#fafafa;

    h1 {
        font-family:sans-serif;
        font-size:3rem;
    }

    h2 {
        font-family:sans-serif;
        font-size:1.6rem;
    }

`

export default function HomePage() {
    return(
        <div>
            <GlobalStyle />
            <Info>
                <h1>Estamos offline</h1>
                <h2>Hey, aguarde só um pouco, estamos atualizando o projeto Little Son.</h2>
            </Info>
        </div>
    )
}