import styled from "styled-components";
import ForumImage from "../../asset/forum.webp"

export const StyledForumHero = styled.div`
    width: 100%;
    height: 70vh;
    background-image: url(${ForumImage});
    background-repeat: no-repeat;
    background-size: cover;
`

export const ForumOverlay = styled.div`
    background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2));
    width: 100%;
    height: 70vh;
    opacity: 0.7;
`

export const StyledForumHeroContent = styled.div`
    position: relative;
    width: 80%;
    margin: -23rem auto 0 auto;
    text-align: center;
    z-index: 10;

    & > h1 {
        color: #fff;
        font-size: 4rem;
    }

    & > p {
        color: #fff;
        margin-top: -2rem;
    }
`

export const ForumButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 2rem;
`
