import styled from "styled-components";

export const StyledButton = styled.button`
    display: inline-block;
    background: linear-gradient(101deg,
            hsl(228, 66%, 53%),
            hsl(228, 66%, 47%));
    color: #fff;
    padding: 14px 28px;
    border-radius: .5rem;
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    box-shadow: 0 4px 8px hsla(228, 66%, 45%, .25);
    outline: none;
    border: none;
    transition: 1s;
    transition-delay: 0.5s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 12px hsla(228, 66%, 25%, .25);
    }
`