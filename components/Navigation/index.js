import styled from 'styled-components'

export const Navigation = styled.nav`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:10vh;
    padding:0 4rem 0 4rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color:#ffffff;
    border-bottom:thin solid #E5E7EB;
    z-index:990;
`

export const Brand = styled.div`
    font-family:'Montserrat', sans-serif;
    font-size:1.6rem;
    font-weight:700;
    text-transform:uppercase;
    
    a {
        color:#212121;
    }

    strong {
        font-weight:900;
        margin-left:-.4rem;
    }
`

export const NavActions = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
`

export const LoginButton = styled.button`
    margin-right:1.6rem;
    padding:1rem;
    border:none;
    border-radius:.5rem;
    color:#ffffff;
    background-color:#4facfe;
`

export const UserAvatar = styled.button`
    width:4rem;
    height:4rem;
    margin-right:1.6rem;
    border:2px solid #ffffff;
    border-radius:2rem;
    box-shadow:0 0 2px rgba(0,0,0,.3);
    color:#ffffff;
    overflow:hidden;
    background-color:#4facfe;

    img {
        width:100%;
        height:100%;
    }
`

export const OffCanvasButton = styled.button`
    color:#212121;
    border:none;
    outline:none;
    background:transparent;
`

export const OffCanvas = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    z-index:990;
    overflow:hidden;
    transition:.2s ease-out;

    button {
        position:absolute;
        top:2rem;
        right:2rem;
        border:none;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        padding:1rem 2rem 1rem 2rem;
        border-radius:1rem;
        background:#E5E7EB;

        svg {
            margin-left:1.4rem;
        }
    }

    ul {
        width:70vw;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        li {
            width:100%;
            list-style:none;

            a {
                width:100%;
                display:flex;
                flex-direction:row;
                align-items:center;
                margin:1rem 0 1rem;
                padding:1.6rem 2rem 1.6rem 2rem;
                font-family:'Montserrat', sans-serif;
                font-size:1.8rem;
                font-weight:700;
                color:#191919;
                border-radius:1rem;
                transition:.2s ease-out;
                
                svg {
                    margin-right:2rem;
                }

                :hover,
                :focus {
                    color:#ffffff;
                    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
                    transition:.2s ease-in;
                }
            }
        }
    }
`