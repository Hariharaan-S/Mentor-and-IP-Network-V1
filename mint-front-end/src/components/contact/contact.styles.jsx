import styled from "styled-components";
import { ImageOverlay } from "../services-component/services.styles";

export const StyledContact = styled.div`
    position: relative;
    padding: 7rem 10rem;
`

export const StyledContactImage = styled.div`
    position: absolute;
    margin-left: 55.5rem;
    margin-top: 8.3rem;
    width: 450px;
    height: 600px;
    overflow: hidden;
    border-radius: 250px 250px 16px 16px;
    inset: 0;
    box-shadow: 0 16px 32px hsla(228, 66%, 25%, hsla(228, 66%, 25%, .25));
    & > img {
        width: 100%;
        height: 100%;
    }
`

export const StyledImageOverlay = styled(ImageOverlay)`
    height: 650px;
`

