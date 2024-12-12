import styled from "styled-components";
import StartupHomeIcon from "../../asset/startupHome.jpg"


export const StyledStartupHero = styled.div`
    width: 100%;
    height: 70vh;
    background-image: url(${StartupHomeIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export const StyledStartupContainer = styled.div`
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

export const StartupOverlay = styled.div`
    background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2));
    width: 100%;
    height: 70vh;
    opacity: 0.7;
`