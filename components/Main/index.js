import styled from 'styled-components'

const IsHeaderBanner = banner => {
    if(banner === true) {
        return`
            margin:14vh auto 2rem;
        `
    }
    return`
        margin:4rem auto 4rem;
    `
}

export const Main = styled.main`
    width:80vw;
    padding:2rem 0 2rem;

    ${({ banner }) => IsHeaderBanner(banner)}
`