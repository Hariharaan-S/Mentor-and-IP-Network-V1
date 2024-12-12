import styled from "styled-components";

export const FooterSocialList = styled.ul`
    display: flex;
    padding: 0;
    column-gap: 1rem;
`
export const SocialMediaLink = styled.a`
    font-size: 1.25rem;
    color: var(--text-color);
    transition: 1s;
    & > i {
        color: hsl(228, 15%, 50%);
    }
    &:hover {
        color: hsl(228, 57%, 28%);
    }
`