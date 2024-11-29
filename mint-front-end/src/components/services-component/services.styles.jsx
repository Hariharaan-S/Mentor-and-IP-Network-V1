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

export const AccordionItem = styled.div`
    background-color: var(--body-color);
    border: 2px solid var(--border-color);
    border-radius: .5rem;
    padding: 1rem .75rem;
`

export const AccordionHeader = styled.header`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const AccordionArrow = styled.div`
    display: inline-flex;
    background-color: var(--first-color-lighten);
    padding: .25rem;
    color: var(--first-color);
    border-radius: 2px;
    font-size: 10px;
    margin-left: auto;
    transition: 1s;
    & > i {
        transition: 1s;
    }
`

export const AccordionDescription = styled.p`
    font-size: var(--smaller-font-size);
    padding: 1.25rem 2.5rem 0 2.75rem;
`

export const AccordionContent = styled.div`
    overflow: hidden;
    height: 0;
    transition: all .75s ease;
`
