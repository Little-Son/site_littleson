import styled from 'styled-components'

const postFeatured = (featured, postType) => {
    if(featured === true && postType === "littledevocional") {
        return`
            position:relative;
            height:40rem;
            padding-left:4rem;
            padding-right:4rem;
            overflow:hidden;
            background:transparent;

            ::before {
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                content:'';
                background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
                opacity:.8;
                z-index:1;
            }

            header,
            section {
                z-index:2;
            }

            header {
                h3 {
                    margin-top:0;
                    color: #ffffff;
                }
                
                span {
                    display:none;
                }
            }

            section {
                color: #ffffff;
            }

            img {
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:40rem;
                z-index:0;
            }

        `
    }
    if(featured === true && postType === "biblioteca") {
        return`
            position:relative;
            height:40rem;
            padding-left:4rem;
            padding-right:4rem;
            overflow:hidden;
            background:transparent;
            

            ::before {
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                content:'';
                background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
                opacity:.8;
                z-index:1;
            }

            header {
                h3 {
                    margin-top:0;
                    color: #ffffff;
                }
                span {
                    display:none;
                }
                z-index:1;
            }

            section {
                color: #ffffff;
                z-index:1;
            }

            img {
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:40rem;
                z-index:0;
            }

        `
    }
    return`
        position:relative;
        min-height:14rem;
        border:thin solid #E5E7EB;
        background-color:#ffffff;
        overflow:hidden;
        
        img {
            display:none!important;
        }
    `
}

const GetPostTag = (tag, status) => {
    if(tag === "littledevocional" || tag === "changelog") {
        return`
            background:#fe9a8b;
        `
    }
    if(tag === "biblioteca") {
        return`
            background:#4facfe;
        `
    }
    if(tag === "littleestudos") {
        return`
            color:#ffffff;
            background:#4B5563;
        `
    }
    if(status === "production") {
        return`
            color:#ffffff;
            background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        `
    }
    if(status === "validation") {
        return`
            color:#ffffff;
            background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        `
    }
}

export const PostCard = styled.a`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:2rem 0 2rem;
    padding:4rem 2rem 4rem 2rem;
    border-radius:2rem;
    ${({ featured, postType }) => postFeatured(featured, postType)}
`

export const PostCardHeader = styled.header`
    padding-bottom:1rem;
    margin-bottom:1rem;
    border-bottom:thin solid #F3F4F6;

    h3 {
        margin-top:2rem;
        font-family:'Montserrat', sans-serif;
        font-size:2.4rem;
        color:#4B5563;
    }
`

export const PostTag = styled.span`
    padding:.6rem 1.2rem .6rem 1.2rem;
    font-family:'Montserrat', sans-serif;
    font-size:1.2rem;
    color:#ffffff;
    border-radius:2rem;
    ${({ tag, status }) => GetPostTag(tag, status)}
`

export const PostCardContent = styled.section`
    margin-top:1rem;
    font-family:'Montserrat', sans-serif;
    font-size:1.4rem;
    line-height:2rem;
    color:#6B7280;

    p {
        margin:.5rem 0 .5rem;
    }
`