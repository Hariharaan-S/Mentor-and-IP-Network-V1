import styled from "styled-components";

const textColorLight = "hsl(228, 12%, 75%)";
export const SyledHome = styled.div`
    position: relative;

`

export const StyledHomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    row-gap: 3.5rem;
    width: 100%;
    background: linear-gradient(170deg,
            hsl(0, 0%, 22%)0%,
            hsl(0, 0%, 6%)30%);
`

export const StyledHomeTitle = styled.h1`
    color: #fff;
    font-size: 4rem;
    line-height: 120%;
    margin-bottom: 1.25rem;
    width: 100%;
    font-family: 'Poppins', sans-serif;
`

export const StyledHomeData = styled.div`
    padding: 6rem 8rem;
`

export const StyledHomeDescription = styled.p`
    color: ${textColorLight};
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    max-width: 95%;
`