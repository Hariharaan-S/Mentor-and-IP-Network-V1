import styled from "styled-components";

export const StyledFooterCard = styled.div`
    text-align: center; 

`

export const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;

    & > li {
        padding-top: 1rem;
    }

    & > li a {
        text-decoration: none;
        color: hsl(228, 15%, 50%);
        font-weight: 500;
        font-size: .9rem;
    }
`