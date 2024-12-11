import styled from "styled-components";
import StartupHomeIcon from "../../asset/startupHome.jpg"

export const FeatureSubHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 4rem 7rem;
    height: 45vh;

    & > h2{
        font-size: 2.3rem;
    }
    & > p {
        text-align: center;
        line-height: 1.5;
        margin-top: -1rem;
        font-size: 1rem;
    }

`

export const Flowchart = styled.div`
    background-image: url(${StartupHomeIcon});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 70vh;
    display: flex;
    align-items: center;
    justfy-content: center;
`

export const FlowchartSubTopic = styled.div`
    max-width: 1080px;
    margin: 2rem auto;
    padding: 4rem 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;

    h2 {
        font-size: 2.3rem;
    }
`

export const FeatureStartupOverlay = styled.div`
    position: absolute;
    background: rgba(0,0,0,.8);
    width: 100%;
    height: 70vh;
    opacity: 0.7;
`



export const StartupFeatureContainer = styled.div`

`