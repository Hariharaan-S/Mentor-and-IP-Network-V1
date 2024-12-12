import styled from "styled-components";

export const StyledFooter = styled.div`
    padding: 3rem 6rem;
`

export const FooterContainer = styled.div`
    display: flex;
    column-gap: 5%;
    width: 100%;
`

export const FooterInfo = styled.div`
    display: flex;
    margin-top: 5.5rem;
    flex-direction: row;
    column-gap: 70%;
`

export const FooterCopy = styled.span`
    margin-right: -5rem;
    font-size: 1rem;
    font-weight: 400;
    color: hsl(228, 15%, 50%);
`

export const FooterPrivacy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 1.25rem;

    & > a {
        text-decoration: none;
        font-size: .8rem;
        font-weight: 500;
        color: hsl(228, 15%, 50%);
    }
`