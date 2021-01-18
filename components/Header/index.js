import styled from 'styled-components'

const GetHeaderPage = page => {
    if(page === "home") {
        return`
            height:70vh;
            padding-top:10vh;
            justify-content:center;
            align-items:center;
            background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
        `
    }
    if(page === "feed") {
        return`
            padding-top:10vh;
            background-color:#BFDBFE;
        `
    }
    if(page === "chagelog") {
        return`
            height:40vh;
            justify-content:flex-end;
            align-items:center;
            border-radius:0;
            background:transparent;

            section h1 {
                color:#212121;
            }

            section h2 {
                color:#999999;
            }
        `
    }
}

const GetHeaderInfo = type => {
    if(type === "info") {
        return`
        display:flex;
        flex-direction:column;
        `
    }
    if(type === "banner") {
        return`
            position:absolute;
            bottom:-12%;
            left:50%;
            transform:translateX(-50%);
            width:80vw;
            min-height:10vh;
            padding:4rem 2rem 4rem 2rem;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:'Montserrat', sans-serif;
            font-size:1.4rem;
            line-height:2rem;
            text-align:center;
            border-radius:2rem;
            box-shadow:0 0 15px rgba(0,0,0,.2);
            background:#ffffff;

            a {
                color:#212121;
            }

            strong {
                color:#fe9a8b;
            }
        `
    }
}

export const Header = styled.header`
    position:relative;
    width:100vw;
    padding:4rem;
    display:flex;
    flex-direction:column;
    border-bottom-left-radius:3rem;
    border-bottom-right-radius:3rem;
    ${({ page }) => GetHeaderPage(page)}
`

export const HeaderInfo = styled.section`
    width:90%;

    h1, h2 {
        font-family:'Montserrat', sans-serif;
    }

    h1 {
        font-size:4rem;
        font-weight:700;
        color:#ffffff;

        strong {
            margin-left:-.8rem;
            font-weight:900;
        }
    }

    h2 {
        font-size:2rem;
        color:#ffffff;
    }

    ${({ type }) => GetHeaderInfo(type)}
`