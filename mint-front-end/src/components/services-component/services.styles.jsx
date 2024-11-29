import styled from "styled-components";

export const StyledServices = styled.div`
    position: relative;
`

export const ImageOverlay = styled.div`
    width: 500px;
    height: 600px;
    background-color: hsl(228, 24%, 97%);
    border-radius: 250px 250px 16px 16px;
`

export const StyledImage = styled.div`
    position: absolute;
    margin-left: 12.8rem;
    margin-top: 5.7rem;
    width: 450px;
    height: 550px;
    overflow: hidden;
    border-radius: 250px 250px 16px 16px;
    inset: 0;
    box-shadow: 0 16px 32px hsla(228, 66%, 25%, hsla(228, 66%, 25%, .25));
    & > img {
        width: 100%;
        height: 100%;
    }
`
